import { useState } from "react";
import { useEffect } from "react";
import { newsService } from "../stores/news";

const NewsList = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    //newsService.getNews().subscribe();
  }, []);
  return <></>;
};

export default NewsList;
