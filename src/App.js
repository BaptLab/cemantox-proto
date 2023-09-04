import Header from "./Components/Layout/Header";
import React, { useState } from "react";
import Answer from "./Components/answer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setRanking, setTemperature, setWord } from "./redux/slices/receivedAnswerSlice";
import { addAnswer, resetAllAnswer } from "./redux/slices/answersSlice";

const URLtoFetch = "./mockapi.json";

function App() {
  const allAnswers = useSelector((state) => state.answer);
  const receivedAnswer = useSelector((state) => state.receivedAnswer);

  console.log(allAnswers, receivedAnswer);

  const dispatch = useDispatch();

  async function HandleSubmit(wordSubmitted) {
    wordSubmitted.preventDefault();
    const dataReceived = await fetchAnswer(wordSubmitted);
  }

  function handleErrorResponse(err) {
    console.log(err);
  }

  async function fetchAnswer(wordSubmitted) {
    try {
      /* const response = await axios.get(URLtoFetch);
    console.log(response); */
      const dataReceived = {
        word: "porte",
        ranking: 976,
        temperature: "45°",
      };
      dispatch(addAnswer(dataReceived));
      dispatch(setWord(dataReceived.word));
      dispatch(setRanking(dataReceived.ranking));
      dispatch(setTemperature(dataReceived.temperature));
    } catch (err) {
      handleErrorResponse(err);
    }
  }

  const handleResetList = (e) => {
    e.preventDefault();
    console.log("answer before cleaning : ", allAnswers);
    dispatch(resetAllAnswer());
    console.log("answer after cleaning : ", allAnswers);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="page-container">
        <main>
          <div className="reset-btn-container">
            <button onClick={handleResetList}>Reset List</button>
          </div>
          <form className="input-section">
            <input type="text" placeholder="Mot"></input>
            <button onClick={HandleSubmit}>Envoyer</button>
          </form>
          <div className="answer-received-container">
            <Answer data={receivedAnswer} />
          </div>
          <section className="answerList">
            {allAnswers.map((answer, index) => (
              <Answer key={index} data={answer} />
            ))}
          </section>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
