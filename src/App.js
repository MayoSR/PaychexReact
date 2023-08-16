import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { getQuestions, selectCount } from "./reducers/counterSlice";
import QuestionAnswer from "./components/QuestionAnswer";
import { useState } from "react";
import Quiz from "./components/Quiz";
import ScoreScreen from "./components/ScoreScreen";

function App() {

  const [quizSubmitted,setQuizSubmitted] = useState(false)





  return (
    <div className="App">

      {quizSubmitted ? <ScoreScreen /> : <Quiz setQuizSubmitted={setQuizSubmitted} />}
      
      
    </div>
  );
}

export default App;
