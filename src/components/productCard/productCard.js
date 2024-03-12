import { Button, Checkbox } from "@mui/material";
import productCardStyles from "./productCard.module.scss";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesProducts, getUser } from "../../redux/user/userSelectors";
import { API_URL_USERS } from "../../constants/api";
import {
  addProductInCart,
  addProductsToFavorites,
  removeProductFromFavorites,
} from "../../redux/user/userActions";
import { getUserCart } from "../../redux/user/userSelectors";
import {
  notifyNeedToLogin,
  notifyAddedSuccesful,
  notifyAddedToFavorites,
  notifyRemovedFromFavorites,
  notifyNeedToLoginToAddFavorites,
} from "../notifies/notifies";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const authUser = useSelector(getUser);
  const cart = useSelector(getUserCart);
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesProducts);

  function navigateToProduct() {
    navigate(`product/${product.id}`);
  }

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

  function calcDiscount() {
    return Math.trunc(
      ((+product.oldPrice - +product.newPrice) /
        ((+product.oldPrice + +product.newPrice) / 2)) *
        100
    );
  }

  const handleClick = () => {
    if (authUser) {
      addToCart();
    } else {
      notifyNeedToLogin();
    }
  };

  async function addToFavorite(product) {
    await fetch(`${API_URL_USERS}/${authUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        favoriteProducts: [...favorites, product],
      }),
    })
      .then((res) => res.json())
      .then(({ favoriteProducts }) => {});
  }

  async function removeFromFavoritesAPI(product) {
    await fetch(`${API_URL_USERS}/${authUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        favoriteProducts: [
          ...favorites.filter((prod) => prod.id !== product.id),
        ],
      }),
    });
  }

  const handleClickFavorites = (product) => {
    if (authUser) {
      if (favorites.length === 0) {
        dispatch(addProductsToFavorites(product));
        addToFavorite(product);
        notifyAddedToFavorites();
      } else if (favorites.length > 0) {
        if (
          favorites.find((prod) => {
            return prod.id === product.id;
          })
        ) {
          dispatch(removeProductFromFavorites(product));
          removeFromFavoritesAPI(product);
          notifyRemovedFromFavorites();
        } else {
          dispatch(addProductsToFavorites(product));
          addToFavorite(product);
          notifyAddedToFavorites();
        }
      }
    } else {
      notifyNeedToLoginToAddFavorites();
    }
  };

  function searchFavorite() {
    return favorites.find((prod) => {
      return prod.id === product.id;
    });
  }

  return (
    <>
      <div className={productCardStyles.productCardWrapper}>
        <div className={productCardStyles.imageDiv}>
          {product.oldPrice ? (
            <div className={productCardStyles.discount}>-{calcDiscount()}%</div>
          ) : null}
          <Checkbox
            icon={<FavoriteBorder className={productCardStyles.favorites} />}
            checked={searchFavorite() ? true : false}
            checkedIcon={<Favorite className={productCardStyles.favorites} />}
            sx={{
              position: "absolute",
              right: "5px",
              top: "5px",
              color: "#586c91",
              "&.Mui-checked": {
                color: "#586c91",
              },
            }}
            onClick={() => handleClickFavorites(product)}
            className={productCardStyles.favoritesCheckbox}
          />
          <img
            src={product.image}
            alt=""
            onClick={() => {
              navigateToProduct();
            }}
          ></img>
        </div>
        <div
          className={productCardStyles.title}
          onClick={() => {
            navigateToProduct();
          }}
        >
          {product.name}
        </div>
        <div
          className={productCardStyles.priceDiv}
          onClick={() => {
            navigateToProduct();
          }}
        >
          <div
            className={productCardStyles.price}
            style={{ fontWeight: "bold" }}
          >{`${product.newPrice} руб.`}</div>
          <div
            className={productCardStyles.price}
            style={{ textDecoration: "line-through" }}
          >
            {product.oldPrice ? `${product.oldPrice} руб.` : null}
          </div>
        </div>

        <Button
          onClick={() => handleClick()}
          className={productCardStyles.btn}
          sx={{
            color: "rgb(234, 234, 234)",
            backgroundColor: "#283347",
            "&:hover": {
              backgroundColor: "#586c91",
            },
          }}
        >
          В корзину
        </Button>
      </div>
    </>
  );
};
