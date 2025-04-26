import { FastifyRequest, FastifyReply } from "fastify";

export const verifyToken = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    await request.jwtVerify();
  } catch (err: any) {
    console.log(err.message);
    return reply.code(401).send({ message: "Unathorized" });
  }
};
