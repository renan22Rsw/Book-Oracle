import Fastify from "fastify";
import dotenv from "dotenv";
import jwt from "@fastify/jwt";
import cookies from "@fastify/cookie";
import multipart from "@fastify/multipart";

import { authRoutes } from "./routes/auth-routes";
import { userRoutes } from "./routes/user-routes";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.register(jwt, {
  secret: process.env.JWT_SECRET_KEY as string,
});

fastify.register(cookies, {
  secret: process.env.COOKIE_SECRET_KEY,
});

fastify.register(multipart);

fastify.register(authRoutes);
fastify.register(userRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 8000 });
  } catch (err) {
    await fastify.log.error(err);
    process.exit(1);
  }
};

start();
