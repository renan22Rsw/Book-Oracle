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

import { BookPageTitle } from "./book-page-title";
import { BookPageContainer } from "./book-page-container";
import { BookPageImage } from "./book-page-image";
import { BookPageResults } from "./book-page-results";

export const BookPage = () => {
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = (data: z.infer<typeof bookSchema>) => {
    console.log(data);
  };

  return (
    <BookPageContainer>
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
      <BookPageTitle title="All Books related with your description" />
      <BookPageImage />
    </BookPageContainer>
  );
};
