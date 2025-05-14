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
import { signInSchema } from "@/schema/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import axios, { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import AuthButton from "../../_components/auth-button";
import { useState, useTransition } from "react";
import { AuthMessage } from "../../_components/auth-message";
import { AuthErrorMessage } from "../../_components/auth-error-message";
import { ErrorResponse } from "@/types/axios-error";

export const SignInForm = () => {
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    const { username, email, password, confirmPassword } = values;
    setMessage("");
    setErrorMessage("");
    startTransition(() => {
      axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
          username,
          email,
          password,
          confirmPassword,
        })
        .then((res) => {
          const response = res as AxiosResponse;
          setMessage(response.data.message);
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
    <Form {...signInForm}>
      <form onSubmit={signInForm.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={signInForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="exemplo"
                  className="bg-[#eaedf0] placeholder:italic dark:bg-[#0F1215]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={signInForm.control}
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
          control={signInForm.control}
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

        <FormField
          control={signInForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm your password</FormLabel>
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
        <AuthMessage msg={message} />
        <AuthErrorMessage msg={errorMessage} />

        <div className="flex items-center justify-center">
          <AuthButton text="Sign up" disabled={isPending} />
        </div>
      </form>
    </Form>
  );
};
