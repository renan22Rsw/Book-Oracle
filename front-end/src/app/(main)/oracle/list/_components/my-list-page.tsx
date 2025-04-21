import { Trash2Icon } from "lucide-react";
import Image from "next/image";

export const MyListPage = () => {
  const books = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "1984" },
    { id: 4, title: "Pride and Prejudice" },
    { id: 5, title: "The Catcher in the Rye" },
  ];

  return (
    <div className="h-full space-y-4 bg-[#E1E5E8] dark:bg-[#14181D]">
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={"https://avatars.githubusercontent.com/u/178677917?v=4"}
          width={200}
          height={200}
          alt="profile-pictrue"
          className="mt-10 rounded-full"
        />
        <h3 className="text-3xl font-bold">User</h3>
        <span className="text-2xl font-light italic">email@gmail.com</span>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        {books.map(({ id, title }) => (
          <div
            className="mt-2 flex h-16 w-[350px] animate-fade-in rounded-sm bg-[#eaedf0] dark:bg-[#0F1215] sm:w-[400px] md:w-[500px] xl:w-[890px]"
            key={id}
          >
            <div className="h-full w-14">{/* Image*/}</div>
            <div className="flex w-full items-center justify-between p-2">
              <h6>{title}</h6>
              <Trash2Icon size={20} className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
