import s from "./style.module.css";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";

export const Signin = () => {
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br />
        to access your team notes
      </h2>
      <form action="" className={s.formGroup}>
        <input type="text" />
        <input type="text" />
        <ButtonPrimary className={s.button}>Sign in!</ButtonPrimary>
        <span>
          Don't have an account yet ? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );
  return <div>{form}</div>;
};
