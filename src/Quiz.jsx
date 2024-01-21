import { React, useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {
  const [data, setData] = useState();
  const [currentData, SetcurrentData] = useState(0);

  const fetchingData = async () => {
    const res = await axios.get(
      "https://644982a3e7eb3378ca4ba471.mockapi.io/questions"
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  if (data) {
    const { question, choices, id } = data[currentData];

    return (
      <div className="p-12 bg-white font-mono space-y-7 rounded-md">
        <div>
          <h1 className="text-gray-500 mb-2">
            <span className="text-[#2d264b] text-5xl">{id + 1}</span>/
            {data.length}
          </h1>
          <h3 className="font-medium text-xl">{question}</h3>
        </div>
        <ul>
          
        </ul>
        <div className="flex justify-end">
          <button
            className="btn"
            onClick={() => SetcurrentData(currentData + 1)}
          >
            {currentData == data.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    );
  }
};

export default Quiz;
