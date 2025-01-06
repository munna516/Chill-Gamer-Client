import React from "react";
import HighestRatedGames from "../Components/HighestRatedGames/HighestRatedGames";
import LatestNews from "../Components/Latest News/LatestNews";
import PlayStationGames from "../Components/Playstation Games/PlayStationGames";
import Banner from "../Components/Banner/Banner";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div className="space-y-10 md:space-y-16 lg:space-y-24">
      <Banner></Banner>
      <HighestRatedGames></HighestRatedGames>
      <PlayStationGames></PlayStationGames>
      <LatestNews></LatestNews>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
