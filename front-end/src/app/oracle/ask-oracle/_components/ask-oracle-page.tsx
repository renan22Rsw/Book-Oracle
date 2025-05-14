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
import { bookSchema } from "@/schema/bookSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AskOraclePageContainer } from "./ask-oracle-page-container";
import { AskOraclePageTitle } from "./ask-oracle-page-title";
import { AskOraclePageImage } from "./ask-oracle-page-image";
import { AskOraclePageResults } from "./ask-oracle-page-results";
import { GetUserToken } from "@/hooks/get-user-token";
import { useState, useTransition } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { AskBookOracle } from "@/types/ask-book-oracle";
import { ErrorResponse } from "@/types/axios-error";
import { AskOraclePageLoading } from "./ask-oracle-page-page-loading";

export const AskOraclePage = () => {
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      description: "",
    },
  });

  interface AskOracleState {
    id: string;
    title: string;
    authors: string[];
    description: string;
    covers: {
      smallThumbnail: string;
      thumbnail: string;
    };
  }

  const { token } = GetUserToken();
  const [books, setBooks] = useState<AskOracleState[]>([]);
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data: z.infer<typeof bookSchema>) => {
    const { description } = data;
    startTransition(async () => {
      try {
        const response: AxiosResponse<AskBookOracle> = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/oracle/results`,
          {
            params: { description },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setBooks(response.data.oracleResults);
      } catch (err) {
        const error = err as AxiosError<ErrorResponse>;
        if (error.response) {
          throw err;
        } else {
          throw new Error("Somethig went wrong");
        }
      }
    });
  };

  return (
    <AskOraclePageContainer>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0f1215] dark:text-[#eaedf0]">
                  Your book description
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-[320px] placeholder:italic lg:w-[500px]"
                    placeholder="Find your ideal book by a description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      {isPending ? (
        <AskOraclePageLoading />
      ) : books.length > 0 ? (
        <>
          <AskOraclePageTitle title="All books related with your description" />
          {books.map(({ id, title, authors, covers }) => (
            <div key={id}>
              <AskOraclePageResults
                id={id}
                title={title}
                authors={authors}
                covers={covers}
              />
            </div>
          ))}
        </>
      ) : (
        <AskOraclePageImage />
      )}
    </AskOraclePageContainer>
  );
};
