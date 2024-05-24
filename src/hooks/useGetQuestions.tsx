import { useEffect, useState } from "react";
import ServerCommands from "../_apiLocal/serverComands.class";
import { IQuestionsJson } from "@/interfaces/IQuestions.interface";

export const useGetQuestions = () => {
  const [questions, setQuestions] = useState<IQuestionsJson>();

  useEffect(() => {
    (async () => {
      await ServerCommands.getQuestionsServer().then((el) => {
        setQuestions(el);
      });
    })();
  }, []);

  return questions;
};
