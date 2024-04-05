import { typeSetIndexQuestion, typeSetQuestion } from "@/types/types";
import getElementsInJson from "../_apiLocal/serverComands";

const getQuestion = async (idQuestionSelector: string, indexQuestion: number, setQuestion: typeSetQuestion, setIndex: typeSetIndexQuestion) => {
  const questions = await getElementsInJson();
  const questionsHtml = questions.html!;
  const questionsCss = questions.css!;
  const questionsJS = questions.js!;
  const questionsReact = questions.react!;

  let questionSelector = questionsHtml;

  switch (idQuestionSelector) {
    case "html":
      questionSelector = questionsHtml;
      break;
    case "css":
      questionSelector = questionsCss;
      break;
    case "js":
      questionSelector = questionsJS;
      break;
    case "react":
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

export default getQuestion;
