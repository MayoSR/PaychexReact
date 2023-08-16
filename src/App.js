import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { getQuestions, selectCount } from "./reducers/counterSlice";
import QuestionAnswer from "./components/QuestionAnswer";
import { useState } from "react";
import Quiz from "./components/Quiz";
import ScoreScreen from "./components/ScoreScreen";
import Timer from "./components/micros/Timer";

function App() {

  const [quizSubmitted,setQuizSubmitted] = useState(false)
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="App">

      {quizSubmitted ? <ScoreScreen setIsActive={setIsActive} /> : <Quiz setQuizSubmitted={setQuizSubmitted} />}
      
      <Timer isActive={isActive} setIsActive={isActive} />
    </div>
  );
}

export default App;
