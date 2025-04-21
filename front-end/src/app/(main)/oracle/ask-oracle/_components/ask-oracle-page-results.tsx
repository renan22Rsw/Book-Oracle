import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const AskOraclePageResults = () => {
  return (
    <div className="mt-4 rounded-md bg-[#E1E5E8] py-6 dark:bg-[#171B1E]">
      <div className="text- flex w-[370px] justify-between sm:w-[400px] md:w-[500px] lg:w-[650px]">
        <div className="flex items-center px-2">
          <Image
            src={"https://avatars.githubusercontent.com/u/178677917?v=4"}
            width={50}
            height={50}
            alt="cover-image"
          />
          <div className="space-y-0.5 px-4">
            <h3 className="cursor-pointer">Harry potter e os sla oque </h3>
            <p className="text-xs italic">
              By <span className="underline">J.k Rolling</span>
            </p>
          </div>
        </div>
        <Link href={`/oracle/books/1`}>
          <Button
            variant={"outline"}
            className="mx-2 bg-[#3f4e5a] font-bold text-[#eaedf0] dark:bg-[#a5b4c0] dark:text-[#0f1215]"
          >
            Check
          </Button>
        </Link>
      </div>
    </div>
  );
};
