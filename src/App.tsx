import { useState } from "react";
import { IQuestionsUnpack } from "./interfaces/IQuestions.interface";
import { typeElementsLength } from "./types/types";
import TaskElement from "./components/TaskElement/TaskElement";
import OptionsSelect from "./components/Header/OptionsSelect";
import { useGetQuestion } from "./hooks/useGetQuestion";

function App() {
  const [questionObject, setQuestionObject] = useState<IQuestionsUnpack>({
    title: "",
    text: "",
  });
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [selectName, setSelectName] = useState<string>("html");
  const [elementsLength, setElementsLength] = useState<typeElementsLength>({
    quantityElements: 0,
    currentElement: 0,
  });

  useGetQuestion(
    selectName,
    indexQuestion,
    setQuestionObject,
    setIndexQuestion,
    setElementsLength
  );

  const { title, text } = questionObject;

  return (
    <>
      <OptionsSelect selectName={selectName} setSelectName={setSelectName} />
      <TaskElement
        title={title}
        text={text}
        index={indexQuestion!}
        setIndex={setIndexQuestion}
        elementsLength={elementsLength}
      />
    </>
  );
}

export default App;
