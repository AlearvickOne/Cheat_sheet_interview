import { useState } from "react";
import { IQuestionsUnpack } from "./interfaces/IQuestions.interface";
import { typeElementsLength } from "./types/types";
import TaskElement from "./components/TaskElement/TaskElement";
import OptionsSelect from "./components/Header/OptionsSelect";
import { useGetQuestion } from "./hooks/useGetQuestion";
import { useGetQuestions } from "./hooks/useGetQuestions";

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

  const { isSuccess, data } = useGetQuestions();

  useGetQuestion(
    selectName,
    indexQuestion,
    setQuestionObject,
    setIndexQuestion,
    setElementsLength,
    data
  );

  const { title, text } = questionObject;

  return (
    <>
      <OptionsSelect selectName={selectName} setSelectName={setSelectName} />
      {isSuccess ? (
        <TaskElement
          title={title}
          text={text}
          index={indexQuestion!}
          setIndex={setIndexQuestion}
          elementsLength={elementsLength}
        />
      ) : (
        <p style={{ textAlign: "center", marginTop: "10px" }}>Loading...</p>
      )}
    </>
  );
}

export default App;
