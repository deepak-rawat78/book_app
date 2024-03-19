export type Authors = {
  id: string;
  name: string;
};

export type Book = {
  key: string;
  image: string;
  title: string;
  authors: Authors[];
  first_publish_year: number;
};
