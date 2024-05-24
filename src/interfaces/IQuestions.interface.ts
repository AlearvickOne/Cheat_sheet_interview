import {
  typeIndexQuestion,
  typeNameQuestion,
  typeTextQuestion,
  typeSetIndexQuestion,
  typeArrayJson,
  typeElementsLength,
} from "@/types/types";

export interface IQuestionsUnpack {
  title: typeNameQuestion;
  text: typeTextQuestion;
  index?: typeIndexQuestion;
  setIndex?: typeSetIndexQuestion;
}

export interface IQuestionsUnpackElements extends IQuestionsUnpack {
  elementsLength: typeElementsLength;
}

// ----------------------------------------------------------------

export interface IQuestionsJson {
  html: typeArrayJson;
  css: typeArrayJson;
  js: typeArrayJson;
  ts: typeArrayJson;
  react: typeArrayJson;
  restApiHttp: typeArrayJson;
  cors: typeArrayJson;
}
