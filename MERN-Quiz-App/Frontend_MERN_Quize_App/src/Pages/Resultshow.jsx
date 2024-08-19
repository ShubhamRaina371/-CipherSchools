import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Resultshow = () => {
  let [count, setCount] = useState(0);
  let [feedback, setFeedback] = useState("");
  const UserName = useSelector((state) => state.mernQuize.userName);
  const resultUser = useSelector((state) => state.mernQuize.result);

  let originalResult = [];
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;

  const filterAtualAnswer = (el) => {
    el.map((e) => {
      originalResult.push(e.correctAnswer);
    });
  };
  filterAtualAnswer(questionArr);

  for (let i = 0; i < originalResult.length; i++) {
    for (let j = 0; j < resultUser.length; j++) {
      if (resultUser[j] == originalResult[i]) {
        count++;
      }
    }
  }

  const calcPercent = () => {
    const percentage = Math.round((count / resultUser.length) * 100);
    if (percentage > 90) {
      setFeedback(`Congratulations! You cleared the Test, ${UserName}! 🎉`);
    } else if (percentage > 50 && percentage < 90) {
      setFeedback(
        `Good Job, ${UserName}! You passed the Test. Keep Practicing! 💪`
      );
    } else {
      setFeedback(
        `Sorry, ${UserName}. You didn't pass the Test. Keep Trying and Practicing! 😓`
      );
    }
  };

  useEffect(() => {
    calcPercent();
  }, [resultUser]);

  return (
    <div className="w-11/12 mx-auto mt-24 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-sky-700 mb-6">
        Result Analysis
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">{feedback}</h2>
        <p className="text-xl italic text-teal-600">
          Total Marks: {count}/{questionArr.length}
        </p>
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Attempt More Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};
