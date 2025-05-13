import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { GetUserToken } from "./get-user-token";
import { UserSession } from "@/types/user-session";
import { ErrorResponse } from "@/types/axios-error";

export const GetUserSession = () => {
  const userUrl = process.env.NEXT_PUBLIC_USER_PROFILE as string;
  const [session, setSession] = useState<UserSession>({});
  const { token } = GetUserToken();

  useEffect(() => {
    const handleUserSession = async () => {
      try {
        const response: AxiosResponse = await axios.get(userUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSession(response.data);
      } catch (err) {
        const error = err as AxiosError<ErrorResponse>;
        if (error.response) {
          throw error.response.data.error;
        } else {
          throw new Error("Something went wrong");
        }
      }
    };
    if (token) {
      handleUserSession();
    }
  }, [token, userUrl]);

  return { session };
};
