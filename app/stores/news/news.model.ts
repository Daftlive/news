import { ID } from "@datorama/akita";

export interface Source {
  id: string;
  name: string;
}

export interface News {
  id: ID;
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

