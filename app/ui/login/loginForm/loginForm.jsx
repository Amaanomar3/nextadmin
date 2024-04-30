"use client";
import { useFormState } from "react-dom";
import { authenticate } from "../../../lib/actions";
import styles from "./loginForm.module.css";

const LoginForm = ({ login, error }) => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
    </div>
  );
};

export default LoginForm;
