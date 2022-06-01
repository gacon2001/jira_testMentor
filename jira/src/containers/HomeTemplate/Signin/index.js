import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { actSigninApi } from '../_modules/actions';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Signin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  })
  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSignin = (event) => {
    event.preventDefault();
    dispatch(actSigninApi(state, history));
  }

  return (
    <>
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSignin}>
            <Box sx={{ mb: 3 }}>
              <Typography color="textPrimary" variant="h3">
                Sign In
              </Typography>
            </Box>

            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
                name="email"
                onChange={handleOnChange}
                type="email"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                onChange={handleOnChange}
                type="password"
                variant="outlined"
              />

              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
              </Box>

              <Typography color="textSecondary" variant="body1">
                Don't have an account?
                <Link
                  to="/signup"
                  variant="h6"
                  underline="hover"
                >
                  Signup
                </Link>
              </Typography>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  )
}

