import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { getStorageItem, setStorageItem } from "../../utils/storage.service";
import { News } from "./news.model";
import { NewsStore, newsStore } from "./news.store";

interface INewsParams {
  country?: "mx" | "us";
  category?:
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";
}

interface INewsStorage extends INewsParams {
  news: News;
}

/**
 * This constant is used to convert minutes into milliseconds.
 */
const diff = 1000 * 60 * environment.newsRefreshTimeInMinutes;

export class NewsService {
  constructor(protected newsStore: NewsStore) {}

  /**
   * First, it checks if there is news stored on the device, if there is and it meets the expiry time, it returns the news, if not, it forwards the request to the api.
   * @param INewsParams
   * @returns Observable<News>
   * @example newsService.getNews({country, category}).subscribe({
   *    next: (data) => console.log(data),
   *    error: (error) => console.log(error)});
   */
  getNews = ({ country, category }: INewsParams): Observable<News> => {
    this.newsStore.setLoading(true);
    let observable$ = new Observable<News>(observer => {
      getStorageItem(`news-${country}-${category}`).then(data => {
        if (data) {
          const { date, news } = JSON.parse(data);
          const d1 = new Date(date).getTime();
          const d2 = new Date().getTime();
          const time = d2 - d1;
          const outOfDate = diff < time;
          if (outOfDate) {
            this.fetchNews({ country, category }).subscribe();
          }
          const items = this.parseNews(news);
          this.newsStore.set(items);
          observer.next(items);
          observer.complete();
          this.newsStore.setLoading(false);
        } else {
          this.fetchNews({ country, category }).subscribe();
        }
      });
    });
    return observable$;
  };

  /**
   * Fetch news from 'newsapi.org' by country and category. If fetched, save them to your device and add them to the Akita store.
   * @param INewsParams
   * @returns Observable<News>
   * @example newsService.getNews({country, category}).subscribe();
   */
  private fetchNews = ({
    country,
    category,
  }: INewsParams): Observable<News> => {
    this.newsStore.setLoading(true);
    let observable$ = new Observable<News>(observer => {
      const url = `${
        environment.newsApiUrl
      }/v2/top-headlines?country=${country}&pageSize=20&category=${
        category ?? ""
      }&apiKey=${environment.newsApiKey}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const { articles } = data;
          const items = articles.map(
            (item: any, index: number) => (item = { ...item, ...{ id: index } })
          );
          this.newsStore.set(items);
          observer.next(items);
          observer.complete();
          this.storeNews({
            country,
            category,
            news: items,
          });
          this.newsStore.setLoading(false);
        })
        .catch(error => {
          observer.error(error);
          this.newsStore.setLoading(false);
        });
    });
    return observable$;
  };

  /**
   * Save the news on the device
   * @param INewsStorage
   */
  private storeNews = ({ country, category, news }: INewsStorage) => {
    setStorageItem(
      `news-${country}-${category}`,
      JSON.stringify({ date: new Date(), news })
    );
  };

  /**
   * Akita requires entities to have an ID, 'newsapi.org' does not provide any ID, so it is necessary to add one.
   * @param items
   * @returns any[]
   */
  private parseNews(items: any) {
    return items.map(
      (item: any, index: number) => (item = { ...item, ...{ id: index } })
    );
  }
}

export const newsService = new NewsService(newsStore);

