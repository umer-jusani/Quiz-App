import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./Quiz";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  const fetchingData = async () => {
    const res = await axios.get(
      "https://644982a3e7eb3378ca4ba471.mockapi.io/questions"
    );
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <Quiz data={data} />
    </>
  );
}

export default App;
