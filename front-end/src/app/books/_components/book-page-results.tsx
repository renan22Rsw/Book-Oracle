import { Button } from "@/components/ui/button";

export const BookPageResults = () => {
  return (
    <div className="mt-10 rounded-md bg-[#D9D9D9] py-4">
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
        <Button className="mx-2 bg-[#F86A6A] font-bold">Check</Button>
      </div>
    </div>
  );
};
