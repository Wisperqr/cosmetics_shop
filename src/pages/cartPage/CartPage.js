import { SearchAppBar } from "../../components/appBar/AppBar";
import { EmptyCart } from "./emptyCart/emptyCart";
import { ProductsInCart } from "./productsInCart/productsInCart";
import cartStyles from "./cartPage.module.scss";
import { useSelector } from "react-redux";
import { getUserCart } from "../../redux/user/userSelectors";
import { ToastElement } from "../../components/toast/toast";
import { FooterNavBar } from "../../components/footerNavBar/FooterNavBar";

export const CartPage = () => {
  const cart = useSelector(getUserCart);

  let finalSum = 0;

  cart.forEach((product) => {
    finalSum += +product.newPrice;
  });

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      <div className={cartStyles.cartWrapper}>
        <h1 className={cartStyles.title}>Корзина</h1>
        <div className={cartStyles.cartContent}>
          {cart.length > 0 ? (
            <ProductsInCart finalSum={finalSum} />
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
      <FooterNavBar />
      <ToastElement />
    </div>
  );
};
