import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();
  const name = useSelector((state) => state.mernQuize.userName);

  const topics = [
    { name: "HTML", imgSrc: "/html-5.gif", path: "/quiz/html" },
    { name: "CSS", imgSrc: "./css3.gif", path: "/quiz/css" },
    { name: "JavaScript", imgSrc: "./javascript.gif", path: "/quiz/javascript" },
    { name: "React", imgSrc: "./react.gif", path: "/quiz/react" },
    { name: "Redux", imgSrc: "./redux.svg", path: "/quiz/redux" },
    { name: "MongoDb", imgSrc: "./mongo.gif", path: "/quiz/mongodb" },
  ];

  return (
    <div className="mt-10 mb-10">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-10">Prepare By Topics</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 m-auto">
        {topics.map((topic) => (
          <Link to={userId ? topic.path : "/register"} key={topic.name}>
            <div className="border-2 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="relative flex items-center justify-between bg-teal-600 p-4 text-white text-2xl font-bold">
                <h1>{topic.name}</h1>
                <img
                  src={topic.imgSrc}
                  alt={topic.name}
                  className="absolute right-4 w-20 h-20 object-cover rounded-full"
                />
              </div>
              <div className="h-36 flex items-center justify-center bg-gray-50">
                <p className="text-lg text-teal-700">
                  Take a quiz on {topic.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
