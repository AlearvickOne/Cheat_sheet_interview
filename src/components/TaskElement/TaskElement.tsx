import { IQuestionsUnpack } from "../../interfaces/IQuestions.interface";
import Button from "../../widgest/Button.tsx/Button";
import "./taskElement.scss";
import "../../animations/animation.scss";

const TaskElement = (props: IQuestionsUnpack): JSX.Element => {
  const { title, text, index, setIndex } = props;

  const plusIndex = () => setIndex!(index! + 1);
  const minusIndex = () => setIndex!(index! - 1);

  return (
    <div className="task_element --anim-border">
      <div className="task_element-question">
        <div className="task_element-title">
          <h3>{title}</h3>
        </div>
        <div className="task_element-text">
          <p>{text}</p>
        </div>
      </div>
      <form className="task_buttons">
        <Button onClick={minusIndex}>Назад</Button>
        <Button onClick={plusIndex}>Далее</Button>
      </form>
    </div>
  );
};

export default TaskElement;
