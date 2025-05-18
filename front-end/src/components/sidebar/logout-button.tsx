"use client";

import { GetUserToken } from "@/hooks/get-user-token";
import { ErrorResponse } from "@/types/axios-error";
import axios, { AxiosError } from "axios";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const { token } = GetUserToken();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout", {
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
    <Button variant={"ghost"} onClick={handleLogout}>
      <span className="flex w-full items-center gap-x-2">
        <LogOut />
        Logout
      </span>
    </Button>
  );
};

export default LogoutButton;
