import { useState } from "react";
import classes from "../Style/Components/reg.module.scss";
import UIButton from "./UIButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../Store/ActionCreators/UserActionCreators";
import { data } from "./data";

const Reg = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [reg, setReg] = useState(true);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handler = async () => {
    await dispatch(login({ number, password }));
  };
  return (
    <div className={classes["Card"]}>
      {reg ? <h1>Registration</h1> : <h1>Login</h1>}
      <p>Phone number:</p>
      <input
        value={number}
        onChange={(e) => setNumber(e.currentTarget.value)}
        placeholder="+7 (___)"
        type="number"
      />
      <p>Password:</p>
      <input
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        placeholder="**********"
        type="text"
      />
      <UIButton onClick={() => handler()} type="radio">
        Login
      </UIButton>
      {reg ? (
        <p>
          Have an account?{" "}
          <UIButton type="range" onClick={() => setReg(!reg)}>
            Log in
          </UIButton>
        </p>
      ) : (
        <p>
          Don`t have an account?{" "}
          <UIButton type="range" onClick={() => setReg(!reg)}>
            Sign in
          </UIButton>
        </p>
      )}
      <UIButton type="active" onClick={() => navigate("/")}>
        Back
      </UIButton>
    </div>
  );
};
export default Reg;
