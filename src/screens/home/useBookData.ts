import {useState, useEffect} from "react";
import axios from "axios";
import {Book} from "./types";

const useBookData = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://openlibrary.org/subjects/sci-fi.json?details=true",
        );
        if (response.status === 200) {
          setBooks(response.data.works);
        } else {
          setError("Failed to fetch books");
        }
      } catch (error) {
        setError("Error fetching books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return {books, loading, error};
};

export default useBookData;
