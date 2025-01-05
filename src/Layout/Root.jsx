import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-200">

        <div className="w-11/12 mx-auto my-3 mb-16">
          <Header></Header>
        </div>

        <div className="flex-grow w-11/12 mx-auto">
          <Outlet></Outlet>
        </div>

        <div className="w-11/12 mx-auto">
          <Footer></Footer>
        </div>
        
      </div>
    </>
  );
};

export default Root;
