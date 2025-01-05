import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    name,
    email,
    gameName,
    publishingYear,
    rating,
    genre,
    photo,
    description,
  } = data;

  const handleWatchlist = () => {
    const name = user?.displayName;
    const email = user?.email;
    const watchlist = {
      name,
      email,
      gameName,
      publishingYear,
      rating,
      genre,
      photo,
      description,
    };
    fetch(`${import.meta.env.VITE_url}/myWatchlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Review is added in watchlist",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Yes",
          });
          setIsDisabled(true);
        }
      });
  };

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-[#6442fc] text-center my-10">
        Review Details of{" "}
        <Typewriter
          words={[gameName]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <div className="card card-compact bg-base-100 border-2 mb-10 w-11/12 mx-auto shadow-xl">
        <figure className="p-3">
          <img
            src={photo}
            className="w-full h-[300px] md:h-[500px] rounded-lg"
            alt={gameName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl md:text-3xl font-bold text-center justify-center">
            {gameName}
          </h2>
          <div className="text-center space-y-3 md:space-y-0 md:flex justify-between md:px-10 text-2xl font-medium my-5">
            <h1>
              Category : <span className="text-purple-600">{genre}</span>
            </h1>
            <h1>
              Publish In :{" "}
              <span className="text-purple-600">{publishingYear}</span>{" "}
            </h1>
            <h1 className="text-lg">
              <StarRatings
                rating={parseInt(rating)}
                starRatedColor="gold"
                starEmptyColor="gray"
                starDimension="25px"
                starSpacing="2px"
                numberOfStars={5}
                name="rating"
              />
            </h1>
          </div>
          <div className="md:px-10  text-gray-400">
            <p>{description}</p>
          </div>
          <div className="text-center space-y-3 lg:space-y-0  lg:flex justify-between gap-3 items-center my-5 md:px-10">
            <h1>
              Reviewer Name : <span className="text-purple-600">{name}</span>{" "}
            </h1>
            <h1>
              Reviewer Email : <span className="text-purple-600">{email}</span>{" "}
            </h1>
            <button
              onClick={handleWatchlist}
              disabled={isDisabled}
              className={`btn btn-primary `}
            >
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
