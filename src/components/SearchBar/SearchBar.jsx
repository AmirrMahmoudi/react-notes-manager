import s from "./style.module.css";
import { Search as SerachIcon } from "react-bootstrap-icons";
export const SearchBar = ({ onTextChange, placeholder }) => {
  return (
    <>
      <SerachIcon size={25} className={s.icon} />
      <input
        type="text"
        className={s.input}
        placeholder={placeholder}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </>
  );
};
