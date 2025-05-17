import { UserService } from "../services/user-service";
import { FastifyRequest, FastifyReply } from "fastify";
import { signUpSchema as userSchema } from "../schemas/auth-schemas";

import { UserBookList } from "../types/book-oracle-type";
import { uploadProfilePicture } from "../utils/upload-profile-picture";

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
        .code(200)
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
    let imageUrl = "";

    try {
      for await (const part of parts) {
        if (part.type === "file") {
          const fileName = `${Date.now()}-${part.filename}`;
          const chunks: Buffer[] = [];

          for await (const chunk of part.file) {
            chunks.push(chunk);
          }

          const buffer = Buffer.concat(chunks);
          const result = await uploadProfilePicture(buffer, fileName);
          imageUrl = result.secure_url;
          await this.userService.updateProfilePictureService(id, imageUrl);
        }
      }

      if (!imageUrl) {
        return reply.code(400).send({ error: "No image has been uploaded" });
      }

      return reply
        .code(200)
        .send({ message: "Profile picture updated successfully" });
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ error: err.message });
      }
      return reply.code(500).send({ error: "Something went wrong" });
    }
  }

  async addUserBooksController(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.user as { id: string };
    const { title, coverImageUrl, bookId } = request.body as UserBookList;

    try {
      await this.userService.addUserBooksService(id, {
        bookId,
        title,
        coverImageUrl,
      });

      return reply.code(201).send({
        message: "Successfully, this book has been added to your list",
      });
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ error: err.message });
      }
      return reply.code(500).send({ error: "Something went wrong" });
    }
  }

  async getUserBooksContreller(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.user as { id: string };

    try {
      const bookList = await this.userService.getUserBooksService(id);
      return reply.send(bookList);
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      return new Error("Something went wrong");
    }
  }

  async deleteUserBooksController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const { id } = request.params as { id: string };

    try {
      await this.userService.deleteUserBookService(id);

      return reply.send({
        message: "Successfully, this book has been deleted from your list",
      });
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      return new Error("Something went wrong");
    }
  }
}
