import { FastifyInstance } from "fastify";
import { verifyToken } from "../middleware/auth-middleware";
import { UserService } from "../services/user-service";
import { UserController } from "../controllers/user-controller";

const userService = new UserService();
const userController = new UserController(userService);

export const userRoutes = async (app: FastifyInstance) => {
  app.addHook("preHandler", verifyToken);

  app.get("/user/profile", (request, reply) =>
    userController.getProfileController(request, reply)
  );

  app.put("/user/settings", (request, reply) =>
    userController.updateProfileController(request, reply)
  );
};
