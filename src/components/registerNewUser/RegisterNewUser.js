import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL_USERS } from "../../constants/api";
import { getAllUsers } from "../../redux/user/userSelectors";
import { useDispatch, useSelector } from "react-redux";
import { login as loginRedux } from "../../redux/user/userActions";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const defaultTheme = createTheme();

export const RegisterNewUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);
  const navigate = useNavigate();

  async function register(event) {
    event.preventDefault();
    event.stopPropagation();

    const checkLogin = users.some(
      (user) => user.login.toLowerCase() === login.toLowerCase()
    );

    if (!checkLogin) {
      await fetch(API_URL_USERS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          login: login,
          password: password,
          email: "",
          phoneNumber: "",
          city: "",
          cart: [],
          orderHistory: [],
          favoriteProducts: [],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(loginRedux(data));
          navigate("/accountoffice");
        });
    }
  }

  function isDisabledButton() {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      password.length === 0 ||
      repeatPassword.length === 0
    ) {
      return true;
    } else if (password.length < 6 || repeatPassword.length < 6) {
      return true;
    } else if (password !== repeatPassword) {
      return true;
    } else if (isLoginExist()) {
      return true;
    } else {
      return false;
    }
  }

  function isLoginExist() {
    return users.some(
      (user) => user.login.toLowerCase() === login.toLowerCase()
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#586c91" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="Имя"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Фамилия"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Логин"
              name="login"
              autoComplete="login"
              autoFocus
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              error={isLoginExist()}
              helperText={
                users.some(
                  (user) => user.login.toLowerCase() === login.toLowerCase()
                )
                  ? "Такой логин уже существует"
                  : null
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText="Пароль должен содержать не менее 6 символов"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeatPassword"
              label="Повторите пароль"
              type="password"
              id="repeatPassword"
              autoComplete="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              helperText={
                repeatPassword.length >= password.length &&
                password !== repeatPassword
                  ? "Неверный пароль"
                  : null
              }
              error={
                repeatPassword.length >= password.length &&
                password !== repeatPassword
                  ? true
                  : false
              }
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: "rgb(234, 234, 234)",
                backgroundColor: "#283347",
                "&:hover": {
                  backgroundColor: "#586c91",
                },
              }}
              onClick={register}
              disabled={isDisabledButton()}
            >
              Зарегистрироваться
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/login" variant="body2">
                  {"У вас уже есть аккаунт? Войти"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
