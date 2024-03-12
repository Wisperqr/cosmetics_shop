import { Button, Checkbox } from "@mui/material";
import previewProductStyles from "./previewProductCard.module.scss";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const PreviewProductCard = ({
  productName,
  productImage,
  productOldPrice,
  productNewPrice,
}) => {
  const noImage = "https://серебро.рф/img/placeholder.png";

  function calcDiscount() {
    return Math.trunc(
      ((+productOldPrice - +productNewPrice) /
        ((+productOldPrice + +productNewPrice) / 2)) *
        100
    );
  }

  return (
    <div className={previewProductStyles.wrapper}>
      <h2>Предпросмотр карточки товара</h2>
      <div className={previewProductStyles.productCardWrapper}>
        <div className={previewProductStyles.imageDiv}>
          {productOldPrice ? (
            <div className={previewProductStyles.discount}>
              -{calcDiscount()}%
            </div>
          ) : null}
          <Checkbox
            icon={<FavoriteBorder className={previewProductStyles.favorites} />}
            checkedIcon={
              <Favorite className={previewProductStyles.favorites} />
            }
            sx={{
              position: "absolute",
              right: "5px",
              top: "5px",
              color: "#586c91",
              "&.Mui-checked": {
                color: "#586c91",
              },
            }}
            className={previewProductStyles.favoritesCheckbox}
          />
          <img src={productImage ? productImage : noImage} alt=""></img>
        </div>
        <div className={previewProductStyles.title}>
          {productName ? productName : `Название товара`}
        </div>
        <div className={previewProductStyles.priceDiv}>
          <div
            className={previewProductStyles.price}
            style={{ fontWeight: "bold" }}
          >
            {productNewPrice ? `${productNewPrice} руб.` : `Цена товара`}
          </div>
          <div
            className={previewProductStyles.price}
            style={{ textDecoration: "line-through" }}
          >
            {productOldPrice ? `${productOldPrice} руб.` : null}
          </div>
        </div>

        <Button
          className={previewProductStyles.btn}
          sx={{
            color: "var(--font-white)",
            backgroundColor: "var(--dark-deep-blue)",
            "&:hover": {
              backgroundColor: "var(--light-deep-blue)",
            },
          }}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
};
