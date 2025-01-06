import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import Space from "../Components/Space/Space";

const GameWatchlist = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const myWatchlist = data.filter(
    (watchlist) => watchlist.email === user?.email
  );
  AOS.init({ offset: 100 });
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mt-3 md:mt-8 lg:mt-14">
        My Watchlist ({myWatchlist.length})
      </h1>
      <Space></Space>
      <div data-aos="fade-down" className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-blue-400 text-lg">
              <th>Num</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Published Year</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myWatchlist.map((watchlist, index) => (
              <tr className="text-lg" key={index}>
                <th>{index + 1}</th>
                <td>{watchlist.gameName}</td>
                <td>{watchlist.genre}</td>
                <td>{watchlist.publishingYear}</td>
                <td>{watchlist.rating} ☆</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Space></Space>
    </>
  );
};

export default GameWatchlist;
