import s from "./style.module.css";
export const ButtonPrimary = ({ type, children, onClick, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
};
