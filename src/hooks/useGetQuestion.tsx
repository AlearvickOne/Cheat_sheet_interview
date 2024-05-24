/* eslint-disable react-hooks/exhaustive-deps */
import { IQuestionsJson } from "@/interfaces/IQuestions.interface";

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
  setElementsLength: React.Dispatch<React.SetStateAction<typeElementsLength>>,
  data: IQuestionsJson | undefined
) => {
  const questionSelector = useMemo(() => {
    if (!data) return;

    switch (idQuestionSelector) {
      case "html":
        setIndex(0);
        return data.html;
      case "css":
        setIndex(0);
        return data.css;
      case "js":
        setIndex(0);
        return data.js;
      case "ts":
        setIndex(0);
        return data.ts;
      case "react":
        setIndex(0);
        return data.react;
      case "restApiHttp":
        setIndex(0);
        return data.restApiHttp;
      case "cors":
        setIndex(0);
        return data.cors;
    }
  }, [idQuestionSelector, data]);

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
