import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/user/userSelectors";
import personalDataStyles from "./personalData.module.scss";
import { API_URL_USERS } from "../../../constants/api";
import { useState } from "react";

export const PersonalData = () => {
  const authUser = useSelector(getUser);
  const [firstName, setFirstName] = useState(`${authUser.firstName}`);
  const [lastName, setLastName] = useState(`${authUser.lastName}`);
  const [password, setPassword] = useState(`${authUser.password}`);
  const [email, setEmail] = useState(`${authUser.email}`);
  const [phoneNumber, setPhoneNumber] = useState(`${authUser.phoneNumber}`);
  const [city, setCity] = useState(`${authUser.city}`);

  async function updateData() {
    await fetch(`${API_URL_USERS}/${authUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        city: city,
      }),
    });
  }

  function isDisabledButton() {
    if (
      firstName === authUser.firstName &&
      lastName === authUser.lastName &&
      (password === authUser.password || password.length < 6) &&
      email === authUser.email &&
      phoneNumber === authUser.phoneNumber &&
      city === authUser.city
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={personalDataStyles.wrapper}>
      <h1>Персональные данные</h1>
      <TextField
        id="firstName"
        label="Имя"
        placeholder={authUser.firstName}
        className={personalDataStyles.textField}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        id="lastName"
        label="Фамилия"
        placeholder={authUser.lastName}
        className={personalDataStyles.textField}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        disabled
        id="login"
        label="Login"
        defaultValue={authUser.login}
        className={personalDataStyles.textField}
      />
      <TextField
        id="password"
        label="Пароль"
        placeholder="Введите новый пароль"
        className={personalDataStyles.textField}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        helperText="Пароль должен содержать не менее 6 символов"
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        placeholder={authUser.email}
        className={personalDataStyles.textField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="phoneNumber"
        label="Номер телефона"
        type="number"
        placeholder={authUser.phoneNumber}
        className={personalDataStyles.textField}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        id="city"
        label="Город"
        placeholder={authUser.city}
        className={personalDataStyles.textField}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        variant="contained"
        disabled={isDisabledButton()}
        onClick={() => updateData()}
        sx={{
          color: "rgb(234, 234, 234)",
          backgroundColor: "#283347",
          "&:hover": {
            backgroundColor: "#586c91",
          },
        }}
      >
        Сохранить изменения
      </Button>
    </div>
  );
};
