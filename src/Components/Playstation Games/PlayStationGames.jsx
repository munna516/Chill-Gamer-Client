import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import Space from "../Space/Space";
import toast from "react-hot-toast";

const PlayStationGames = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/play-station-games`)
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const handleAddToPlay = (game) => {
    if (user && user?.email) {
      const email = user?.email;
      const gameId = game._id;
      const gameName = game.gameName;
      const playlist = { email, gameId, gameName };
      fetch(`${import.meta.env.VITE_url}/add-to-playlist`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(playlist),
      })
        .then((res) => res.json())
        .then((data) => {
          
          if (data.acknowledged) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${gameName} is added playlist`,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            toast.error("Already added");
          }
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="">
      <h1 className="text-2xl md:text-4xl font-bold text-primary text-center ">
        <Typewriter
          words={["Featured Play Station Games"]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <Space></Space>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* First Game */}
        {games.map((game) => (
          <div key={game._id} className="card bg-base-100 image-full h-60">
            <figure>
              <img className="w-full" src={game.photo} alt={game.gameName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-xl text-cyan-400">
                {game.gameName}
              </h2>
              <p className="">{game.genre}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleAddToPlay(game)}
                  className="btn btn-primary"
                >
                  Add To Playlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayStationGames;
