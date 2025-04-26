import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "../services/auth-service";
import { signUpSchema } from "../schemas/auth-schemas";
import { loginSchema } from "../schemas/auth-schemas";

export class AuthController {
  constructor(private authService: AuthService) {}

  async signup(request: FastifyRequest, reply: FastifyReply) {
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

      if (!user) {
        return reply.code(409).send({ message: "User already exists" });
      }

      return reply
        .code(201)
        .send({ message: "User created successfully", user });
    } catch (err: any) {
      return reply.code(500).send({ message: err.message });
    }
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    const validatedFields = loginSchema.safeParse(request.body);

    if (!validatedFields.success) {
      return reply.code(400).send({
        message: "Invalid request",
        errors: validatedFields.error.errors,
      });
    }

    const { email, password } = validatedFields.data;

    const user = await this.authService.loginService({ email, password });

    if (!user) {
      return reply.code(401).send({ message: "Invalid credentials" });
    }

    const token = reply.server.jwt.sign(
      { id: user.id },

      { expiresIn: "1d" }
    );

    reply.setCookie("session", token, {
      path: "/",
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24,
    });

    return reply.code(201).send({
      ...user,
      token,
    });
  }
}
