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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateProfileSchema } from "@/schema/settingsSchema";
import { useState } from "react";
import { SettingsPageInputLabel } from "./settings-page-input-label";

export const UpdateProfileForm = () => {
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      username: "exampleuser",
      email: "example@gmail.com",
      picture: undefined,
      password: "password123",
      confirmPassword: "password123",
    },
  });

  const [email, setEmail] = useState<boolean>(true);
  const [username, setUsername] = useState<boolean>(true);
  const [password, setPassword] = useState<boolean>(true);

  function onSubmit(values: z.infer<typeof updateProfileSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FormLabel>
                  <Input
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                    className="h-[200px] w-[200px] rounded-full"
                    type="file"
                  />
                </FormLabel>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <SettingsPageInputLabel
                label="Username"
                onClick={() => setUsername(!username)}
              />
              <FormControl>
                <Input
                  className="xl:w-2/4"
                  placeholder="username"
                  {...field}
                  disabled={username}
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
                label="Email"
                onClick={() => setEmail(!email)}
              />
              <FormControl>
                <Input
                  placeholder="email"
                  {...field}
                  className="xl:w-2/4"
                  disabled={email}
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
                label="Password"
                onClick={() => setPassword(!password)}
              />
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  className="xl:w-2/4"
                  disabled={password}
                  type="password"
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
                label="Confirm Password"
                onClick={() => setPassword(!password)}
              />
              <FormControl>
                <Input
                  placeholder="confirm password"
                  {...field}
                  className="xl:w-2/4"
                  disabled={password}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-center xl:justify-start">
          <Button
            type="submit"
            disabled={username && email && password === true ? true : false}
            className="w-full md:w-auto"
          >
            Update Profile
          </Button>
        </div>
      </form>
    </Form>
  );
};
