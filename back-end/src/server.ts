import Fastify from "fastify";
import { authRoutes } from "./routes/auth-routes";

const fastify = Fastify({
  logger: true,
});

fastify.register(authRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 8000 });
  } catch (err) {
    await fastify.log.error(err);
    process.exit(1);
  }
};

start();
