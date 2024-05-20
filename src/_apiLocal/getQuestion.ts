import { typeSetIndexQuestion, typeSetQuestion } from "@/types/types";
import ServerCommands from "./serverComands.class";

const getQuestion = async (
  idQuestionSelector: string,
  indexQuestion: number,
  setQuestion: typeSetQuestion,
  setIndex: typeSetIndexQuestion
) => {
  const questions = await ServerCommands.getQuestionsServer();

  let questionSelector = questions.html!;

  switch (idQuestionSelector) {
    case "html":
      questionSelector = questions.html!;
      break;
    case "css":
      questionSelector = questions.css!;
      break;
    case "js":
      questionSelector = questions.js!;
      break;
    case "ts":
      questionSelector = questions.ts!;
      break;
    case "react":
      questionSelector = questions.react!;
      break;
    case "restApiHttp":
      questionSelector = questions.restApiHttp!;
      break;
    case "cors":
      questionSelector = questions.cors!;
      break;
  }

  return questionSelector!.map(({ title, text }, index) => {
    const length = questionSelector!.length;

    if (indexQuestion === length) setIndex(0);
    else if (indexQuestion === -1) setIndex(length - 1);

    if (index === indexQuestion) setQuestion({ title: title, text: text });
  });
};

export default getQuestion;
