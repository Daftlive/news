import type { EntityState } from '@datorama/akita';
import { EntityStore, StoreConfig } from '@datorama/akita';
import type { News } from './news.model';

export type NewsState = EntityState<News>;

@StoreConfig({ name: 'news' })
export class NewsStore extends EntityStore<NewsState, News> {
  constructor() {
    super();
  }
}

export const newsStore = new NewsStore();
