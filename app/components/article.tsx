import { View, Text, Image, StyleSheet } from "react-native";
import { News } from "../stores/news";
import CommonStyles from "../styles/common.styles";
import DateText from "./common/date";

const Article = ({ article }: { article: News }) => {
  return (
    <View>
      <Text style={styles.title}>{article.title}</Text>
      <View style={styles.imageContainer}>
        {article.urlToImage && (
          <Image
            style={styles.image}
            source={{
              uri: article.urlToImage,
            }}
          />
        )}
      </View>
      <DateText date={article.publishedAt} style={styles.date} />
      <Text style={styles.content}>
        {article.content ?? article.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    paddingHorizontal: 4,
  },
  image: {
    width: "100%",
    minHeight: 300,
    borderRadius: 20,
    ...CommonStyles.shadow,
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    paddingTop: 5,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  readMore: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "black",
  },
  readMoreText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Article;
