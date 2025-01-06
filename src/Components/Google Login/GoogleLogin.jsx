import React, { useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { signInGoogle } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleSignIn = () => {
    signInGoogle(googleProvider)
      .then((result) => {
        toast.success("Successfully login with Google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Something went wrong !!");
      });
  };
  return (
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="flex cursor-pointer items-center justify-center mt-4 text-gray-600  border rounded-lg   hover:bg-gray-200  border-gray-400"
      >
        <div className="px-4 py-2 text-2xl">
          <FcGoogle />
        </div>

        <span className="w-5/6 px-4 py-3 text-primary font-bold text-center">
          Sign in with Google
        </span>
      </div>
    </div>
  );
};

export default GoogleLogin;
