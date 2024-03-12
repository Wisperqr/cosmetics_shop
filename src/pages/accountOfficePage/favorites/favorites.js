import { useSelector } from "react-redux";
import { getFavoritesProducts } from "../../../redux/user/userSelectors";
import { ProductCard } from "../../../components/productCard/productCard";
import favoritesStyle from "./favorites.module.scss";

export const Favorites = () => {
  const favorites = useSelector(getFavoritesProducts);

  return (
    <div className={favoritesStyle.wrapper}>
      <h1>Избранные товары</h1>
      <div className={favoritesStyle.favoritesProducts}>
        {favorites.length === 0 ? (
          <div>У вас нет избранных товаров</div>
        ) : (
          favorites.map((product) => {
            return (
              <ProductCard product={product} key={`favorites${product.id}`} />
            );
          })
        )}
      </div>
    </div>
  );
};
