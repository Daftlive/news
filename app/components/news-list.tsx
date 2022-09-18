import { useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  VirtualizedList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ID } from "@datorama/akita";
import { News } from "../stores/news";
import { StackParams } from "../navigations/router";
import DateText from "./common/date";

type ScreenProp = StackNavigationProp<StackParams, "News">;

const NewsList = ({ news }: { news: News[] }) => {
  const navigation = useNavigation<ScreenProp>();

  /**
   * The route of the article is reached and the article id is sent as a parameter.
   * @param id
   */
  const openArticle = (id: ID) => {
    navigation.navigate("Reader", { article: id });
  };

  /**
   * With 'useCallback' we avoid more renders than necessary in the VirtualizedList.
   */
  const Item = useCallback(
    ({ item }: { item: News }) => (
      <TouchableOpacity
        style={styles.container}
        onPress={() => openArticle(item.id)}
      >
        <Text style={styles.source}>{item.source.name}</Text>
        <View style={styles.imageContainer}>
          {
            //TODO: Include a caching system for the images.
          }
          {item.urlToImage && (
            <Image
              style={styles.image}
              source={{
                uri: item.urlToImage,
              }}
            />
          )}
        </View>
        <DateText date={item.publishedAt} style={styles.date} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    ),
    []
  );

  const getItem = (data: any, index: number) => {
    return data[index];
  };

  const getItemCount = (news: any) => news.length;

  return (
    <View style={styles.scrollContainer}>
      {/**
       * Thanks to the VirtualizedList we get a better performance of the application especially if the list of items is too long.
       */}
      <VirtualizedList
        data={news}
        initialNumToRender={4}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    marginBottom: 4,
    backgroundColor: "white",
  },
  imageContainer: {
    paddingHorizontal: 4,
  },
  image: {
    width: "100%",
    minHeight: 300,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#d5d5d5",
  },
  title: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    paddingTop: 5,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  source: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default NewsList;
