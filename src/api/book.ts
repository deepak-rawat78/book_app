const fetchBookData = async () => {
  const response = await fetch(
    "https://openlibrary.org/subjects/sci-fi.json?details=true",
  );
  const data = await response.json();
  return data;
};

export {fetchBookData};
