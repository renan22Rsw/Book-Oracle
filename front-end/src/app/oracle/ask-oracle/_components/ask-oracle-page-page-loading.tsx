import React from "react";

export const AskOraclePageLoading = () => {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <div
        className="animate-spin inline-block h-8 w-8 rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};
