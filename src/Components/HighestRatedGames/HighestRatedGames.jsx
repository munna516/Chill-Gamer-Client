import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Typewriter } from "react-simple-typewriter";

const HighestRatedGames = () => {
  const [highestRatedGame, setHighestRatedGames] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/highestRatedGames`)
      .then((res) => res.json())
      .then((data) => {
        setHighestRatedGames(data);
      });
  }, []);
  return (
    <>
      <div className="my-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#6442fc] mb-8">
          <Typewriter
            words={["☆☆ Highest Rated Games ☆☆"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highestRatedGame.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default HighestRatedGames;
