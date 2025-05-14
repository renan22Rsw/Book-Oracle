import { cookies } from "next/headers";
import axios, { AxiosResponse } from "axios";

export const getOracleBook = async (id: string) => {
  const cookie = cookies();
  const session = cookie.get("session")?.value;

  if (!session) {
    throw new Error("Unathorized");
  }

  const response: AxiosResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/oracle/book/${id}`,
    {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    },
  );

  return response.data;
};
