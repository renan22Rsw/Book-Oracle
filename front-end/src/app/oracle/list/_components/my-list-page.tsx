"use client";

import { Trash2Icon } from "lucide-react";
import NoPictureProfile from "@/public/no-user-image.png";
import Image from "next/image";
import Link from "next/link";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ErrorResponse } from "@/types/axios-error";
import { toast } from "@/hooks/use-toast";
import { GetUserToken } from "@/hooks/get-user-token";
import { useRouter } from "next/navigation";

interface MyListPageProps {
  username: string;
  email: string;
  userPicture: string | null;
  books: {
    id: string;
    bookId: string;
    title: string;
    coverImageUrl: string;
  }[];
}

export const MyListPage = ({
  username,
  email,
  userPicture,
  books,
}: MyListPageProps) => {
  const { token } = GetUserToken();
  const router = useRouter();

  const handleDeleteBook = async (id: string, title: string) => {
    try {
      const response: AxiosResponse = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/list/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast({
        title: title,
        description: response.data.message,
      });
      router.refresh();
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      if (error.response) {
        toast({
          title: "Error",
          description: error.response.data.error,
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong",
        });
      }
    }
  };

  return (
    <div className="h-full space-y-4 bg-[#E1E5E8] dark:bg-[#14181D]">
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={userPicture ? userPicture : NoPictureProfile}
          width={200}
          height={200}
          alt="profile-pictrue"
          className="mt-10 rounded-full"
        />
        <h3 className="text-3xl font-bold">{username}</h3>
        <span className="text-2xl font-light italic">{email}</span>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        {books.map(({ id, bookId, title, coverImageUrl }) => (
          <div
            className="mt-2 flex h-16 w-[350px] animate-fade-in rounded-sm bg-[#eaedf0] dark:bg-[#0F1215] sm:w-[400px] md:w-[500px] xl:w-[890px] xl:duration-300 xl:ease-in-out xl:hover:scale-110"
            key={bookId}
          >
            <Image
              src={coverImageUrl ? coverImageUrl : ""}
              width={50}
              height={50}
              className="h-auto w-auto"
              alt="book-cover"
            />
            <div className="flex w-full items-center justify-between p-2">
              <Link href={`/oracle/books/${bookId}`}>
                {" "}
                <h6>{title}</h6>
              </Link>
              <Trash2Icon
                size={20}
                className="cursor-pointer"
                onClick={() => handleDeleteBook(id, title)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
