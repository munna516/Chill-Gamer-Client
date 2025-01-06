import React from "react";
import HighestRatedGames from "../Components/HighestRatedGames/HighestRatedGames";
import LatestNews from "../Components/Latest News/LatestNews";
import PlayStationGames from "../Components/Playstation Games/PlayStationGames";
import Banner from "../Components/Banner/Banner";

const Home = () => {
  return (
    <div className="space-y-10 md:space-y-16 lg:space-y-24">
      <Banner></Banner>
      <HighestRatedGames></HighestRatedGames>
      <LatestNews></LatestNews>
      <PlayStationGames></PlayStationGames>
    </div>
  );
};

export default Home;
