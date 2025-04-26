import { db } from "../db/prisma";

export class UserService {
  async getProfile(id: string) {
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
}
