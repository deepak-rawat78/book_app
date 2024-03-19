import {Authors, Book} from "../screens/home/types";

export const extractAuthorNames = (book: Book) => {
  return book.authors
    .reduce((prev: string[], curr: Authors) => {
      prev.push(curr.name);
      return prev;
    }, [])
    .join(", ");
};
