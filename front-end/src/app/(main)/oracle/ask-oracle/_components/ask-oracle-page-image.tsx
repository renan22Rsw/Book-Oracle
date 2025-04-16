import Image from "next/image";
import searchBookImg from "@/public/book-image.png";

export const AskOraclePageImage = () => {
  return (
    <div>
      <Image
        src={searchBookImg}
        alt="search-book-img"
        width={300}
        height={300}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};
