import { getUserSession } from "@/utils/get-user";
import { MyListPage } from "./_components/my-list-page";
import { getUserBooks } from "@/utils/get-user-books";

const MyList = async () => {
  const session = await getUserSession();
  const books = await getUserBooks();

  return (
    <MyListPage
      username={session?.username as string}
      userPicture={session?.profileImageUrl as string}
      books={books}
    />
  );
};

export default MyList;
