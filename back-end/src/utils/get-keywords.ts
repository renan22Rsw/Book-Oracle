import natural, { stopwords } from "natural";

export const getKeyWords = (text: string): string[] => {
  const tokenizer = new natural.WordTokenizer();
  const keywords = tokenizer
    .tokenize(text)
    .filter((keyword) => !stopwords.includes(keyword));

  return keywords;
};
