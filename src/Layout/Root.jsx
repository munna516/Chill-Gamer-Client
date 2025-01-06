import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-300">
        <div className="bg-primary fixed w-full text-white  z-50 opacity-80 top-0 ">
          <Header></Header>
        </div>

        <div className="flex-grow w-11/12 mx-auto mt-16">
          <Outlet></Outlet>
        </div>

        <div className="">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Root;
