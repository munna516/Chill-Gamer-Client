import { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import Space from "../Components/Space/Space";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const navigate = useNavigate();
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
    if (!user && !user?.email) {
      return navigate("/login");
    }
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
      <h1 className="text-2xl md:text-4xl font-bold text-primary text-center my-10">
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
      <div className="lg:flex space-y-10 items-center lg:space-y-0 flex-col gap-5 lg:flex-row-reverse ">
        <div className="lg:w-1/2">
          <img
            src={photo}
            className="w-full max-h-[450px] rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-primary">
            {gameName}
          </h1>
          <p className="py-6 text-gray-400">{description}</p>
          <div className="flex items-center justify-between text-xl font-semibold text-cyan-400">
            <h1>{genre}</h1>
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
            <h1>{publishingYear}</h1>
          </div>
          <div className="    my-5 ">
            <h1 className="text-xl font-bold mb-3">Review Details : </h1>
            <ol className="text-cyan-400 space-y-3">
              <li>{name}</li>
              <li>{email}</li>
            </ol>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/reviews")}
              className="btn btn-primary"
            >
              Back
            </button>

            <Link to="/addReview" className="flex gap-5 items-center">
              <button className="btn btn-primary">Review A Game</button>
            </Link>

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
      <Space></Space>
    </>
  );
};

export default ReviewDetails;
