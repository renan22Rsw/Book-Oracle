import { BookPage } from "./_components/book-page";

interface BooksProps {
  params: {
    id: string;
  };
}

const Books = ({ params }: BooksProps) => {
  const { id } = params;

  return <BookPage id={id} />;
};

export default Books;
