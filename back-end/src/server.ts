import Fastify from "fastify";
import cookie, { FastifyCookieOptions } from "@fastify/cookie";
import dotenv from "dotenv";
import { authRoutes } from "./routes/auth-routes";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.register(cookie, {
  secret: process.env.COOKIE_SECRET_KEY,
  parseOptions: {},
}) as FastifyCookieOptions;

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
