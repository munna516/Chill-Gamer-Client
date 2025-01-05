import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginLottie from "../assets/Lottie/LoginLottie.json";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "../Components/Google Login/GoogleLogin";
import Lottie from "lottie-react";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  //   Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogIn(email, password)
      .then((result) => {
        setUser(result?.user);
        toast.success("Login successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) =>
        toast.error("Invalid email or password", {
          position: "top-right",
        })
      );
  };
  return (
    <>
      {/* <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
          <h1 className="text-2xl font-bold text-center">
            Login to your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-lg absolute top-12 right-4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <Link
                  href="#"
                  className="label-text-alt link link-hover text-blue-500 font-semibold"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mb-5 px-8">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-primary w-full"
            >
              Sign Up With{" "}
              <span className="text-xl text-white">
                <FcGoogle />
              </span>
            </button>
          </div>
          <h1 className="text-center">
            Don't have account?{"  "}
            <Link className="text-blue-400 font-bold" to="/register">
              Register
            </Link>{" "}
          </h1>
        </div>
      </div> */}
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <div className="md:flex  w-full  mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-xl text-center font-bold text-gray-600 ">
              Welcome back !
            </p>

            <GoogleLogin></GoogleLogin>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase">
                or login with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleLogin}>
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
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  required
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
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn btn-accent text-lg text-white w-full"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500">Don't have account? </p>
              <Link to="/register">
                <p className="font-bold text-blue-500 hover:underline uppercase">
                  Register
                </p>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <Lottie animationData={loginLottie}></Lottie>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
