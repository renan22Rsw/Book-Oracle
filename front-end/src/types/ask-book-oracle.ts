export interface AskBookOracle {
  oracleResults: {
    id: string;
    title: string;
    authors: string[];
    description: string;
    covers: {
      smallThumbnail: string;
      thumbnail: string;
    };
  }[];
}

export interface OralceBook {
  oracleResults: {
    id: string;
    title: string;
    authors: string[];
    description: string;
    covers: {
      smallThumbnail: string;
      small: string;
    };
  };
}
