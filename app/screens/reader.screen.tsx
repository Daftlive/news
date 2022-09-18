import { useState, useEffect } from "react";
import { Text, StyleSheet, Linking } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { StackParams } from "../navigations/router";
import { News, newsQuery } from "../stores/news";
import Article from "../components/article";
import AppButton from "../components/common/app-button";

const ReaderScreen = () => {
  // Get route params.
  const route = useRoute<RouteProp<StackParams, "Reader">>();
  const [article, setArticle] = useState<News>();

  /** Hook to get the entity (news) by id. */
  useEffect(() => {
    // TODO: Check if the store has the item, if not, update the 
    // store and get the item.
    const item = newsQuery.getEntity(route.params.article);
    setArticle(item);
  }, [route.params.article]);

  /** Open a url using Linking. */
  const openUrl = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <>
      {article ? (
        <>
          <Article article={article} />
          <AppButton
            title="Open in browser"
            onPress={() => openUrl(article.url)}
          />
        </>
      ) : (
        <Text style={styles.notFound}>Article not found</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  notFound: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
});

export default ReaderScreen;
