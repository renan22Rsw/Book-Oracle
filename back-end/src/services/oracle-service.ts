import axios, { AxiosResponse } from "axios";
import { BookOracle } from "../types/book-oracle-type";

export class OracleServices {
  async getBooksResultsService(description: string[]): Promise<BookOracle[]> {
    try {
      const response: AxiosResponse = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${description}&orderBy=relevance&maxResults=5`
      );

      const books: BookOracle[] = response.data.items.map(
        (book: BookOracle) => ({
          id: book.id,
          title: book.volumeInfo.title,
          description: book.volumeInfo.description,
          authors: book.volumeInfo.authors,
          covers: book.volumeInfo.imageLinks,
        })
      );

      return books;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      throw new Error("Something went wrong!");
    }
  }
}
