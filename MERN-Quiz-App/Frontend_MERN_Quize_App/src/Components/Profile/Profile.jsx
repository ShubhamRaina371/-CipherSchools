import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../../Redux/action.js";
import { Link } from "react-router-dom";

export const Profile = () => {
  const data = useSelector((state) => state.mernQuize.QuizData);
  const userName = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full md:w-4/5 lg:w-2/3">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-teal-600 italic mb-2">
            Sweat more in practice, bleed less in war.
          </h1>
          <p className="text-lg font-semibold text-gray-600">
            – Spartan Warrior Credo
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
          <img
            src="./profile.gif"
            alt="profile"
            className="w-48 h-48 rounded-full border-4 border-teal-500 shadow-md"
          />
          <h1 className="text-3xl font-semibold text-sky-600">
            Welcome, {userName}! 👋
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/">
            <button className="bg-teal-500 text-white text-lg font-bold py-2 px-6 rounded-lg shadow hover:bg-teal-600 transition duration-300">
              Attempt Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
