import React, {useState} from "react";
import {View, Text, Button} from "react-native";

const FavoritesBooks = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = book => {
    setFavorites([...favorites, book]);
  };

  const removeFromFavorites = book => {
    const updatedFavorites = favorites.filter(item => item !== book);
    setFavorites(updatedFavorites);
  };

  return (
    <View>
      <Text>Favorite Books</Text>
      {favorites.map(book => (
        <View key={book.id}>
          <Text>{book.title}</Text>
          <Button title="Remove" onPress={() => removeFromFavorites(book)} />
        </View>
      ))}
    </View>
  );
};

export default FavoritesBooks;
