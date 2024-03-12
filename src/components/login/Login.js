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
import { useDispatch } from "react-redux";
import {
  addProductInCart,
  getAllFavoritesFromAPI,
} from "../../redux/user/userActions";
import { useState, useEffect } from "react";
import { API_URL_USERS } from "../../constants/api";
import { login as loginRedux } from "../../redux/user/userActions";
import { notifyIncorrectLoginOrPassword } from "../notifies/notifies";

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

const defaultTheme = createTheme({
  palette: {
    deepBlue: {
      main: "#586c91",
    },
  },
});

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL_USERS)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  function checkAuthUser(event) {
    event.preventDefault();
    event.stopPropagation();
    const checkUser = users.find(
      (user) =>
        user.login.toLowerCase() === login.toLowerCase() &&
        user.password === password
    );

    if (checkUser) {
      dispatch(loginRedux(checkUser));
      navigate("/accountoffice");
      if (checkUser.favoriteProducts.length > 0) {
        dispatch(getAllFavoritesFromAPI(checkUser.favoriteProducts));
      }
      checkUser.cart.map((prod) => {
        return dispatch(addProductInCart(prod));
      });
    } else if (!checkUser) {
      notifyIncorrectLoginOrPassword();
    }
  }

  function isDisabledButton() {
    if (login.length === 0 || password.length === 0) {
      return true;
    } else {
      return false;
    }
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
          <Typography component="h1" variant="h5" sx={{ color: "#283347" }}>
            Вход
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
            />
            <Button
              type="button"
              onClick={checkAuthUser}
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
              disabled={isDisabledButton()}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/registration" variant="body2">
                  {"У вас нет аккаунта? Зарегистрироваться"}
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
