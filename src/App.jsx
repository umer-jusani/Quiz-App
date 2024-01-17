import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./Quiz";
import axios from "axios";

function App() {
  const [data, Setdata] = useState();

  const FetchingData = async () => {
    axios
      .get("https://644982a3e7eb3378ca4ba471.mockapi.io/questions")
      .then((res) => {
        Setdata(res.data);
      })
      .catch((err) => {
        console.log("Getting Error");
      });
  };

  useEffect(() => {
    FetchingData();
  }, []);

  return (
    <>
      <Quiz data={data} />
    </>
  );
}

export default App;
