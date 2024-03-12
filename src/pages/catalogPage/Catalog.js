import { SearchAppBar } from "../../components/appBar/AppBar";
import { FooterNavBar } from "../../components/footerNavBar/FooterNavBar";

import catalogStyles from "./catalog.module.scss";
import {
  getAllProducts,
  getCategoryFilter,
  getFilteredProducts,
} from "../../redux/products/productsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../components/productCard/productCard";
import { Filters } from "./filters/filters";
import { ToastElement } from "../../components/toast/toast";
import { useState } from "react";
import { Box, Chip, IconButton, Menu } from "@mui/material";
import { SearchInput } from "./searchInput/searchInput";
import { Tune } from "@mui/icons-material";
import {
  setCategoryFilter,
  setFilteredProducts,
} from "../../redux/products/productsActions";

export const Catalog = () => {
  const [minPriceFromSlider, setMinPriceFromSlider] = useState(100000);
  const [maxPriceFromSlider, setMaxPriceFromSlider] = useState(0);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const filteredProducts = useSelector(getFilteredProducts);
  const categoryFilter = useSelector(getCategoryFilter);
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDeleteChip = () => {
    dispatch(setCategoryFilter("all"));
    dispatch(setFilteredProducts(products));
  };

  function setChip() {
    if (categoryFilter === "all") {
      return (
        <Chip label="Все категории" className={catalogStyles.chipCategory} />
      );
    } else if (categoryFilter === "perfume") {
      return (
        <Chip
          label="Парфюм"
          className={catalogStyles.chipCategory}
          onDelete={handleDeleteChip}
        />
      );
    } else if (categoryFilter === "hair") {
      return (
        <Chip
          label="Волосы"
          className={catalogStyles.chipCategory}
          onDelete={handleDeleteChip}
        />
      );
    } else if (categoryFilter === "cosmetics") {
      return (
        <Chip
          label="Косметика"
          className={catalogStyles.chipCategory}
          onDelete={handleDeleteChip}
        />
      );
    } else if (categoryFilter === "care") {
      return (
        <Chip
          label="Уход"
          className={catalogStyles.chipCategory}
          onDelete={handleDeleteChip}
        />
      );
    }
  }

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      <div className={catalogStyles.catalogWrapper}>
        <div className={catalogStyles.filterAndProducts}>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              position: "absolute",
              top: {
                xs: "147px",
                sm: "147px",
              },
              left: "5px",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Tune fontSize="large" />
            </IconButton>
          </Box>
          <Menu
            id="filters-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Filters
              setMinPriceFromSlider={setMinPriceFromSlider}
              setMaxPriceFromSlider={setMaxPriceFromSlider}
            />
          </Menu>

          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Filters
              setMinPriceFromSlider={setMinPriceFromSlider}
              setMaxPriceFromSlider={setMaxPriceFromSlider}
            />
          </Box>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            className={catalogStyles.productsAndSearch}
          >
            <h1>Каталог</h1>
            <div className={catalogStyles.searchDiv}>
              <SearchInput />
              <div className={catalogStyles.chip}>{setChip()}</div>
            </div>

            <hr className={catalogStyles.line} />

            <div className={catalogStyles.products}>
              {filteredProducts.length === 0 ? (
                <div style={{ margin: "15px" }}>Нет подходящих товаров</div>
              ) : (
                filteredProducts.map((product) => {
                  return <ProductCard product={product} key={product.id} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterNavBar />
      <ToastElement />
    </div>
  );
};
