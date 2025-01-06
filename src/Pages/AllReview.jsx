import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard/ReviewCard";
import Space from "../Components/Space/Space";

const AllReview = () => {
  const allReview = useLoaderData();
  const [reviews, setReivew] = useState(allReview);
  // Handle Sort
  const handleSort = (criteria) => {
    if (criteria == "Rating") {
      const ratingSort = [...reviews].sort((a, b) => b.rating - a.rating);
      setReivew(ratingSort);
    } else if (criteria == "Year") {
      const yearSort = [...reviews].sort(
        (a, b) => b.publishingYear - a.publishingYear
      );
      setReivew(yearSort);
    }
  };
  // Handle Filter
  const handleFilter = (criteria) => {
    const data = reviews;
    if (criteria == "Action") {
      const action = allReview.filter((review) => review.genre === "Action");
      setReivew(action);
    } else if (criteria == "Puzzle") {
      const puzzle = allReview.filter((review) => review.genre === "Puzzle");
      setReivew(puzzle);
    } else if (criteria == "Adventure") {
      const adventure = allReview.filter(
        (review) => review.genre === "Adventure"
      );
      setReivew(adventure);
    } else if (criteria == "Role Playing") {
      const role = allReview.filter(
        (review) => review.genre === "Role-Playing Games"
      );
      setReivew(role);
    } else if (criteria == "Sports and Racing") {
      const sports = allReview.filter(
        (review) => review.genre === "Sports and Racing"
      );
      setReivew(sports);
    }
  };
  return (
    <>
      <div className="text-center mt-3 md:mt-8 lg:mt-14 md:flex justify-evenly items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-primary ">
          All Reviews ({reviews.length})
        </h1>

        <div className="flex justify-center gap-10 ">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-primary md:text-xl m-1"
            >
              Filter By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 md:text-xl font-bold text-blue-600 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={() => handleFilter("Action")}>
                <a>Action</a>
              </li>
              <li onClick={() => handleFilter("Adventure")}>
                <a>Adventure</a>
              </li>
              <li onClick={() => handleFilter("Puzzle")}>
                <a>Puzzle</a>
              </li>
              <li onClick={() => handleFilter("Role Playing")}>
                <a>Role Playing</a>
              </li>
              <li onClick={() => handleFilter("Sports and Racing")}>
                <a>Sports Racing</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 btn-primary md:text-xl"
            >
              Sort By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 font-bold text-blue-600 text-xl rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={() => handleSort("Rating")}>
                <a>Rating</a>
              </li>
              <li onClick={() => handleSort("Year")}>
                <a>Year</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Space></Space>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-10">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </>
  );
};

export default AllReview;
