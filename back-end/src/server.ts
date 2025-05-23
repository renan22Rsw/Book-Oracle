import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import jwt from "@fastify/jwt";
import cookies from "@fastify/cookie";
import multipart from "@fastify/multipart";

import { authRoutes } from "./routes/auth-routes";
import { userRoutes } from "./routes/user-routes";
import { oralceRoutes } from "./routes/oracle-routes";

dotenv.config();

const port = Number(process.env.PORT) || 8000;

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: process.env.ORIGIN_URL,
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
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
fastify.register(oralceRoutes);

fastify
  .listen({ port, host: "0.0.0.0" })
  .then(() => {
    console.log(`Server is running on port ${port}`);
  })
  .catch((err) => {
    fastify.log.error(err);
    process.exit(1);
  });
