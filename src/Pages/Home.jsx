import React from "react";
import Slider from "../Components/Banner/Slider";
import HighestRatedGames from "../Components/HighestRatedGames/HighestRatedGames";
import LatestNews from "../Components/Latest News/LatestNews";
import PlayStationGames from "../Components/Playstation Games/PlayStationGames";

const Home = () => {
  return (
    <div>
      {/* <Slider></Slider> */}
      <HighestRatedGames></HighestRatedGames>
      <LatestNews></LatestNews>
      <PlayStationGames></PlayStationGames>
    </div>
  );
};

export default Home;
