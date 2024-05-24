import { IQuestionsUnpack } from "@/interfaces/IQuestions.interface";
import { SetStateAction } from "react";

/* React.Dispatch */
export type typeSetSelectName = React.Dispatch<React.SetStateAction<string>>;
export type typeSetQuestion = React.Dispatch<
  React.SetStateAction<IQuestionsUnpack>
>;
export type typeSetIndexQuestion = React.Dispatch<React.SetStateAction<number>>;

/* IQuestions */

export type typeNameQuestion = string;
export type typeTextQuestion = string;
export type typeIndexQuestion = number;

export type typeArrayJson = [
  {
    title: string;
    text: string;
  }
];

export type typeElementsLength = {
  quantityElements: number;
  currentElement: number;
};

/* Event */
export type typeTargetEventString = {
  target: { value: SetStateAction<string> };
};
