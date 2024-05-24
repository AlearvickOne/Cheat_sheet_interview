/* eslint-disable react-hooks/exhaustive-deps */
import { useGetQuestions } from "./useGetQuestions";
import {
  typeElementsLength,
  typeSetIndexQuestion,
  typeSetQuestion,
} from "@/types/types";
import { useEffect, useMemo } from "react";

export const useGetQuestion = async (
  idQuestionSelector: string,
  indexQuestion: number,
  setQuestion: typeSetQuestion,
  setIndex: typeSetIndexQuestion,
  setElementsLength: React.Dispatch<React.SetStateAction<typeElementsLength>>
) => {
  const questions = useGetQuestions();

  const questionSelector = useMemo(() => {
    if (!questions) return;

    switch (idQuestionSelector) {
      case "html":
        setIndex(0);
        return questions.html;
      case "css":
        setIndex(0);
        return questions.css;
      case "js":
        setIndex(0);
        return questions.js;
      case "ts":
        setIndex(0);
        return questions.ts;
      case "react":
        setIndex(0);
        return questions.react;
      case "restApiHttp":
        setIndex(0);
        return questions.restApiHttp;
      case "cors":
        setIndex(0);
        return questions.cors;
    }
  }, [idQuestionSelector, questions]);

  useEffect(() => {
    if (!questionSelector) return;
    (async () => {
      setElementsLength((prev) => ({
        ...prev,
        quantityElements: questionSelector.length,
      }));

      questionSelector!.map(({ title, text }, index) => {
        const length = questionSelector!.length;

        setElementsLength((prev) => ({
          ...prev,
          currentElement: indexQuestion + 1,
        }));

        if (indexQuestion === length) setIndex(0);
        else if (indexQuestion === -1) setIndex(length - 1);

        if (index === indexQuestion) setQuestion({ title: title, text: text });
      });
    })();
  }, [indexQuestion, questionSelector, setIndex]);
};
