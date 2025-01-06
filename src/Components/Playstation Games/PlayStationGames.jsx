import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import Space from "../Space/Space";

const PlayStationGames = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAddToPlay = (game, key) => {
    if (user && user?.email) {
      const email = user?.email;
      const playlist = { email, game };
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
              title: `${game} is added to your playlist`,
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Yes",
            });
            setDisabledButtons((prev) => [...prev, key]);
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
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <Space></Space>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {/* First Game */}
        <div className="card bg-base-100 image-full  shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/Cm3Tjvj/God-of-war.jpg"
              alt="God Of War"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg">God of War</h2>
            <p>Action-Adventure</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddToPlay("God Of War", 1)}
                className="btn btn-primary"
              >
                {disabledButtons.includes(1) ? "Added" : "Add to Playlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Second Game */}
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co.com/KWr6Rnt/h.jpg"
              alt="God Of War"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg">
              Horizon Forbidden West
            </h2>
            <p>Action RPG</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddToPlay("Horizon Forbidden West", 2)}
                className="btn btn-primary"
              >
                {disabledButtons.includes(2) ? "Added" : "Add to Playlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Third Game */}
        <div className="card bg-base-100 image-full  shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co.com/4msJH9p/aaa.jpg"
              alt="The Last of Us Part II"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg">
              The Last of Us Part II
            </h2>
            <p>Survival</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddToPlay("The Last of Us Part II", 3)}
                className="btn btn-primary"
              >
                {disabledButtons.includes(3) ? "Added" : "Add to Playlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Game */}
        <div className="card bg-base-100 image-full  shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co.com/4SkzmKH/spd.webp"
              alt="Spider-Man: Miles Morales"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg">
              Spider-Man: Miles Morales
            </h2>
            <p> Action-Adventure</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddToPlay("Spider-Man: Miles Morales", 4)}
                className="btn btn-primary"
              >
                {disabledButtons.includes(4) ? "Added" : "Add to Playlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Fifth Game */}
        <div className="card bg-base-100 image-full  shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co.com/r3VZ1M8/eldr.jpg"
              alt="Spider-Man: Miles Morales"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-lg">Elden Ring</h2>
            <p>Action RPG</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddToPlay("Elden Ring", 5)}
                className="btn btn-primary"
              >
                {disabledButtons.includes(5) ? "Added" : "Add to Playlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Space></Space>
    </div>
  );
};

export default PlayStationGames;
