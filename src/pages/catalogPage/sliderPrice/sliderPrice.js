import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getCategoryFilter,
  getFilteredProducts,
  getIsCheckedDiscountsFilter,
} from "../../../redux/products/productsSelectors";
import {
  setFilteredProducts as filteredProductsRedux,
  setPriceFilter,
} from "../../../redux/products/productsActions";

export const SliderPrice = ({
  minPrice,
  maxPrice,
  setMinPriceFromSlider,
  setMaxPriceFromSlider,
}) => {
  const [value, setValue] = useState([+minPrice, +maxPrice]);
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const checked = useSelector(getIsCheckedDiscountsFilter);
  const filteredProducts = useSelector(getFilteredProducts);
  const filterCategory = useSelector(getCategoryFilter);

  const handleChange = (event, newValue) => {
    dispatch(setPriceFilter(newValue));
    if (!checked) {
      dispatch(
        filteredProductsRedux(
          products.filter((prod) => {
            if (
              prod.newPrice >= newValue[0] &&
              prod.newPrice <= newValue[1] &&
              !checked &&
              prod.category === filterCategory
            ) {
              return prod;
            } else if (
              prod.newPrice >= newValue[0] &&
              prod.newPrice <= newValue[1] &&
              checked &&
              prod.category === filterCategory
            ) {
              if (
                prod.oldPrice &&
                prod.newPrice &&
                prod.category === filterCategory
              ) {
                return prod;
              }
            } else if (
              prod.newPrice >= newValue[0] &&
              prod.newPrice <= newValue[1] &&
              !checked &&
              filterCategory === "all"
            ) {
              return prod;
            } else if (
              prod.newPrice >= newValue[0] &&
              prod.newPrice <= newValue[1] &&
              checked &&
              filterCategory === "all"
            ) {
              if (prod.oldPrice && prod.newPrice && filterCategory === "all") {
                return prod;
              }
            } else {
              return null;
            }
          })
        )
      );
    } else if (checked) {
      dispatch(
        filteredProductsRedux(
          filteredProducts.filter((prod) => {
            if (
              prod.newPrice >= newValue[0] &&
              prod.newPrice <= newValue[1] &&
              !checked &&
              prod.category === filterCategory
            ) {
              return prod;
            } else if (
              prod.newPrice >= newValue[0] &&
              prod.newPrice <= newValue[1] &&
              checked &&
              prod.category === filterCategory
            ) {
              if (
                prod.oldPrice &&
                prod.newPrice &&
                prod.category === filterCategory
              ) {
                return prod;
              }
            } else {
              return null;
            }
          })
        )
      );
    }
    setValue(newValue);
    setMinPriceFromSlider(value[0]);
    setMaxPriceFromSlider(value[1]);
  };

  return (
    <Box
      sx={{
        width: {
          sx: "200px",
          sm: "300px",
          md: "300px",
        },
        margin: "15px 0",
      }}
    >
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={+minPrice}
        max={+maxPrice}
        step={10}
        sx={{ color: "var(--dark-deep-blue)" }}
      />
    </Box>
  );
};
