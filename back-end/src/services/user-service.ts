import { db } from "../db/prisma";
import { SignupData as UserDatas } from "../types/auth-type";
import { genSalt, hash } from "bcryptjs";
import { UserBookList } from "../types/book-oracle-type";

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
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      throw new Error("Something went wrong");
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
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      throw new Error("Something went wrong");
    }
  }

  async updateProfilePictureService(id: string, profileImageUrl: string) {
    try {
      await db.user.update({
        where: {
          id,
        },
        data: {
          profileImageUrl,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      throw new Error("Something went wrong");
    }
  }

  async addUserBooksService(
    userId: string,
    { title, coverImageUrl }: UserBookList
  ) {
    try {
      const book = await db.bookList.findFirst({
        where: {
          title,
          userId,
        },
      });

      if (book?.title) {
        throw new Error("This book is already on your list");
      }

      await db.bookList.create({
        data: {
          title,
          coverImageUrl,
          userId,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      return new Error("Something went wrong");
    }
  }

  async getUserBooksService(userId: string) {
    try {
      const booksList = await db.bookList.findMany({
        where: {
          userId,
        },
        orderBy: {
          title: "asc",
        },
      });

      return booksList;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      return new Error("Something went wrong");
    }
  }

  async deleteUserBookService(id: string) {
    try {
      await db.bookList.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      return new Error("Something went wrong");
    }
  }
}
