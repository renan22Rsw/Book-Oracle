import { FastifyInstance } from "fastify";
import { OracleServices } from "../services/oracle-service";
import { OracleControllers } from "../controllers/oracle-controllers";
import { verifyToken } from "../middleware/auth-middleware";

const oracleServices = new OracleServices();
const oracleController = new OracleControllers(oracleServices);

export const oralceRoutes = async (app: FastifyInstance) => {
  app.addHook("preHandler", verifyToken);

  app.get("/oracle/results", (request, reply) =>
    oracleController.getBooksResultsController(request, reply)
  );
};
