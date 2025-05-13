import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AskOraclePageResultsProps {
  id: string;
  title: string;
  authors: string[];
  covers: {
    smallThumbnail: string;
    thumbnail: string;
  };
}

export const AskOraclePageResults = ({
  id,
  title,
  authors,
  covers,
}: AskOraclePageResultsProps) => {
  return (
    <div className="mt-4 rounded-md bg-[#E1E5E8] py-4 dark:bg-[#171B1E]">
      <div className="text- flex w-[370px] items-center justify-between sm:w-[400px] md:w-[500px] lg:w-[650px]">
        <div className="flex items-center px-2">
          <Image
            src={covers?.smallThumbnail ? covers?.smallThumbnail : ""}
            width={50}
            height={50}
            alt="book-cover"
            priority={true}
            className="h-auto w-auto"
          />
          <div className="space-y-0.5 px-4">
            <h3 className="cursor-pointer">{title}</h3>
            <p className="text-xs italic">
              By{" "}
              <span className="underline">
                {authors ? authors[0] : "nobody"}
              </span>
            </p>
          </div>
        </div>
        <a href={`/oracle/books/${id}`} target="_blank">
          <Button
            variant={"outline"}
            className="mx-2 bg-[#3f4e5a] font-bold text-[#eaedf0] dark:bg-[#a5b4c0] dark:text-[#0f1215]"
          >
            Check
          </Button>
        </a>
      </div>
    </div>
  );
};
