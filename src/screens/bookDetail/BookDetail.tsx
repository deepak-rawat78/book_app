import React, {useMemo} from "react";
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";
import styles from "./styles";
import {extractAuthorNames} from "../../utils/helperFunctions";

const BookDetail = (props: any) => {
  const {book} = props.route.params;

  const authorNames = useMemo(() => {
    return extractAuthorNames(book);
  }, [book]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{uri: book.cover ? book.cover.medium : ""}}
        style={styles.coverImage}
      />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.authors}>{authorNames}</Text>
        <Text style={styles.publicationYear}>
          Publication Year: {book.first_publish_year}
        </Text>
        <Text style={styles.description}>{book.description}</Text>
      </View>
    </ScrollView>
  );
};

export default BookDetail;
