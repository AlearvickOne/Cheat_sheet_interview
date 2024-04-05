import { ISelected } from "../../interfaces/ISelected";
import { useCallback } from "react";
import { typeTargetEventString } from "@/types/types";
import "./header.scss";

const Header = ({ selectName, setSelectName }: ISelected): JSX.Element => {
  const selectedChange = useCallback((event: typeTargetEventString) => setSelectName(event.target.value), [setSelectName]);

  return (
    <header>
      <select name="quantity_pages" id="quantity_pages" value={selectName} onChange={selectedChange}>
        <option value="html">html</option>
        <option value="css">css</option>
        <option value="js">js</option>
        <option value="react">react</option>
      </select>
    </header>
  );
};

export default Header;
