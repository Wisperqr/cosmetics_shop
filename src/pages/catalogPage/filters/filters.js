import { useState } from "react";
import { SliderPrice } from "../sliderPrice/sliderPrice";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getCategoryFilter,
  getFilteredProducts,
  getIsCheckedDiscountsFilter,
  getPriceFilter,
} from "../../../redux/products/productsSelectors";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FilterCategories } from "./categories/filterCategories";
import filtersStyle from "./filters.module.scss";
import {
  setCheckedDiscountsFilter,
  setFilteredProducts,
} from "../../../redux/products/productsActions";

export const Filters = ({ setMinPriceFromSlider, setMaxPriceFromSlider }) => {
  const [minPrice, setMinPrice] = useState(100000);
  const [maxPrice, setMaxPrice] = useState(0);
  const products = useSelector(getAllProducts);
  const filteredProducts = useSelector(getFilteredProducts);
  const dispatch = useDispatch();
  const checked = useSelector(getIsCheckedDiscountsFilter);
  const priceFilter = useSelector(getPriceFilter);
  const filterCategory = useSelector(getCategoryFilter);

  const handleChange = (event) => {
    dispatch(setCheckedDiscountsFilter());
  };

  const onClickHandler = () => {
    dispatch(setFilteredProducts(products));

    if (!checked && priceFilter.length === 0 && filterCategory !== "all") {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.category === filterCategory &&
              prod.oldPrice &&
              prod.newPrice
            ) {
              return prod;
            } else {
              return null;
            }
          })
        )
      );
    } else if (
      checked &&
      priceFilter.length === 0 &&
      filterCategory === "all"
    ) {
      dispatch(setFilteredProducts(products));
    } else if (!checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (
              prod.oldPrice &&
              prod.newPrice &&
              prod.category === filterCategory
            ) {
              return prod;
            } else if (
              prod.oldPrice &&
              prod.newPrice &&
              filterCategory === "all"
            ) {
              return prod;
            } else {
              return null;
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
              prod.category === filterCategory
            ) {
              return prod;
            } else if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              filterCategory === "all"
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
              prod.category === filterCategory
            ) {
              return prod;
            } else if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              filterCategory === "all"
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
              prod.category === filterCategory
            ) {
              return prod;
            } else if (
              prod.oldPrice &&
              prod.newPrice &&
              filterCategory === "all"
            ) {
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
              prod.category === filterCategory
            ) {
              return prod;
            } else if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              prod.oldPrice &&
              prod.newPrice &&
              filterCategory === "all"
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
              prod.category === filterCategory
            ) {
              return prod;
            } else if (
              prod.newPrice >= priceFilter[0] &&
              prod.newPrice <= priceFilter[1] &&
              filterCategory === "all"
            ) {
              return prod;
            }
          })
        )
      );
    } else {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.category === filterCategory) {
              return prod;
            }
          })
        )
      );
    }
  };

  products.map((product) => {
    if (+product.newPrice < minPrice) {
      setMinPrice(product.newPrice);
    }
    if (+product.newPrice > maxPrice) {
      setMaxPrice(product.newPrice);
    }
  });

  return (
    <div className={filtersStyle.filtersWrapper}>
      <h2>Фильтры</h2>
      <hr />
      <FilterCategories />
      <hr />
      <h3>По цене</h3>
      <SliderPrice
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPriceFromSlider={setMinPriceFromSlider}
        setMaxPriceFromSlider={setMaxPriceFromSlider}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{`От ${minPrice}`}</p>
        <p>{`До ${maxPrice}`}</p>
      </div>
      <hr />
      <FormControlLabel
        label="Показывать только товары со скидкой"
        labelPlacement="start"
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            onClick={() => onClickHandler()}
            sx={{
              color: "var(--deep-blue)",
              "&.Mui-checked": {
                color: "var(--dark-deep-blue)",
              },
            }}
          />
        }
        sx={{ margin: 0, maxWidth: "300px" }}
      />
    </div>
  );
};
