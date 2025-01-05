import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gameName = form.gameName.value;
    const publishingYear = form.publishingYear.value;
    const rating = form.rating.value;
    const genre = form.genre.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const newReview = {
      name,
      email,
      gameName,
      publishingYear,
      rating,
      genre,
      photo,
      description,
    };
    fetch(`${import.meta.env.VITE_url}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Review is added",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Yes",
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <div className="bg-[#d8d0fb] my-10 p-5 md:p-20 rounded-lg">
        <h1 className="text-4xl text-[#6442fc]  font-bold text-center mb-5">
          Add a review
        </h1>
        <form onSubmit={handleSubmit}>
          {/* First Row Name and email */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">User Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  disabled
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">User Email</span>
                </div>
                <input
                  type="text"
                  name="email"
                  disabled
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          {/* Second Row Publishing Year and Title */}
          <div className="md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Game Title</span>
                </div>
                <input
                  type="text"
                  name="gameName"
                  placeholder="Game name"
                  className="input input-bordered "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Publishing Year
                  </span>
                </div>
                <input
                  type="text"
                  name="publishingYear"
                  placeholder="year of publish (ex:2002, 2024)"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          {/* Third Row Genre and rating */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Rating</span>
                </div>
                <input
                  type="number"
                  name="rating"
                  placeholder="rating (1-5)"
                  className="input input-bordered pr-6"
                  min={1}
                  max={5}
                />
              </label>
            </div>

            <div className="w-full ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Genre</span>
                </div>
                <select name="genre" className="select select-bordered ">
                  <option disabled selected>
                    choose game category
                  </option>
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Puzzle</option>
                  <option>Sports and Racing</option>
                  <option>Role-Playing Games</option>
                </select>
              </label>
            </div>
          </div>

          {/* Fourth Row Photo URL */}
          <div className="mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Game cover URL
                  </span>
                </div>
                <input
                  type="url"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          {/* Fifth Row Description */}
          <div className=" md:flex gap-5 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Description</span>
                </div>
                <textarea
                  type="text"
                  name="description"
                  rows="5"
                  cols="10"
                  placeholder="write somgthing about this game"
                  className="input input-bordered w-full h-[110px] "
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            className="w-full btn btn-primary font-bold"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddReview;
