import { React, useState } from "react";
import InitialState from "./constant";
import Result from "./Result";

const Quiz = ({ data }) => {
  const [currentData, SetcurrentData] = useState(1);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(InitialState);
  const [showResult, setshowResult] = useState(false);

  const gameStart = () => {
    setshowResult(false);
    SetcurrentData(1);
    setResult({
      score: 0,
      CorrectAnswer: 0,
      wrongAnswer: 0,
    });
  };

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);

    if (answer == data[currentData].correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);

    setResult((prev) => {
      return answer
        ? {
            ...prev,
            score: prev.score + 5,
            CorrectAnswer: prev.CorrectAnswer + 1,
          }
        : {
            ...prev,
            wrongAnswer: prev.wrongAnswer + 1,
          };
    });

    if (currentData === data.length - 1) {
      setshowResult(true);
      SetcurrentData(0);
    } else {
      SetcurrentData(currentData + 1);
      setshowResult(false);
    }
  };

  if (data) {
    const { id, question, choices } = data[currentData];

    return (
      <div className="p-12 bg-white font-mono space-y-7 rounded-md">
        {!showResult ? (
          <>
            <div>
              <h1 className="text-gray-500 mb-2">
                <span className="text-[#2d264b] text-5xl">{id + 1}</span>/
                {data.length}
              </h1>
              <h3 className="font-medium text-xl">{question}</h3>
            </div>
            <ul className="space-y-3">
              {choices &&
                choices.map((answer, index) => {
                  return (
                    <li
                      onClick={() => onAnswerClick(answer, index)}
                      key={index}
                      className={
                        answerIdx == index
                          ? "bg-[#2d264b] text-white p-2 rounded-md"
                          : "border-2 border-[#2d264b] p-2 rounded-md"
                      }
                    >
                      {answer}
                    </li>
                  );
                })}
            </ul>
            <div className="flex justify-end">
              <button
                className={
                  answerIdx !== null ? "btn" : "text-gray-500 font-semibold"
                }
                onClick={onClickNext}
                disabled={answerIdx == null}
              >
                {currentData == data.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <Result
            result={result}
            dataLenght={data.length}
            gameStart={gameStart}
          />
        )}
      </div>
    );
  }
};

export default Quiz;
