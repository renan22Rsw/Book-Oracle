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

      console.log(books_keywords);
      return reply.send({ oracleResults: results });
    } catch (err: any) {
      if (err instanceof Error) {
        return reply.code(401).send({ message: err.message });
      }
      return reply.code(401).send({ message: "something went wrong" });
    }
  }
}
