import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserCart } from "../../../redux/user/userSelectors";
import productsInCartStyle from "./productsInCart.module.scss";
import { Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { deleteProductFromCart } from "../../../redux/user/userActions";
import { API_URL_USERS } from "../../../constants/api";
import { ConfirmForm } from "./confirmForm/confirmForm";
import { useState } from "react";
import { notifyDeletedSuccesful } from "../../../components/notifies/notifies";

export const ProductsInCart = ({ finalSum }) => {
  const cart = useSelector(getUserCart);
  const authUser = useSelector(getUser);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  async function updateCartAPI(product) {
    await fetch(`${API_URL_USERS}/${authUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart: [...cart.filter((prod) => prod.id !== product.id)],
      }),
    });

    notifyDeletedSuccesful();
  }

  const handleDelete = (product) => {
    dispatch(deleteProductFromCart(product));
    updateCartAPI(product);
  };

  return (
    <div className={productsInCartStyle.wrapper}>
      {cart.map((product) => {
        return (
          <div
            className={productsInCartStyle.product}
            key={`cartProduct${product.id}`}
          >
            <div className={productsInCartStyle.imgDiv}>
              <img src={product.image} alt="" />
            </div>
            <p>{product.name}</p>
            <h3>{`${product.newPrice} руб.`}</h3>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(product)}
              className={productsInCartStyle.deleteIcon}
            >
              <Delete sx={{ color: "#586c91" }} />
            </IconButton>
          </div>
        );
      })}
      <div className={productsInCartStyle.finalSum}>
        <Button
          variant="contained"
          onClick={() => handleClickOpen()}
          sx={{
            color: "var(--font-white)",
            backgroundColor: "var(--dark-deep-blue)",
            "&:hover": {
              backgroundColor: "var(--light-deep-blue)",
            },
          }}
        >
          Перейти к оформлению
        </Button>
        <ConfirmForm setOpen={setOpen} open={open} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Итого:</h2>
          <p>{`${finalSum} руб.`}</p>
        </div>
      </div>
    </div>
  );
};
