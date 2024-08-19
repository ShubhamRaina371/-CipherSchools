import React from "react";
import "./Quiz.css";
import { useSelector, useDispatch } from "react-redux";
import { postQuizResult, postUserResult } from "../../Redux/action.js";
import { Link } from "react-router-dom";

export const Quiz = (props) => {
  const questionArr = props.questionArr;
  const data = useSelector((state) => state?.mernQuize?.QuizData);
  const result = useSelector((state) => state?.mernQuize?.result);
  const userID = useSelector((state) => state?.mernQuize?.userId);
  
  const quizID = data[0]._id;
  const dispatch = useDispatch();

  const [num, setNum] = React.useState(0);
  const [ans, setAns] = React.useState([]);
  const [btnshow, setBtnshow] = React.useState(false);
  const [disable, setDisable] = React.useState(null);

  const handleQue = (index) => {
    setDisable(index);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <iframe src="https://embed.lottiefiles.com/animation/103649" className="animation"></iframe>
          <div className="quiz-info">
            <h1 className="question-number">{num + 1})</h1>
            <h1 className="question-text">
              {questionArr[num]?.questions}
            </h1>
          </div>
          <div className="attempt-info">
            <h1 className="attempted-text">
              Attempted: {num + 1}/{questionArr.length}
            </h1>
          </div>
        </div>
        <ol className="options-list">
          {questionArr[num]?.options?.map((answer, index) => (
            <li
              key={index}
              className={
                index === disable && disable !== null
                  ? "option-item selected"
                  : "option-item"
              }
              onClick={() => {
                setAns([...ans, answer.option]);
                handleQue(index);
              }}
            >
              {answer.option}
            </li>
          ))}
        </ol>
        <div className="button-group">
          <button
            className="btn-skip"
            onClick={() => {
              setNum(num + 1);
              setDisable(null);
            }}
          >
            Skip
          </button>
          {btnshow ? (
            <Link to="/showallanswer">
              <button
                className="btn-result"
                onClick={() => {
                  dispatch(postUserResult(ans));
                  const obj = {
                    quizId: quizID,
                    userId: userID,
                    quizResult: ans,
                  };
                  dispatch(postQuizResult(obj));
                }}
              >
                Result
              </button>
            </Link>
          ) : (
            <button
              className="btn-submit"
              onClick={() => {
                setNum(num + 1);
                setDisable(null);
                if (questionArr.length - 2 === num) {
                  setBtnshow(true);
                }
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
