import TaskElement from "./components/TaskElement";
import { questions } from "./_apiLocal/questions";
import React, { useMemo, useState } from "react";
import { IQuestions } from "./interfaces/IQuestions";

type setQuestion = React.Dispatch<React.SetStateAction<IQuestions>>;
type setIndex = React.Dispatch<React.SetStateAction<number>>;

const getQuestion = (indexQuestion: number, setQuestion: setQuestion, setIndex: setIndex) => {
  return questions.map(({ title, text }, index) => {
    const length = questions.length;

    if (indexQuestion === length) setIndex(0);
    else if (indexQuestion === -1) setIndex(length - 1);

    if (index === indexQuestion) setQuestion({ title: title, text: text });
  });
};

function App() {
  const [questionObject, setQuestionObject] = useState<IQuestions>({ title: "", text: "" });
  const [indexQuestion, setIndexQuestion] = useState<number>(0);

  useMemo(() => getQuestion(indexQuestion, setQuestionObject, setIndexQuestion), [indexQuestion]);

  const { title, text } = questionObject;

  return (
    <>
      <TaskElement title={title} text={text} index={indexQuestion!} setIndex={setIndexQuestion} />;
    </>
  );
}

export default App;
