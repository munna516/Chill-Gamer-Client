import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { FaRegNewspaper } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import Space from "../Space/Space";

const LatestNews = () => {
  const data = useLoaderData();
  const [latestNews, setLatestNews] = useState(data);
  return (
    <div>
      <div className="flex  justify-center items-center text-2xl md:text-4xl font-bold text-center text-primary ">
        <span>
          <FaRegNewspaper />
        </span>

        <span className="ml-2 mr-2">
          <Typewriter
            words={["Latest News Section"]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>

        <span>
          <FaRegNewspaper />
        </span>
      </div>
      <Space></Space>
      <div className="space-y-5 px-2 md:px-28 mb">
        {latestNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
