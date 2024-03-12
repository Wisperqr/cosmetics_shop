import { useParams } from "react-router-dom";
import { getAllProducts } from "../../redux/products/productsSelectors";
import { useDispatch, useSelector } from "react-redux";
import singleProductStyles from "./singleProductPage.module.scss";
import { Button } from "@mui/material";
import { SearchAppBar } from "../../components/appBar/AppBar";
import { FooterNavBar } from "../../components/footerNavBar/FooterNavBar";
import { ArticleOutlined } from "@mui/icons-material";
import { addProductInCart } from "../../redux/user/userActions";
import { API_URL_USERS } from "../../constants/api";
import { getUser, getUserCart } from "../../redux/user/userSelectors";
import {
  notifyAddedSuccesful,
  notifyNeedToLogin,
} from "../../components/notifies/notifies";
import { ToastElement } from "../../components/toast/toast";

export const SingleProductPage = () => {
  const params = useParams();
  const prodID = params.id;
  const dispatch = useDispatch();
  const authUser = useSelector(getUser);
  const cart = useSelector(getUserCart);

  const products = useSelector(getAllProducts);

  const product = products.find((prod) => prod.id === prodID);

  async function addToCart() {
    dispatch(addProductInCart(product));
    await fetch(`${API_URL_USERS}/${authUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart: [...cart, product],
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
    notifyAddedSuccesful();
  }

  const handleClick = () => {
    if (authUser) {
      addToCart();
    } else {
      notifyNeedToLogin();
    }
  };

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      <div className={singleProductStyles.wrapper}>
        <div className={singleProductStyles.imgDiv}>
          <img src={product.image} alt="" />
        </div>
        <div className={singleProductStyles.productInfo}>
          <h2>{product.name}</h2>
          <div className={singleProductStyles.priceDiv}>
            <div
              className={singleProductStyles.newPrice}
            >{`${product.newPrice} руб.`}</div>
            <div className={singleProductStyles.oldPrice}>
              {product.oldPrice ? `${product.oldPrice} руб.` : null}
            </div>
          </div>
          {product.description ? (
            <div>
              <div className={singleProductStyles.descriptionTitle}>
                <ArticleOutlined sx={{ marginRight: "10px" }} />
                <p>Описание</p>
              </div>
              <div className={singleProductStyles.description}>
                {product.description}
              </div>
            </div>
          ) : null}
          {product.compound ? (
            <div>
              <div className={singleProductStyles.compoundTitle}>
                <ArticleOutlined sx={{ marginRight: "10px" }} />
                <p>Состав</p>
              </div>
              <div className={singleProductStyles.compound}>
                {product.compound}
              </div>
            </div>
          ) : null}
          <Button variant="contained" onClick={() => handleClick()}>
            Добавить в корзину
          </Button>
        </div>
      </div>
      <FooterNavBar />
      <ToastElement />
    </div>
  );
};
