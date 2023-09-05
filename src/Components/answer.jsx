import React from "react";
import snowIcon from "../assets/images/icons/snow.png";

function Answer(props) {
  //destructuring the props for better readability
  const index = props.index;
  const word = props.data.word;
  const temperature = props.data.temp;
  const ranking = props.data.n_top;

  //convert the rank into progression bar width
  const handleRankFormat = (ranking) => {
    if (ranking != null) {
      return `${(1000 - ranking + 1) / 10}px`;
    } else {
      return 0;
    }
  };

  //Format the rank on 1000
  const handleTopRankFormat = (ranking) => {
    if (ranking != null) {
      return 1000 - ranking + 1;
    } else {
      return "";
    }
  };

  //Format the temp to keep only two digits after coma
  const handleTempFormat = (temperature) => {
    return (Math.round(temperature * 100) / 100).toFixed(2);
  };

  return (
    <div className="answer-container">
      <span className="ranking">{index}</span>
      <span className="word">{word}</span>
      <span className="temperature">{handleTempFormat(temperature)}</span>
      <img className="temperature-icon" src={snowIcon} alt="temperature" />
      <span className="ranking">{handleTopRankFormat(ranking)}</span>
      <span className="progression-container">
        <span
          style={{ width: handleRankFormat(ranking) }}
          className="progression-bar"
        ></span>
      </span>
    </div>
  );
}

export default Answer;
