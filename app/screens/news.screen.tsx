import { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Order } from "@datorama/akita";
import { News, newsQuery, newsService } from "../stores/news";
import SearchInput from "../components/common/search-input";
import NewsList from "../components/news-list";
import OptionsPanel from "../components/options/options-panel";
import { optionsQuery } from "../stores/options";
import { Delay } from "../utils/delay";

const delay = new Delay();

const NewsScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();
  const [news, setNews] = useState<News[]>([]);
  const [searchNews, setSearchNews] = useState<News[]>([]);

  useEffect(() => {
    /** Thanks to this query we can know if the service is loading new news or not. */
    newsQuery.selectLoading().subscribe(q => setLoading(q));

    /** With this query we get the changes in the options, and then we get the news with these preferences. */
    optionsQuery.select(["country", "category"]).subscribe(options => {
      newsService
        .getNews({
          country: options.country,
          category: options.category,
        })
        .subscribe();
    });

    /** This query sorts the news by date (Desc). */
    newsQuery
      .selectAll({ sortBy: "publishedAt", sortByOrder: Order.DESC })
      .subscribe(items => {
        setNews(items);
      });
  }, []);

  useEffect(() => {
    if (search && search.length > 2) {
      /** Implemented to prevent an excess of queries on each input. */
      delay.call(() => {
        /** This query fetches the news items that match the search input and the title of the news. */
        newsQuery
          .selectAll({
            filterBy: entity =>
              entity.title.toLowerCase().includes(search.toLowerCase()),
          })
          .subscribe(items => setSearchNews(items));
      }, 400);
    }
  }, [search]);

  const items = search ? searchNews : news;

  return (
    <>
      <View style={styles.searchContainer}>
        <SearchInput onChange={text => setSearch(text)} />
        <OptionsPanel />
      </View>
      <LinearGradient
        colors={["#f2f2f2", "#ffffff00"]}
        style={styles.topGradient}
      />
      {loading ? <ActivityIndicator size="large" /> : <NewsList news={items} />}
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  topGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 94,
    height: 10,
    zIndex: 2,
  },
});
export default NewsScreen;
