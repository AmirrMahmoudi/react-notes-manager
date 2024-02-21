import s from "./style.module.css";
export const Input = ({ type, onTextChange, placeholder }) => {
  return (
    <>
    <input
      type={type || "text"}
      className={s.input}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder={placeholder}
      />
      </>
  );
};
