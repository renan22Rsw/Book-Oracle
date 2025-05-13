"use client";

import { GetUserToken } from "@/hooks/get-user-token";
import { ErrorResponse } from "@/types/axios-error";
import axios, { AxiosError } from "axios";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const { token } = GetUserToken();
  const logoutUrl = process.env.NEXT_PUBLIC_LOGOUT_URL as string;
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get(logoutUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      router.refresh();
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      if (error.response) {
        throw error.response.data.error;
      } else {
        throw new Error("Something went wrong");
      }
    }
  };

  return (
    <span className="flex cursor-pointer gap-x-2 py-2" onClick={handleLogout}>
      <LogOut />
      Logout
    </span>
  );
};

export default LogoutButton;
