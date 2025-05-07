import natural, { stopwords } from "natural";
import { stopwords_pt } from "../utils/stopwords-pt";

export const getKeyWords = (text: string): string[] => {
  const tokenizer = new natural.WordTokenizer();
  const keywords = tokenizer
    .tokenize(text)
    .filter(
      (keyword) =>
        !stopwords.includes(keyword) && !stopwords_pt.includes(keyword)
    );

  return keywords;
};
