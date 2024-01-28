import React from "react";

const Result = ({ result, dataLenght, gameStart }) => {
  const { score, wrongAnswer, CorrectAnswer } = result;

  return (
    <div className="text-center space-y-3">
      <h1 className="font-bold text-2xl">Result</h1>
      <p>
        Total Question:
        <span className="text-2xl text-[#2d264b]  ms-2">{dataLenght}</span>
      </p>
      <p>
        Total Score:
        <span className="text-2xl text-[#2d264b]  ms-2">{score}</span>
      </p>
      <p>
        Correct Answers:
        <span className="text-2xl text-[#2d264b]  ms-2">{CorrectAnswer}</span>
      </p>
      <p>
        Wrong Answers:
        <span className="text-2xl text-[#2d264b]  ms-2">{wrongAnswer}</span>
      </p>
      <button className="btn mt-6" onClick={gameStart}>
        Try Again
      </button>
    </div>
  );
};

export default Result;
