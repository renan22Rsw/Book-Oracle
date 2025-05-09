import { cookies } from "next/headers";
import axios, { AxiosResponse } from "axios";

export const getOracleBook = async (id: string) => {
  const cookie = cookies();
  const session = cookie.get("session")?.value;

  const oracleBooksId = `${process.env.NEXT_PUBLIC_BOOK_ORACLE_ID}${id}`;

  if (!session) {
    throw new Error("Unathorized");
  }

  const response: AxiosResponse = await axios.get(oracleBooksId, {
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });

  return response.data;
};
