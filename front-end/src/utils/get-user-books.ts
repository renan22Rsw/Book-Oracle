import { ErrorResponse } from "@/types/axios-error";
import { UserOracleBooks } from "@/types/user-books";
import axios, { AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const getUserBooks = async () => {
  const cookie = cookies();
  const session = cookie.get("session")?.value;

  if (!session) {
    throw new Error("Unathorized");
  }
  try {
    const response: AxiosResponse<UserOracleBooks[]> = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/list`,
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
