import { IQuestionsUnpack } from "@/interfaces/IQuestions.interface";
import { SetStateAction } from "react";

/* React.Dispatch */
type typeSetSelectName = React.Dispatch<React.SetStateAction<string>>;
type typeSetQuestion = React.Dispatch<React.SetStateAction<IQuestionsUnpack>>;
type typeSetIndexQuestion = React.Dispatch<React.SetStateAction<number>>;

/* IQuestions */

type typeNameQuestion = string;
type typeTextQuestion = string;
type typeIndexQuestion = number;

type typeArrayJson = [
  {
    title: string;
    text: string;
  }
];

/* Event */
type typeTargetEventString = { target: { value: SetStateAction<string> } };

/* EXPORT */

export type {
  typeSetSelectName,
  typeSetQuestion,
  typeSetIndexQuestion,
  typeNameQuestion,
  typeTextQuestion,
  typeIndexQuestion,
  typeArrayJson,
  typeTargetEventString,
};
