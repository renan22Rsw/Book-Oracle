"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateProfileSchema } from "@/schema/settingsSchema";
import { useState } from "react";
import { SettingsPageInputLabel } from "./settings-page-input-label";
import { UserSession } from "@/types/user-session";
import { GetUserToken } from "@/hooks/get-user-token";

import axios, { AxiosError, AxiosResponse } from "axios";
import {
  UpdateFormErrorMessage,
  UpdateFormSuccessMessage,
} from "./update-profile-message";
import { ErrorResponse } from "@/types/axios-error";

export const UpdateProfileForm = ({ username, email }: UserSession) => {
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      username,
      email,
      password: "",
      confirmPassword: "",
    },
  });

  const [disabledEmail, setEmail] = useState<boolean>(true);
  const [disabledUsername, setUsername] = useState<boolean>(true);
  const [disabledPassword, setPassword] = useState<boolean>(true);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { token } = GetUserToken();

  async function onSubmit(values: z.infer<typeof updateProfileSchema>) {
    const { username, email, password, confirmPassword } = values;
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response: AxiosResponse = await axios.put(
        "/api/user/settings",
        {
          username,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setSuccessMsg(response.data.message);
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      if (error.response) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg("Something went wrong");
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <SettingsPageInputLabel
                htmlLabel="username"
                label="Username"
                onClick={() => setUsername(!username)}
              />
              <FormControl>
                <Input
                  className="xl:w-2/4"
                  placeholder="username"
                  {...field}
                  disabled={disabledUsername}
                  id="username"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <SettingsPageInputLabel
                htmlLabel="email"
                label="Email"
                onClick={() => setEmail(!disabledEmail)}
              />
              <FormControl>
                <Input
                  placeholder="email"
                  {...field}
                  className="xl:w-2/4"
                  disabled={disabledEmail}
                  id="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <SettingsPageInputLabel
                htmlLabel="password"
                label="Password"
                onClick={() => setPassword(!disabledPassword)}
              />
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  className="xl:w-2/4"
                  disabled={disabledPassword}
                  type="password"
                  id="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <SettingsPageInputLabel
                htmlLabel="Confirm-Password"
                label="Confirm Password"
                onClick={() => setPassword(!disabledPassword)}
              />
              <FormControl>
                <Input
                  placeholder="confirm password"
                  {...field}
                  className="xl:w-2/4"
                  disabled={disabledPassword}
                  type="password"
                  id="Confirm-Password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <UpdateFormSuccessMessage text={successMsg} />
        <UpdateFormErrorMessage text={errorMsg} />

        <div className="flex items-center justify-center xl:justify-start">
          <Button
            type="submit"
            disabled={
              disabledUsername && disabledUsername && disabledPassword === true
                ? true
                : false
            }
            className="w-full md:w-auto"
          >
            Update Profile
          </Button>
        </div>
      </form>
    </Form>
  );
};
