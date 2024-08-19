import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbarnew = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logouthandler = () => {
    if (userName !== null) {
      dispatch(Logouthandleraction());
      toast.success(`${userName} Successfully Logged Out`);
    }
    if (adminName === "Sudhir P Chavhan") {
      dispatch(Logouthandleraction());
      toast.success(`Admin ${adminName} Successfully Logged Out`);
    }
    navigate("/");
  };

  const profilenavigate = () => {
    navigate("/profile");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
        <img
  className="h-12 w-12 mr-3 rounded-md"
  src="https://png.pngtree.com/png-clipart/20210418/original/pngtree-quiz-logo-icon-vector-png-image_6234100.jpg"
  alt="Logo"
  style={{ opacity: 0.9 }} // Adjust the value as needed
/>

          <span className="text-white text-2xl font-bold">MERN Quiz App</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {userId ? (
            <>
              <span className="text-white font-semibold">Welcome, {userName || adminName}</span>
              <button
                onClick={profilenavigate}
                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md shadow"
              >
                Profile
              </button>
              <button
                onClick={logouthandler}
                className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md shadow"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-gray-300 font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </nav>
  );
};
