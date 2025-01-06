import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import Space from "../Components/Space/Space";

const MyReview = () => {
  AOS.init({ offset: 100 });
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const result = data.filter((review) => review.email === user?.email);
  const [myReview, setMyReview] = useState(result);
  const handleDeleteReview = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_url}/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
              const remain = myReview.filter((review) => review._id !== id);
              setMyReview(remain);
            }
          });
      }
    });
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-primary text-center mt-3 md:mt-8 lg:mt-14">
        My Reviews({myReview.length})
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
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myReview.map((review, index) => (
              <tr className="text-lg" key={index}>
                <th>{index + 1}</th>
                <td>{review.gameName}</td>
                <td>{review.genre}</td>
                <td>{review.rating} ☆</td>
                <th className="flex gap-3 items-center text-xl">
                  <Link
                    to={`/updateReview/${review._id}`}
                    className="text-purple-500"
                  >
                    <TiEdit />
                  </Link>
                  <button
                    onClick={() => handleDeleteReview(review._id)}
                    className="text-red-600"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Space></Space>
    </>
  );
};

export default MyReview;
