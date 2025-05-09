import { FastifyRequest, FastifyReply } from "fastify";
import { OracleServices } from "../services/oracle-service";
import { getKeyWords } from "../utils/get-keywords";

export class OracleControllers {
  constructor(private oracleServices: OracleServices) {}

  async getBooksResultsController(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    const { description } = request.query as { description: string };

    try {
      const books_keywords: string[] = getKeyWords(description);
      const results = await this.oracleServices.getBooksResultsService(
        books_keywords
      );

      return reply.send({ oracleResults: results });
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ message: err.message });
      }
      return reply.code(500).send({ message: "Something went wrong" });
    }
  }

  async getBooksByIdController(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    try {
      const results = await this.oracleServices.getBooksByIdService(id);
      return reply.send({ oracleResults: results });
    } catch (err) {
      if (err instanceof Error) {
        return reply.code(400).send({ message: err.message });
      }
      return reply.code(500).send({ message: "Something went wrong" });
    }
  }
}
