import { db } from "../db/prisma";
import { SignupData } from "../types/auth-type";
import { LoginData } from "../types/auth-type";
import { compare, genSalt, hash } from "bcryptjs";

export class AuthService {
  async signupService({ username, email, password }: SignupData) {
    try {
      const existingUser = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        throw new Error("User already exists");
      }
      const salt = await genSalt(12);

      const hashedPassword = await hash(password, salt);

      const user = await db.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          createdAt: new Date(),
        },
      });

      return user;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      throw new Error("something went wrong");
    }
  }

  async loginService({ email, password }: LoginData) {
    try {
      const user = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error("User does not exist");
      }

      const isPasswordMatch = await compare(password, user.password);

      if (!isPasswordMatch) {
        throw new Error("Incorrect password");
      }

      return user;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      throw new Error("Something went wrong");
    }
  }
}
