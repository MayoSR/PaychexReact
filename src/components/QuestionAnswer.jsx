import React, { useState } from "react";
import RadioButtons from "./micros/RadioButtons";
import { useDispatch } from "react-redux";
import { selectedAnswer,scoreQuiz } from "../reducers/counterSlice";

export default function QuestionAnswer(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  console.log(props.maxQ, props.currQ);
  const onSubmitQuestionAnswer = () => {
    props.nextFn(props.currQ + 1 >= props.maxQ ? props.currQ : props.currQ + 1);
    dispatch(
      selectedAnswer({ id: props.data.id, selectedOption: selectedOption })
    );
  };

  const submitQuiz = () => {
    props.setQuizSubmitted(true)
    dispatch(scoreQuiz())
  }

  return (
    <div>
      <h4>{props.data.question}</h4>
      {props.data.options.map((ans) => {
        return (
          <RadioButtons
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            data={ans}
            key={ans.id}
          />
        );
      })}
      {
        <button
          style={{ background: "blue", color: "white" }}
          onClick={() =>
            props.nextFn(props.currQ - 1 < 0 ? props.currQ : props.currQ - 1)
          }
        >
          Prev question
        </button>
      }
      <button
        style={{ margin: "10px 20px" }}
        onClick={() => setSelectedOption(null)}
      >
        Reset
      </button>
      {(selectedOption && (props.currQ !== (props.maxQ - 1))) ? (
      <button
        style={{ background: "green", color: "white" }}
        onClick={onSubmitQuestionAnswer}
      >
        Next question
      </button>
      )  :<></>}

      {props.currQ === (props.maxQ - 1) ? <button onClick={submitQuiz}>Submit</button> : <></>}
    </div>
  );
}
