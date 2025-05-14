import { ErrorResponse } from "@/types/axios-error";
import { UserSession } from "@/types/user-session";
import axios, { AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const getUserSession = async () => {
  const token = cookies();
  const session = token.get("session")?.value;

  if (!session) {
    return null;
  }

  try {
    const response: AxiosResponse<UserSession> = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
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
      throw error.response?.data.error;
    } else {
      throw new Error(error.message);
    }
  }
};
