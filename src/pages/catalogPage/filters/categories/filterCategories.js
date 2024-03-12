import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import all from "./img/all.svg";
import perfume from "./img/perfume.svg";
import hair from "./img/hair.svg";
import cosmetics from "./img/cosmetics.svg";
import care from "./img/care.svg";
import filterCategoriesStyle from "./filterCategories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryFilter,
  setFilteredProducts,
} from "../../../../redux/products/productsActions";
import {
  getAllProducts,
  getFilteredProducts,
  getIsCheckedDiscountsFilter,
  getPriceFilter,
} from "../../../../redux/products/productsSelectors";

export const FilterCategories = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(getFilteredProducts);
  const products = useSelector(getAllProducts);
  const checked = useSelector(getIsCheckedDiscountsFilter);
  const priceFilter = useSelector(getPriceFilter);

  function handleClickAllCategories() {
    dispatch(setCategoryFilter("all"));
    if (!checked && priceFilter.length === 0) {
      dispatch(setFilteredProducts(products));
    } else if (checked && priceFilter.length === 0) {
      dispatch(
        setFilteredProducts(
          products.filter((prod) => {
            if (prod.newPrice && prod.oldPrice) {
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
              prod.newPrice <= priceFilter[1]
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
              prod.oldPrice &&
              prod.newPrice
            ) {
              return prod;
            }
          })
        )
      );
    }
  }
  function handleClickPerfume() {
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
    } else if (!checked && priceFilter.length > 0) {
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
    } else if (checked && priceFilter.length > 0) {
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
  }

  function handleClickHair() {
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
    } else if (!checked && priceFilter.length > 0) {
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
    } else if (checked && priceFilter.length > 0) {
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
  }

  function handleClickCosmetics() {
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
    } else if (!checked && priceFilter.length > 0) {
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
    } else if (checked && priceFilter.length > 0) {
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
  }

  function handleClickCare() {
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
    } else if (!checked && priceFilter.length > 0) {
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
    } else if (checked && priceFilter.length > 0) {
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
  }

  return (
    <List
      sx={{
        maxWidth: {
          xs: "250px",
          sm: "360px",
          md: "360px",
        },
        margin: "10px 0",
      }}
    >
      <ListItem
        disablePadding
        key={"all"}
        onClick={() => handleClickAllCategories()}
      >
        <ListItemButton>
          <img src={all} alt="" className={filterCategoriesStyle.imageIcon} />
          <ListItemText
            primary="Все категории"
            className={filterCategoriesStyle.text}
          />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        key={"perfume"}
        onClick={() => handleClickPerfume()}
      >
        <ListItemButton>
          <img
            src={perfume}
            alt=""
            className={filterCategoriesStyle.imageIcon}
          />
          <ListItemText
            primary="Парфюм"
            className={filterCategoriesStyle.text}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding key={"hair"} onClick={() => handleClickHair()}>
        <ListItemButton>
          <img src={hair} alt="" className={filterCategoriesStyle.imageIcon} />
          <ListItemText
            primary="Волосы"
            className={filterCategoriesStyle.text}
          />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        key={"cosmetics"}
        onClick={() => handleClickCosmetics()}
      >
        <ListItemButton>
          <img
            src={cosmetics}
            alt=""
            className={filterCategoriesStyle.imageIcon}
          />
          <ListItemText
            primary="Декоративная косметика"
            className={filterCategoriesStyle.text}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding key={"care"} onClick={() => handleClickCare()}>
        <ListItemButton>
          <img src={care} alt="" className={filterCategoriesStyle.imageIcon} />
          <ListItemText primary="Уход" className={filterCategoriesStyle.text} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
