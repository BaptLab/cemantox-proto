import React, { useState, useEffect } from "react";
import snowIcon from "../assets/images/icons/snow.png";

function Answer({ data }) {
  const [progressionWidth, setProgressionWidth] = useState("0");

  useEffect(() => {
    // Introduce a delay before updating the width
    const delay = setTimeout(() => {
      setProgressionWidth(`${data.ranking / 10}px`);
    }, 100); // Adjust the delay time as needed

    return () => clearTimeout(delay); // Clean up the timeout on component unmount
  }, [data.ranking]);

  return (
    <div className="answer-container">
      <span className="ranking">{data.ranking}</span>
      <span className="word">{data.word}</span>
      <span className="temperature">{data.temperature}</span>
      <img className="temperature-icon" src={snowIcon} alt="temperature" />
      <span className="progression-container">
        <span style={{ width: progressionWidth }} className="progression-bar"></span>
      </span>
    </div>
  );
}

export default Answer;
