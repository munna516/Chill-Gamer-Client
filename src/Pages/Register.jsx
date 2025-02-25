import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegistrationLottie from "../assets/Lottie/RegistrationLottie.json";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import GoogleLogin from "../Components/Google Login/GoogleLogin";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Login Form
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setErrorMessage("password should be 6 characters");
      return;
    }
    const regularExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regularExp.test(password)) {
      setErrorMessage("must have uppercase & lowercase");
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        setUser(result?.user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Registration Succcessful");
            navigate("/");
          })
          .catch((error) => toast.error(error.code), {
            position: "top-right",
          });
      })
      .catch((error) => toast.error("Email already use"), {
        position: "top-right",
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-16">
      <div className="md:flex w-full  mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-center text-gray-600 ">
            Registration an Account
          </p>

          <GoogleLogin></GoogleLogin>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase">
              or Registration with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                required
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                required
                name="photo"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                required
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between relative">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-lg absolute top-10 right-4"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type={showPassword ? "text" : "password"}
              />
              {errorMessage && (
                <p className="mt-2 text-red-400 font-bold">{errorMessage}</p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn btn-primary text-lg w-full text-white"
              >
                Register
              </button>
            </div>
          </form>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500">Already have account? </p>
            <Link to="/login">
              <p className="font-bold text-blue-500 hover:underline uppercase">
                Login
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mx-auto">
          <Lottie animationData={RegistrationLottie}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
