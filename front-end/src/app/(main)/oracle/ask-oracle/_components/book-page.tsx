"use client";

import {
  Form,
  FormControl,
  FormDescription,
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

export const AskOraclePage = () => {
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof bookSchema>) => {
    console.log(data);
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
                <FormLabel>Your book description</FormLabel>
                <FormControl>
                  <Input
                    className="w-[320px] placeholder:italic lg:w-[500px]"
                    placeholder="Find your ideal book by a description"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <AskOraclePageTitle title="All Books related with your description" />
      <AskOraclePageImage />
    </AskOraclePageContainer>
  );
};
