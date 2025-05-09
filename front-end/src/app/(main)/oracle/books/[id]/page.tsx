import { getOracleBook } from "@/utils/get-oracle-books";
import { BookPage } from "./_components/book-page";
import { OralceBook } from "@/types/ask-book-oracle";

interface BooksProps {
  params: {
    id: string;
  };
}

const Books = async ({ params }: BooksProps) => {
  const { id } = params;
  const books: OralceBook = await getOracleBook(id);
  const { title, description, authors, covers } = books.oracleResults;

  return (
    <BookPage
      title={title}
      description={description}
      authors={authors}
      covers={covers}
    />
  );
};

export default Books;
