import TaskElement from "./components/TaskElement";
import React, { useMemo, useState } from "react";
import { IQuestions } from "./interfaces/IQuestions";
import getElementsInJson from "./_apiLocal/serverComands";

type setQuestion = React.Dispatch<React.SetStateAction<IQuestions>>;
type setIndex = React.Dispatch<React.SetStateAction<number>>;

const getQuestion = async (idQuestionSelector: number, indexQuestion: number, setQuestion: setQuestion, setIndex: setIndex) => {
  const questions = await getElementsInJson();
  const questionsHtml = questions.html!;
  const questionsCss = questions.css!;
  const questionsJS = questions.js!;
  const questionsReact = questions.react!;

  let questionSelector = questionsHtml;

  switch (idQuestionSelector) {
    case 0:
      questionSelector = questionsHtml;
      break;
    case 1:
      questionSelector = questionsCss;
      break;
    case 2:
      questionSelector = questionsJS;
      break;
    case 3:
      questionSelector = questionsReact;
      break;
  }

  return questionSelector!.map(({ title, text }, index) => {
    const length = questionSelector.length;

    if (indexQuestion === length) setIndex(0);
    else if (indexQuestion === -1) setIndex(length - 1);

    if (index === indexQuestion) setQuestion({ title: title, text: text });
  });
};

function App() {
  const [questionObject, setQuestionObject] = useState<IQuestions>({ title: "", text: "" });
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [idQuestionSelector, setIdQuestionSelector] = useState<number>(3);

  useMemo(() => getQuestion(idQuestionSelector, indexQuestion, setQuestionObject, setIndexQuestion), [indexQuestion]);

  const { title, text } = questionObject;

  return (
    <>
      <TaskElement title={title} text={text} index={indexQuestion!} setIndex={setIndexQuestion} />;
    </>
  );
}

export default App;
