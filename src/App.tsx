import { useMemo, useState } from "react";
import { IQuestionsUnpack } from "./interfaces/IQuestions.interface";
import TaskElement from "./components/TaskElement/TaskElement";
import OptionsSelect from "./components/Header/OptionsSelect";
import getQuestion from "./_apiLocal/getQuestion";

function App() {
  const [questionObject, setQuestionObject] = useState<IQuestionsUnpack>({ title: "", text: "" });
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [selectName, setSelectName] = useState<string>("html");

  useMemo(() => getQuestion(selectName, indexQuestion, setQuestionObject, setIndexQuestion), [selectName, indexQuestion]);

  const { title, text } = questionObject;

  return (
    <>
      <OptionsSelect selectName={selectName} setSelectName={setSelectName} />
      <TaskElement title={title} text={text} index={indexQuestion!} setIndex={setIndexQuestion} />
    </>
  );
}

export default App;
