import React, {useState} from "react";
import {View, TextInput, Button} from "react-native";
import {searchBooks} from "../../api/book"; // Assuming you have a function to search books

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const results = await searchBooks(query);
    // Handle search results
  };

  return (
    <View>
      <TextInput
        value={query}
        onChangeText={text => setQuery(text)}
        placeholder="Search books..."
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};
export default Search;
