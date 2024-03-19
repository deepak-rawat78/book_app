import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  bookContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  coverImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  bookInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  authors: {
    fontSize: 16,
    marginBottom: 5,
  },
  publicationYear: {
    fontSize: 14,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default styles;
