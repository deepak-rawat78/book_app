import React, {useCallback, useMemo} from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import useFetchBooks from "./useBookData";
import styles from "./styles";
import {Authors, Book} from "./types";
import {useNavigation} from "@react-navigation/native";
import {screenName} from "../../routes/routeUtils";
import {extractAuthorNames} from "../../utils/helperFunctions";

const Home = () => {
  const {books, loading, error} = useFetchBooks();
  const navigation = useNavigation<any>();
  console.log(books);

  const getAuthorsName = useCallback(
    (book: Book) => {
      return extractAuthorNames(book);
    },
    [books],
  );
  const keyExtractor = (item: Book) => item.key.toString();

  const handleClickOnBook = useCallback(
    (book: Book) => () => {
      navigation.navigate(screenName.DETAIL, {book});
    },
    [navigation],
  );

  const renderItem = ({item}: {item: Book}) => (
    <TouchableOpacity
      onPress={handleClickOnBook(item)}
      style={styles.bookContainer}>
      <Image
        source={{
          uri:
            item?.image ??
            "https://www.marytribble.com/wp-content/uploads/2020/12/book-cover-placeholder.png",
        }}
        style={styles.coverImage}
      />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.authors}>{getAuthorsName(item)}</Text>
        <Text style={styles.publicationYear}>
          Publication Year: {item.first_publish_year}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </ScrollView>
  );
};

export default Home;
