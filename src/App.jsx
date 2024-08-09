import { useState, useEffect } from "react";
import "./index.css";
import BigRed from "./Components/BigRed";

export default function App() {
  const storedCount = JSON.parse(localStorage.getItem("count"));
  const [count, setCount] = useState(storedCount ? storedCount : 1);
  const [InfringementsPerSec, setInfringementsPerSec] = useState(1);
  const [ClickUpAmount, setClickUpAmount] = useState(1);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + InfringementsPerSec);
      console.log("HOW ARE YOU BREAKING THE RULES WITH YOUR MIND!?");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [InfringementsPerSec]);

  function buttonClick() {
    setCount(count + ClickUpAmount);
    console.log("I CANT BELIEVE YOU JUST DID THAT");
  }

  function Mind() {
    setCount(count - 1000);
    setInfringementsPerSec(InfringementsPerSec + 1);
  }

  function Clickup() {
    setClickUpAmount(ClickUpAmount + 1);
    setCount(count - 2000);
  }

  function Manager() {
    setCount(count - 100000);
    setInfringementsPerSec(InfringementsPerSec + 1000);
  }

  return (
    <>
      <p className="Counter"> Number of infringements: {count}</p>
      <BigRed buttonClick={buttonClick} />
      <br></br>
      <br></br>
      <p className="upgradelist" id="upgradelist">
        BREAK THE RULES BETTER CO.<sup>TM</sup>
      </p>
      <button disabled={count < 1000} className="Mind" id="Mind" onClick={Mind}>
        RULE BREAKING MIND POWERS + 1 (Costs 1000 infringements)
      </button>
      <br></br>
      <button
        disabled={count < 2000}
        className="ClickUp"
        id="Clickup"
        onClick={Clickup}
      >
        BE BETTER AT BREAKING THE RULES + 1 (Costs 2000 infringements)
      </button>
      <br></br>
      <button
        disabled={count < 100000}
        className="Manager"
        id="Manager"
        onClick={Manager}
      >
        GET PROMOTED TO MANAGER (Costs 100,000 infringements)
      </button>
    </>
  );
}
