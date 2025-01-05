import React from "react";
import { Link } from "react-router-dom";
import { Roll } from "react-awesome-reveal";

const ReviewCard = ({ review }) => {
  const { _id, gameName, publishingYear, rating, genre, photo } = review;

  return (
    <>
      <Roll  triggerOnce="true">
        <div className="card card-compact bg-base-100 border-2 shadow-lg rounded-xl">
          <figure className="p-3">
            <img
              src={photo}
              className="rounded-lg h-[225px] w-full"
              alt={gameName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">{gameName}</h2>
            <div className="flex justify-between items-center">
              <div className="text-lg">
                <span className="font-semibold">Genre :</span>{" "}
                <span className="text-purple-600 font-semibold">{genre} </span>
              </div>
              <div className="text-lg text-purple-600">
                {rating} <span>★</span>
              </div>
              <div className="text-lg">
                <span className="font-semibold ">Publish :</span>{" "}
                <span className="text-purple-600 font-semibold">
                  {publishingYear}{" "}
                </span>
              </div>
            </div>
            <div className="card-actions justify-center mt-5">
              <Link to={`/reviews/${_id}`} className="btn btn-primary">
                Explore Details
              </Link>
            </div>
          </div>
        </div>
      </Roll>
    </>
  );
};

export default ReviewCard;
