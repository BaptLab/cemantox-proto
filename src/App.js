import Header from "./Components/Layout/Header";
import React, { useState } from "react";
import Answer from "./Components/answer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addAnswer, resetAllAnswer } from "./redux/slices/answersSlice";
import fetchAnswer from "./data/fetchAnswer";

function App() {
  const [dataReceived, setDataReceived] = useState("");
  const [displayErr, setDisplayErr] = useState(false);
  const allAnswers = useSelector((state) => state.answer);

  const dispatch = useDispatch();

  async function HandleSubmit(e) {
    e.preventDefault();
    const wordSubmitted = document.getElementById("submittedWord").value;
    document.getElementById("submittedWord").value = "";
    document.getElementById("submittedWord").focus();
    const dataReceived = await fetchAnswer(wordSubmitted);
    if (dataReceived !== undefined) {
      setDataReceived(dataReceived);
      dispatch(addAnswer(dataReceived));
      setDisplayErr(false);
    } else {
      setDisplayErr(true);
    }
  }

  const handleResetList = (e) => {
    e.preventDefault();
    dispatch(resetAllAnswer());
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
            <input id="submittedWord" type="text" placeholder="Mot"></input>
            <button onClick={HandleSubmit}>Envoyer</button>
          </form>
          <span className={`errMsg ${displayErr ? "show" : "hide"}`}>
            Ce mot n'est pas accepté !
          </span>
          <div className="answer-received-container">
            <Answer data={dataReceived} />
          </div>
          <section className="answerList">
            {allAnswers
              .slice()
              .sort((a, b) => b.temp - a.temp)
              .map((answer, index) => (
                <Answer index={allAnswers.length - index} key={index} data={answer} />
              ))}
          </section>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
