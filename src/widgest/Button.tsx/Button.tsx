import { IButton } from "../../interfaces/IText";
import "./button.scss";
import "../../animations/animation.scss";

const Button = ({ children, onClick }: IButton): JSX.Element => {
  return (
    <button onClick={onClick} type="button" className="button_task --anim-border">
      {children}
    </button>
  );
};

export default Button;
