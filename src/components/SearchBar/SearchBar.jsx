import s from "./style.module.css";
import { Search as SerachIcon } from "react-bootstrap-icons";
import { Input } from "components/Input/Input";
export const SearchBar = ({ onTextChange, placeholder }) => {
  return (
    <>
      <SerachIcon size={25} className={s.icon} />
      <Input onTextChange={onTextChange} placeholder={placeholder} />
    </>
  );
};
