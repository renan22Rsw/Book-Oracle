import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "../services/auth-service";
import { signUpSchema } from "../schemas/auth-schemas";
import { loginSchema } from "../schemas/auth-schemas";

export class AuthController {
  constructor(private authService: AuthService) {}

  async signupController(request: FastifyRequest, reply: FastifyReply) {
    const validatedFields = signUpSchema.safeParse(request.body);

    if (!validatedFields.success) {
      return reply.code(400).send({
        message: "Invalid request",
        errors: validatedFields.error.errors,
      });
    }

    const { username, email, password, confirmPassword } = validatedFields.data;

    try {
      const user = await this.authService.signupService({
        username,
        email,
        password,
        confirmPassword,
      });

      return reply
        .code(201)
        .send({ message: "User created successfully", user });
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ error: err.message });
      }
      return reply.code(500).send({ error: "Something went wrong" });
    }
  }

  async loginController(request: FastifyRequest, reply: FastifyReply) {
    const validatedFields = loginSchema.safeParse(request.body);

    if (!validatedFields.success) {
      return reply.code(400).send({
        message: "Invalid request",
        errors: validatedFields.error.errors,
      });
    }

    try {
      const { email, password } = validatedFields.data;

      const user = await this.authService.loginService({ email, password });

      if (!user) {
        return reply.code(400).send({ error: "Invalid credentials" });
      }

      const token = reply.server.jwt.sign(
        { id: user.id },

        { expiresIn: "1d" }
      );

      reply.setCookie("session", token, {
        path: "/",
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24,
        partitioned: true,
      });

      return reply.code(201).send({
        ...user,
        token,
      });
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ error: err.message });
      }
      return reply.code(500).send({ error: "Something went wrong" });
    }
  }

  async logoutController(request: FastifyRequest, reply: FastifyReply) {
    const { session } = request.cookies as { session: string };

    try {
      reply.clearCookie("session", { path: "/" });
      return reply.send({ message: "You have logged out successfully." });
    } catch (err) {
      if (err instanceof Error) {
        return reply.status(400).send({ error: err.message });
      }
      return reply.status(500).send({ error: "Something went wrong" });
    }
  }
}
