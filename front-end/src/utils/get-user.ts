import { ErrorResponse } from "@/types/axios-error";
import { UserSession } from "@/types/user-session";
import axios, { AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const getUserSession = async () => {
  const token = cookies();
  const session = token.get("session")?.value;
  const userProfileUrl = process.env.NEXT_PUBLIC_USER_PROFILE as string;

  if (!session) {
    throw new Error("Unathorized");
  }

  try {
    const response: AxiosResponse<UserSession> = await axios.get(
      userProfileUrl,
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
