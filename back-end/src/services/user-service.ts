import { db } from "../db/prisma";
import { SignupData as UserDatas } from "../types/auth-type";
import { genSalt, hash } from "bcryptjs";

export class UserService {
  async getProfileService(id: string) {
    try {
      const user = await db.user.findUnique({
        where: {
          id: id,
        },
      });

      if (!user) {
        throw new Error("user does not exist!");
      }

      return user;
    } catch (err: any) {
      console.log(err.message);
    }
  }

  async updateProfileService(
    id: string,
    { username, email, password }: UserDatas
  ) {
    try {
      const salt = await genSalt(12);
      const hashedPassword = await hash(password, salt);

      const user = await db.user.update({
        where: {
          id,
        },
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      return user;
    } catch (err: any) {
      console.log(err.message);
    }
  }
}
