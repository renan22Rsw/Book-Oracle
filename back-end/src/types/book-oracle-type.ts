export interface BookOracle {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

export interface UserBookList {
  title: string;
  coverImageUrl: string;
}
