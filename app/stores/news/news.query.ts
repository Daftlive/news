import { QueryEntity } from "@datorama/akita";
import type { NewsState } from "./news.store";
import { NewsStore, newsStore } from "./news.store";

export class NewsQuery extends QueryEntity<NewsState> {
  constructor(protected newsStore: NewsStore) {
    super(newsStore);
  }
}

export const newsQuery = new NewsQuery(newsStore);

