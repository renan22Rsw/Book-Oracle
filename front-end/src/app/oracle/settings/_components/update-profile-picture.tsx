"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GetUserToken } from "@/hooks/get-user-token";
import { updateProfilePictureSchema } from "@/schema/settingsSchema";
import { UserSession } from "@/types/user-session";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  UpdateFormErrorMessage,
  UpdateFormSuccessMessage,
} from "./update-profile-message";
import { useState } from "react";
import { ErrorResponse } from "@/types/axios-error";

import NoPictureProfile from "@/public/no-user-image.png";

export const UpdateProfilePicture = ({ profileImageUrl }: UserSession) => {
  const form = useForm<z.infer<typeof updateProfilePictureSchema>>({
    resolver: zodResolver(updateProfilePictureSchema),
    defaultValues: {
      picture: undefined,
    },
  });

  const updateProfileUrl = process.env
    .NEXT_PUBLIC_UPDATE_PROFILE_PICTURE as string;
  const { token } = GetUserToken();
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(values: z.infer<typeof updateProfilePictureSchema>) {
    const { picture } = values;

    setSuccessMsg("");
    setErrorMsg("");

    const formData = new FormData();
    formData.append("picture", picture as File);

    if (!picture) {
      setErrorMsg("Pleasse select an image");
      return null;
    }

    try {
      const response = await axios.patch(
        updateProfileUrl,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
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

  const pictureUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${profileImageUrl}`;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="py-8"
        encType="multipart/form-data"
      >
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FormLabel htmlFor="picture">
                  <Image
                    src={
                      pictureUrl.includes("null")
                        ? NoPictureProfile
                        : pictureUrl
                    }
                    width={200}
                    height={200}
                    alt="profile-picture"
                    className="h-[200px] w-[200px] cursor-pointer rounded-full"
                    priority={true}
                  />
                  <Input
                    onChange={(e) => {
                      const file = e.target.files?.[0] as File;
                      field.onChange(file);
                    }}
                    type="file"
                    className="hidden"
                    id="picture"
                  />
                </FormLabel>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="space-x-2">
          <Button className="mt-4">Upadate your image profile</Button>
          <UpdateFormSuccessMessage text={successMsg} />
          <UpdateFormErrorMessage text={errorMsg} />
        </div>
      </form>
    </Form>
  );
};
