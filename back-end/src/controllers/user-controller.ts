import { UserService } from "../services/user-service";
import { FastifyRequest, FastifyReply } from "fastify";

export class UserController {
  constructor(private userService: UserService) {}

  async profile(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.user as { id: string };

    try {
      const user = await this.userService.getProfile(id);
      if (!user) {
        return reply.code(401).send({ message: "user does not exist" });
      }

      return user;
    } catch (err: any) {
      console.log(err.message);
      return reply.code(401).send({ message: "something went wrong" });
    }
  }
}
