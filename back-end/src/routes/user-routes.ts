import { FastifyInstance } from "fastify";
import { verifyToken } from "../middleware/auth-middleware";
import { UserService } from "../services/user-service";
import { UserController } from "../controllers/user-controller";

const userService = new UserService();
const userController = new UserController(userService);

export const userRoutes = async (app: FastifyInstance) => {
  app.addHook("preHandler", verifyToken);

  app.post("/user/list", (request, reply) =>
    userController.addUserBooksController(request, reply)
  );

  app.get("/user/list", (request, reply) => {
    userController.getUserBooksContreller(request, reply);
  });

  app.delete("/user/list/:id", (request, reply) => {
    userController.deleteUserBooksController(request, reply);
  });

  app.get("/user/profile", (request, reply) =>
    userController.getProfileController(request, reply)
  );

  app.put("/user/settings", (request, reply) =>
    userController.updateProfileController(request, reply)
  );

  app.patch("/user/settings/profile-picture", (request, reply) =>
    userController.updateProfilePictureController(request, reply)
  );
};
