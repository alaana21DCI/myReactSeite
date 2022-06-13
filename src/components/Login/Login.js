import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../store/app-context";
import "./Login.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

import Input from "../Input/Input";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 8
    );
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const ctx = useContext(AppContext);

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />

        <div className="actions">
          <Button type="submit" disabled={!formIsValid} className="btn">
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
