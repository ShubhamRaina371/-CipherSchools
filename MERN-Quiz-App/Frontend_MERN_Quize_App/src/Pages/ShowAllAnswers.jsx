import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ShowAllAnswers = () => {
  const resultUser = useSelector((state) => state.mernQuize.result);
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;

  return (
    <div className="bg-gray-900 text-gray-100 p-6 md:p-12 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-red-500 mb-8">Quiz Results</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Questions Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-red-400 mb-4 text-center">Questions</h2>
          {questionArr?.map((e, index) => (
            <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-4 mb-4">
              <p className="text-lg">{index + 1}) {e.questions}</p>
            </div>
          ))}
        </div>

        {/* User Answers Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-red-400 mb-4 text-center">Your Answers</h2>
          {resultUser?.map((e, index) => (
            <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-4 mb-4 text-center">
              <p className="text-lg">{e}</p>
            </div>
          ))}
        </div>

        {/* Correct Answers Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-red-400 mb-4 text-center">Correct Answers</h2>
          {questionArr?.map((e, index) => (
            <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-4 mb-4 text-center">
              <p className="text-lg">{e.correctAnswer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Link to="/result">
          <button className="bg-teal-500 text-white text-xl font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-300">
            View Final Marks
          </button>
        </Link>
      </div>
    </div>
  );
};
