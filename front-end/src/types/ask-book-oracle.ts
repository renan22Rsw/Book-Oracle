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
