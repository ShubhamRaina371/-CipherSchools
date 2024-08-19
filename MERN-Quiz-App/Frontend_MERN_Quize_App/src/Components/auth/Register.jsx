import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const navigate = useNavigate();

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("https://mern-quiz-server-sudhir.onrender.com/register", user)
        .then((res) => {
          toast("Successfully Registered", {
            type: "success",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((err) => {
          toast("Invalid Input", {
            type: "error",
          });
        });
    } else {
      toast("Invalid Input", {
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="flex w-full h-screen bg-gray-900 items-center justify-center">
      <div className="register-container bg-gray-800 p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-3xl font-bold text-teal-400 mb-6">Register</h2>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
          className="w-full p-3 mb-6 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          className="w-full p-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md mb-4 text-lg transition duration-300"
          onClick={register}
        >
          Register
        </button>
        <ToastContainer />
        <div className="text-center text-gray-400 mb-4">OR</div>
        <Link to="/login">
          <div className="w-full p-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md text-center text-lg cursor-pointer transition duration-300">
            Login
          </div>
        </Link>
      </div>
    </div>
  );
};
