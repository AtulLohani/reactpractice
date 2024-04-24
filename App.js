import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [Weight, setWeight] = useState("0");
  const [Height, setHeight] = useState("0");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calBmi = (e) => {
    e.preventDefault();
    if (Weight === 0 || Height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (Weight / (Height * Height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("you are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("you are healthy");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2> BMI CALCULATER </h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={Weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (inch)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={Height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
