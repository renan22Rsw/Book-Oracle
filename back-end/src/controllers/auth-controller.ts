import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "../services/auth-service";
import { signUpSchema } from "../schemas/auth-schemas";
import { loginSchema } from "../schemas/auth-schemas";
import { generateToken } from "../utils/generate-token";

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
    const valiedatedFields = loginSchema.safeParse(request.body);

    if (!valiedatedFields.success) {
      return reply.code(400).send({
        message: "Invalid request",
        errors: valiedatedFields.error.errors,
      });
    }

    const { email, password } = valiedatedFields.data;
    const user = await this.authService.loginService({ email, password });

    if (!user) {
      return reply.code(401).send({ message: "Invalid credentials" });
    }

    const token = generateToken(user.id);

    if (!token) {
      return reply.code(500).send({ message: "Error generating token" });
    }

    reply.setCookie("session", token, {
      path: "/",
      httpOnly: true,
      signed: true,
      secure: false,
      sameSite: "strict",
    });

    return reply.code(201).send({
      ...user,
      token,
    });
  }
}
