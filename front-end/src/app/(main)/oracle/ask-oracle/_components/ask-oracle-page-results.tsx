import { Button } from "@/components/ui/button";

export const AskOraclePageResults = () => {
  return (
    <div className="mt-4 rounded-md bg-[#E1E5E8] py-4 dark:bg-[#171B1E]">
      <div className="text- flex w-[370px] justify-between sm:w-[400px] md:w-[500px] lg:w-[650px]">
        <div className="flex items-center px-2">
          <div className="h-full w-[50px] bg-purple-400">image</div>
          <div className="space-y-0.5 px-4">
            <h3>Harry potter e os sla oque </h3>
            <p className="text-xs italic">
              By <span className="underline">J.k Rolling</span>
            </p>
            <p>
              (4.2)<span className="text-yellow-400"> ★ ★ ★ ★</span>
            </p>
          </div>
        </div>
        <Button variant={"outline"} className="mx-2 bg-[#CFD1EC] font-bold">
          Check
        </Button>
      </div>
    </div>
  );
};
