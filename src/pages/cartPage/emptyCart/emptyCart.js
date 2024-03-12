import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import emptyCartStyles from "./empryCart.module.scss";

export const EmptyCart = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/catalog");
  }

  return (
    <>
      <div className={emptyCartStyles.wrapper}>
        <h2>Ваша корзина пуста</h2>
        <Button
          onClick={() => {
            handleClick();
          }}
          className={emptyCartStyles.btn}
          sx={{
            color: "var(--font-white)",
            backgroundColor: "var(--dark-deep-blue)",
            "&:hover": {
              backgroundColor: "var(--deep-blue)",
            },
          }}
        >
          Перейти к покупкам
        </Button>
      </div>
    </>
  );
};
