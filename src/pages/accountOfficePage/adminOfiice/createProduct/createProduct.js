import { Button, TextField } from "@mui/material";
import createProductStyles from "./createProduct.module.scss";
import { ChooseCategory } from "./chooseCategoryRadioButtons/chooseCategory";
import { useState } from "react";
import { PreviewProductCard } from "./previewProductCard/previewProductCard";
import { API_URL_PRODUCTS } from "../../../../constants/api";
import { useDispatch } from "react-redux";
import { addProductRedux } from "../../../../redux/products/productsActions";
import { notifyProductAddedSuccesful } from "../../../../components/notifies/notifies";

export const CreateProduct = () => {
  // https://img03.rl0.ru/afisha/e1200x1200i/daily.afisha.ru/uploads/images/d/7f/d7f79fd26c9b4eca8ac79f4a7b38b80a.jpg

  // https://flacon-magazine.com/uploads/original/post_image/image/76/43/cb/6241b4e989309015106243.png

  // https://ecomake.ru/upload/cssinliner_webp/iblock/888/kcao4bm6hro5n03qi9k9u4pgrv6qzcjj/41818714.webp

  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productOldPrice, setProductOldPrice] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCompound, setProductCompound] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  async function addProduct() {
    await fetch(API_URL_PRODUCTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: productName,
        image: productImage,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
        description: productDescription,
        compound: productCompound,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProductRedux(data));
        notifyProductAddedSuccesful();
      });
  }

  function isDisabledButton() {
    if (!productName && !productImage && !productNewPrice && !category) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={createProductStyles.wrapper}>
      <div className={createProductStyles.productData}>
        <h1>Создать карточку товара</h1>
        <TextField
          id="productName"
          label="Название товара"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className={createProductStyles.textField}
        />
        <TextField
          id="productImage"
          label="Ссылка на изображение товара"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
          className={createProductStyles.textField}
        />
        <TextField
          id="productOldPrice"
          label="Старая цена товара"
          value={productOldPrice}
          onChange={(e) => setProductOldPrice(e.target.value)}
          className={createProductStyles.textField}
        />
        <TextField
          id="productNewPrice"
          label="Новая цена товара"
          value={productNewPrice}
          onChange={(e) => setProductNewPrice(e.target.value)}
          className={createProductStyles.textField}
        />
        <TextField
          id="productDescription"
          label="Описание товара"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className={createProductStyles.textField}
        />
        <TextField
          id="productCompound"
          label="Состав товара"
          value={productCompound}
          onChange={(e) => setProductCompound(e.target.value)}
          className={createProductStyles.textField}
        />
        <ChooseCategory setCategory={setCategory} />
        <Button
          variant="contained"
          onClick={() => addProduct()}
          sx={{
            color: "var(--font-white)",
            backgroundColor: "var(--dark-deep-blue)",
            "&:hover": {
              backgroundColor: "var(--light-deep-blue)",
            },
          }}
          disabled={isDisabledButton()}
        >
          Добавить товар
        </Button>
      </div>
      <div>
        <PreviewProductCard
          productName={productName}
          productImage={productImage}
          productOldPrice={productOldPrice}
          productNewPrice={productNewPrice}
        />
      </div>
    </div>
  );
};
