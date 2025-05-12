import { ErrorResponse } from "@/types/axios-error";
import { UserOracleBooks } from "@/types/user-books";
import axios, { AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const getUserBooks = async () => {
  const cookie = cookies();
  const session = cookie.get("session")?.value;
  const userBooksUrl = process.env.NEXT_PUBLIC_USER_BOOKS as string;

  if (!session) {
    throw new Error("Unathorized");
  }
  try {
    const response: AxiosResponse<UserOracleBooks[]> = await axios.get(
      userBooksUrl,
      {
        headers: {
          Authorization: `Bearer ${session}`,
        },
      },
    );

    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    if (error.response) {
      throw error.response.data.error;
    } else {
      throw new Error("Something went wrong");
    }
  }
};
