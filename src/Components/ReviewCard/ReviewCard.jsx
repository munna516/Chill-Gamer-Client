import React from "react";
import { Link } from "react-router-dom";
import { Roll } from "react-awesome-reveal";

const ReviewCard = ({ review }) => {
  const { _id, gameName, publishingYear, rating, genre, photo } = review;

  return (
    <>
      <Roll triggerOnce="true">
        <div className="card card-compact bg-base-100 border-2 shadow-lg rounded-xl">
          <figure className="p-3">
            <img
              src={photo}
              className="rounded-lg h-[225px] w-full"
              alt={gameName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl text-primary">{gameName}</h2>
            <div className="flex justify-between items-center">
              <div className="text-lg">
                <span className="font-semibold"></span>{" "}
                <span className="text-cyan-400 ">{genre} </span>
              </div>
              <div className="text-lg text-cyan-400">
                {rating} <span className="text-orange-300" >★</span>
              </div>
              <div className="text-lg">
                <span className="font-semibold "></span>{" "}
                <span className="text-cyan-400">
                  {publishingYear}{" "}
                </span>
              </div>
            </div>
            <div className="card-actions justify-center mt-5">
              <Link to={`/reviews/${_id}`} className="btn btn-outline text-primary border-2 border-primary hover:bg-primary hover:border-none">
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
