import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actSignUpApi } from "../_modules/actions";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";

export default function Signup() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    passWord: "",
    name: "",
    phoneNumber: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(actSignUpApi(state));
  };

  return (
    <Container>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Name Account</label>
          <input
            className="form-control"
            name="name"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            className="form-control"
            name="phoneNumber"
            type="number"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group text-center">
          <button type="submit">Sign up</button>
        </div>
        <Typography color="textSecondary" variant="body1">
          Have an account?
          <Link to="/signin" variant="h6" underline="hover">
            SignIn
          </Link>
        </Typography>
      </form>
    </Container>
  );
}
