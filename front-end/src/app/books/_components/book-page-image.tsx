import Image from "next/image";
import searchBookImg from "@/public/book-image.png";

export const BookPageImage = () => {
  return (
    <div>
      <Image
        src={searchBookImg}
        alt="search-book-img"
        width={632}
        height={699}
        className="h-full w-full"
      />
    </div>
  );
};
