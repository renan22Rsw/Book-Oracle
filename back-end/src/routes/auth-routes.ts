import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const authRoutes = (app: FastifyInstance) => {
  app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ message: "Fastify Auth API" });
  });
};
