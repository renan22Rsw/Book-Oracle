import { UserService } from "../services/user-service";
import { FastifyRequest, FastifyReply } from "fastify";
import { signUpSchema as userSchema } from "../schemas/auth-schemas";

export class UserController {
  constructor(private userService: UserService) {}

  async getProfileController(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.user as { id: string };

    try {
      const user = await this.userService.getProfileService(id);
      if (!user) {
        return reply.code(401).send({ message: "user does not exist" });
      }

      return user;
    } catch (err: any) {
      console.log(err.message);
      return reply.code(401).send({ message: "something went wrong" });
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
      const user = await this.userService.updateProfileService(id, {
        username,
        email,
        password,
        confirmPassword,
      });

      return reply
        .code(204)
        .send({ message: "Your profile has been updated!", user });
    } catch (err: any) {
      console.log(err.message);
      return reply.code(401).send({ message: "Error during update" });
    }
  }
}
