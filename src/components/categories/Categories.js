import perfume from "./img/perfume.jpg";
import hair from "./img/hair.jpg";
import cosmetics from "./img/cosmetics.jpg";
import care from "./img/care.jpg";
import categoriesStyles from "./categories.module.scss";
import { East } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getFilteredProducts,
  getIsCheckedDiscountsFilter,
  getPriceFilter,
} from "../../redux/products/productsSelectors";
import {
  setCategoryFilter,
  setFilteredProducts,
} from "../../redux/products/productsActions";

export const Categories = () => {
  const navigate = useNavigate();
  const priceFilter = useSelector(getPriceFilter);
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const checked = useSelector(getIsCheckedDiscountsFilter);
  const filteredProducts = useSelector(getFilteredProducts);

  const onClickPerfume = () => {
    dispatch(setCategoryFilter("perfume"));
    if (!checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === "perfume") {
              return prod;
            }
          })
        )
      );
    } else if (checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.oldPrice && prod.newPrice && prod.category === "perfume") {
              return prod;
            }
          })
        )
      );
    } else if (checked && priceFilter.length > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.category === "perfume"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (!checked && priceFilter.length > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "perfume"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && checked && priceFilter === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.oldPrice && prod.newPrice && prod.category === "perfume") {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && !checked && priceFilter === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === "perfume") {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && checked && priceFilter > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "perfume"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && !checked && priceFilter > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.category === "perfume"
            ) {
              return prod;
            }
          })
        )
      );
    }
    navigate("/catalog");
  };
  const onClickHair = () => {
    dispatch(setCategoryFilter("hair"));
    if (!checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === "hair") {
              return prod;
            }
          })
        )
      );
    } else if (checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.oldPrice && prod.newPrice && prod.category === "hair") {
              return prod;
            }
          })
        )
      );
    } else if (checked && priceFilter.length > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.category === "hair"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (!checked && priceFilter.length > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "hair"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && checked && priceFilter === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.oldPrice && prod.newPrice && prod.category === "hair") {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && !checked && priceFilter === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === "hair") {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && checked && priceFilter > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "hair"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && !checked && priceFilter > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.category === "hair"
            ) {
              return prod;
            }
          })
        )
      );
    }
    navigate("/catalog");
  };
  const onClickCosmetics = () => {
    dispatch(setCategoryFilter("cosmetics"));
    if (!checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === "cosmetics") {
              return prod;
            }
          })
        )
      );
    } else if (checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "cosmetics"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (checked && priceFilter.length > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.category === "cosmetics"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (!checked && priceFilter.length > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "cosmetics"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && checked && priceFilter === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "cosmetics"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && !checked && priceFilter === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === "cosmetics") {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && checked && priceFilter > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "cosmetics"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && !checked && priceFilter > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.category === "cosmetics"
            ) {
              return prod;
            }
          })
        )
      );
    }
    navigate("/catalog");
  };
  const onClickCare = () => {
    dispatch(setCategoryFilter("care"));
    if (!checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === "care") {
              return prod;
            }
          })
        )
      );
    } else if (checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.oldPrice && prod.newPrice && prod.category === "care") {
              return prod;
            }
          })
        )
      );
    } else if (checked && priceFilter.length > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.category === "care"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (!checked && priceFilter.length > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "care"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && checked && priceFilter === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.oldPrice && prod.newPrice && prod.category === "care") {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && !checked && priceFilter === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === "care") {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && checked && priceFilter > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === "care"
            ) {
              return prod;
            }
          })
        )
      );
    } else if (filteredProducts.length === 0 && !checked && priceFilter > 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.category === "care"
            ) {
              return prod;
            }
          })
        )
      );
    }
    navigate("/catalog");
  };

  return (
    <div className={categoriesStyles.categoriesWrapper}>
      <div
        className={categoriesStyles.category}
        onClick={() => onClickPerfume()}
      >
        <img className={categoriesStyles.imgPhoto} src={perfume} alt="" />
        <p>Парфюм</p>
        <East className={categoriesStyles.icon} sx={{ color: "#283347" }} />
      </div>
      <div className={categoriesStyles.category} onClick={() => onClickHair()}>
        <img className={categoriesStyles.imgPhoto} src={hair} alt="" />
        <p>Волосы</p>
        <East className={categoriesStyles.icon} sx={{ color: "#283347" }} />
      </div>
      <div
        className={categoriesStyles.category}
        onClick={() => onClickCosmetics()}
      >
        <img className={categoriesStyles.imgPhoto} src={cosmetics} alt="" />
        <p>Косметика</p>
        <East className={categoriesStyles.icon} sx={{ color: "#283347" }} />
      </div>
      <div className={categoriesStyles.category} onClick={() => onClickCare()}>
        <img className={categoriesStyles.imgPhoto} src={care} alt="" />
        <p>Уход</p>
        <East className={categoriesStyles.icon} sx={{ color: "#283347" }} />
      </div>
    </div>
  );
};
