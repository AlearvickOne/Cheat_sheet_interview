interface IQuestions {
  title: nameQuestion;
  text: textQuestion;
  sortQuestion?: sortQuestion;
  index?: index;
  setIndex?: setIndex;
}

type nameQuestion = string;
type textQuestion = string;
type sortQuestion = string;
type setIndex = React.Dispatch<React.SetStateAction<number>>;
type index = number;

export type { IQuestions };
