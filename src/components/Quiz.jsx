import React, { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import { useSelector } from "react-redux";
import { getQuestions } from "../reducers/counterSlice";

export default function Quiz(props) {
  const [currQuestion, setCurrQuestion] = useState(0);

  const questionList = useSelector(getQuestions);
  return (
    <div>
      <h1>
        Question {currQuestion + 1}/{questionList.length}{" "}
      </h1>

      {questionList
        .filter((q, idx) => idx === currQuestion)
        .map((question) => {
          return (
            <QuestionAnswer
              setQuizSubmitted={props.setQuizSubmitted}
              key={question.id}
              maxQ={questionList.length}
              currQ={currQuestion}
              nextFn={setCurrQuestion}
              data={question}
            />
          );
        })}
    </div>
  );
}
