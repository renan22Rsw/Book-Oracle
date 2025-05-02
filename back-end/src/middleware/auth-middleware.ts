import { FastifyRequest, FastifyReply } from "fastify";

export const verifyToken = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    if (err instanceof Error) {
      return reply.code(400).send({ error: err.message });
    }
    return reply.code(401).send({ error: "Unathorized" });
  }
};
