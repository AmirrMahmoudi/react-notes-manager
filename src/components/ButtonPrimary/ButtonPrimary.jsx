import s from "./style.module.css";
export const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-primary ${s.button}`}>
      {children}
    </button>
  );
};
