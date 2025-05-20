"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schema/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AuthButton from "../../_components/auth-button";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "@/types/axios-error";
import { AuthErrorMessage } from "../../_components/auth-error-message";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    const { email, password } = values;

    setErrorMessage("");
    startTransition(() => {
      axios
        .post(
          "api/auth/login",
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          },
        )
        .then(() => {
          router.refresh();
        })
        .catch((err) => {
          const error = err as AxiosError<ErrorResponse>;
          if (error.response) {
            setErrorMessage(error.response.data.error);
          } else {
            setErrorMessage("Something went wrong");
          }
        });
    });
  };

  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={loginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="exemplo@gmail.com"
                  {...field}
                  className="bg-[#eaedf0] placeholder:italic dark:bg-[#0F1215]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  className="bg-[#eaedf0] placeholder:italic dark:bg-[#0F1215]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <AuthErrorMessage msg={errorMessage} />

        <div className="flex items-center justify-center">
          <AuthButton text="Login" disabled={isPending} />
        </div>
      </form>
    </Form>
  );
};
