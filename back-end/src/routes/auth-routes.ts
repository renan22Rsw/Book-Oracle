import { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/auth-controller";
import { AuthService } from "../services/auth-service";
import { verifyToken } from "../middleware/auth-middleware";

const authService = new AuthService();
const authController = new AuthController(authService);

export const authRoutes = async (app: FastifyInstance) => {
  app.post("/auth/signup", (request, reply) =>
    authController.signupController(request, reply)
  );

  app.post("/auth/login", (request, reply) =>
    authController.loginController(request, reply)
  );

  app.get("/auth/logout", { preHandler: [verifyToken] }, (request, reply) =>
    authController.logoutController(request, reply)
  );
};
