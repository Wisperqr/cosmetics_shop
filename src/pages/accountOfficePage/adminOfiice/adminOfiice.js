import { Box, IconButton, Menu } from "@mui/material";

import { ColoredAvatar } from "../../../components/avatar/Avatar";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import adminOfficeStyles from "./adminOffice.module.scss";
import { useEffect, useState } from "react";
import { PersonalData } from "../personalData/personalData";
import { Favorites } from "../favorites/favorites";
import { OrdersList } from "./ordersList/ordersList";
import { CreateProduct } from "./createProduct/createProduct";
import { API_URL_ORDERS } from "../../../constants/api";
import { useDispatch } from "react-redux";
import { setAllOrders } from "../../../redux/orders/ordersActions";
import { AdminOfficeMenu } from "./adminOfficeMenu/adminOfiiceMenu";
import { ToastElement } from "../../../components/toast/toast";

export const AdminOffice = () => {
  const [adminOfficeInfo, setAdminOfficeInfo] = useState("personalData");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(API_URL_ORDERS);
      const respOrders = await response.json();
      dispatch(setAllOrders(respOrders));
    }

    fetchOrders();
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function checkInfo() {
    if (adminOfficeInfo === "personalData") {
      return <PersonalData />;
    } else if (adminOfficeInfo === "favorites") {
      return <Favorites />;
    } else if (adminOfficeInfo === "orders") {
      return <OrdersList />;
    } else if (adminOfficeInfo === "createProduct") {
      return <CreateProduct />;
    }
  }

  return (
    <div className={adminOfficeStyles.wrapper}>
      <div className={adminOfficeStyles.menu}>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <ColoredAvatar />
        </Box>
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            top: {
              xs: "75px",
              sm: "75px",
            },
            left: "5px",
          }}
        >
          <ColoredAvatar />
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
            <FormatIndentIncreaseIcon fontSize="large" />
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
          <AdminOfficeMenu
            setAdminOfficeInfo={setAdminOfficeInfo}
            setAnchorElNav={setAnchorElNav}
          />
        </Menu>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <AdminOfficeMenu
            setAdminOfficeInfo={setAdminOfficeInfo}
            setAnchorElNav={setAnchorElNav}
          />
        </Box>
      </div>
      <div className={adminOfficeStyles.content}>{checkInfo()}</div>
      <ToastElement />
    </div>
  );
};
