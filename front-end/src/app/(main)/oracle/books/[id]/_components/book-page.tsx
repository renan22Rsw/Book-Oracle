"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface BookPageProps {
  title: string;
  description: string;
  authors: string[];
  covers: {
    small: string;
  };
}
export const BookPage = ({
  title,
  description,
  authors,
  covers,
}: BookPageProps) => {
  const [isDescriptionTooLong, setDescriptionToolong] =
    useState<boolean>(false);

  return (
    <div className="mx-auto h-full max-w-[1000px] rounded-md bg-[#E1E5E8] p-4 dark:bg-[#14181D] xl:my-20 xl:h-auto">
      <div className="xl:flex">
        <div className="flex w-full flex-col items-center space-y-4 md:items-start">
          {covers.small ? (
            <Image
              src={covers.small}
              width={300}
              height={300}
              alt="book-cover"
              className="h-auto w-auto rounded-md"
              quality={100}
              priority={true}
            />
          ) : (
            <div className="flex h-[300px] w-[200px] items-center justify-center bg-[#eaedf0] dark:bg-[#0F1215]">
              <h2 className="font-bold">No cover</h2>
            </div>
          )}

          <Button className="mx-4 w-[150px] bg-[#3f4e5a] font-bold dark:bg-[#a5b4c0] xl:duration-300 xl:ease-in-out xl:hover:scale-105">
            Add to list
          </Button>
        </div>
        <div className="space-y-10 px-4 py-6">
          <div>
            <h2 className="text-2xl">{title ? title : "no title"}</h2>
            <span className="text-xs italic">
              By {authors ? authors[0] : "no author"}
            </span>
          </div>
          <div>
            <div className="text-sm">
              {description.replace(/<.+?>/g, " ").length > 800 ? (
                <p>
                  {description.replace(/<.+?>/g, "").slice(0, 800)}{" "}
                  <span
                    className={`${isDescriptionTooLong ? "hidden" : "inline"} cursor-pointer font-bold text-blue-800`}
                    onClick={() =>
                      setDescriptionToolong((description) => !description)
                    }
                  >
                    Read More...
                  </span>
                  <span
                    className={`${isDescriptionTooLong ? "inline" : "hidden"}`}
                  >
                    {" "}
                    {description.replace(/<.+?>/g, "")}
                  </span>
                </p>
              ) : (
                <p>{description.replace(/<.+?>/g, "")}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
