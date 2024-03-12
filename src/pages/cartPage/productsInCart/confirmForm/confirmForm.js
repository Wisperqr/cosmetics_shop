import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { API_URL_ORDERS, API_URL_USERS } from "../../../../constants/api";
import { getUser, getUserCart } from "../../../../redux/user/userSelectors";
import { clearCart } from "../../../../redux/user/userActions";
import { notifySubmitSuccesful } from "../../../../components/notifies/notifies";

export function ConfirmForm({ setOpen, open }) {
  const dispatch = useDispatch();
  const productsInCart = useSelector(getUserCart);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const authUser = useSelector(getUser);

  async function submitOrder(
    date,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    orderedProducts
  ) {
    await fetch(API_URL_ORDERS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        createdAt: `${date}, ${time}`,
        avatar: null,
        name: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        orderedProducts: [...orderedProducts],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(clearCart());
        notifySubmitSuccesful();
      });

    await fetch(`${API_URL_USERS}/${authUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderHistory: [...orderedProducts],
        cart: [],
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const firstName = formJson.firstName;
            const lastName = formJson.lastName;
            const email = formJson.email;
            const phoneNumber = formJson.phoneNumber;
            const address = formJson.address;
            handleClose();
            submitOrder(
              date,
              firstName,
              lastName,
              email,
              phoneNumber,
              address,
              productsInCart
            );
          },
        }}
      >
        <DialogTitle>Подтверждение заказа</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите необходимые данные и подтвердите заказ
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="firstName"
            name="firstName"
            label="Имя"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="lastName"
            name="lastName"
            label="Фамилия"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="phoneNumber"
            name="phoneNumber"
            label="Номер телефона"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="address"
            name="address"
            label="Адрес доставки"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button type="submit">Подтвердить</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
