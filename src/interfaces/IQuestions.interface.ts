import {
  typeIndexQuestion,
  typeNameQuestion,
  typeTextQuestion,
  typeSetIndexQuestion,
  typeArrayJson,
} from "@/types/types";

interface IQuestionsUnpack {
  title: typeNameQuestion;
  text: typeTextQuestion;
  index?: typeIndexQuestion;
  setIndex?: typeSetIndexQuestion;
}

// ----------------------------------------------------------------

interface IQuestionsJson {
  html: typeArrayJson;
  css: typeArrayJson;
  js: typeArrayJson;
  ts: typeArrayJson;
  react: typeArrayJson;
  restApiHttp: typeArrayJson;
  cors: typeArrayJson;
}

export type { IQuestionsUnpack, IQuestionsJson };
