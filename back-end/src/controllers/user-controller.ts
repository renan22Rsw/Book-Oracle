import { UserService } from "../services/user-service";
import { FastifyRequest, FastifyReply } from "fastify";
import { signUpSchema as userSchema } from "../schemas/auth-schemas";

import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

export class UserController {
  constructor(private userService: UserService) {}

  async getProfileController(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.user as { id: string };

    try {
      const user = await this.userService.getProfileService(id);

      return user;
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ error: err.message });
      }

      return reply.code(500).send({ error: "Something went wrong" });
    }
  }

  async updateProfileController(request: FastifyRequest, reply: FastifyReply) {
    const validatedFields = userSchema.safeParse(request.body);

    if (!validatedFields.success) {
      return reply.code(400).send({
        message: "Invalid request",
        errors: validatedFields.error.errors,
      });
    }

    const { id } = request.user as { id: string };
    const { username, email, password, confirmPassword } = validatedFields.data;

    try {
      await this.userService.updateProfileService(id, {
        username,
        email,
        password,
        confirmPassword,
      });

      return reply
        .code(204)
        .send({ message: "Your profile has been updated!" });
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ error: err.message });
      }
      return reply.code(500).send({ error: "Something went wrong" });
    }
  }

  async updateProfilePictureController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const parts = request.parts();
    const { id } = request.user as { id: string };
    let imageFileName = "";

    try {
      for await (const part of parts) {
        if (part.type === "file") {
          const fileName = `${Date.now()}-${part.filename}`;
          const uploadDir = path.join(__dirname, "..", "uploads");

          await fs.promises.mkdir(uploadDir, { recursive: true });

          const filePath = path.join(uploadDir, fileName);

          await pipeline(part.file, fs.createWriteStream(filePath));

          imageFileName = fileName;
        }

        if (!imageFileName) {
          return reply.code(400).send({ error: "No image has been uploaded" });
        }

        await this.userService.updateProfilePictureService(
          id,
          `/uploads/${imageFileName}`
        );
      }

      return reply
        .send(204)
        .send({ message: "Profile picture updated successfully" });
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ error: err.message });
      }
      return reply.code(500).send({ error: "Something went wrong" });
    }
  }
}
