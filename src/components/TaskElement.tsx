import "./taskElement.scss";
import "../animations/animation.scss";
import Button from "../widgest/Button.tsx/Button";
import { IQuestions } from "../interfaces/IQuestions";

const TaskElement = (props: IQuestions): JSX.Element => {
  const { title, text, index, setIndex } = props;

  const plusIndex = () => setIndex!(index! + 1);
  const minusIndex = () => setIndex!(index! - 1);

  return (
    <div className="task_element --anim-border">
      <div className="task_element-title">
        <h3>{title}</h3>
      </div>
      <div className="task_element-text">
        <p>{text}</p>
      </div>
      <form className="task_buttons">
        <Button onClick={minusIndex}>Назад</Button>
        <Button onClick={plusIndex}>Далее</Button>
      </form>
    </div>
  );
};

export default TaskElement;
