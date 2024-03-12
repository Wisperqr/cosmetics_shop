import { Box, IconButton, Menu } from "@mui/material";

import { ColoredAvatar } from "../../../components/avatar/Avatar";
import userOfiiceStyles from "./userOfiice.module.scss";
import { useState } from "react";
import { PersonalData } from "../personalData/personalData";
import { Favorites } from "../favorites/favorites";
import { UserOfficeMenu } from "./userOfficeMenu/userOfficeMenu";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import { UserOrderHistory } from "./userOrderHistory/userOrderHistory";
import { ToastElement } from "../../../components/toast/toast";

export const UserOffice = () => {
  const [userOfficeInfo, setUserOfficeInfo] = useState("personalData");
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function checkInfo() {
    if (userOfficeInfo === "personalData") {
      return <PersonalData />;
    } else if (userOfficeInfo === "favorites") {
      return <Favorites />;
    } else if (userOfficeInfo === "orderHistory") {
      return <UserOrderHistory />;
    }
  }

  return (
    <div className={userOfiiceStyles.wrapper}>
      <div className={userOfiiceStyles.menu}>
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
          <UserOfficeMenu
            setUserOfficeInfo={setUserOfficeInfo}
            setAnchorElNav={setAnchorElNav}
          />
        </Menu>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <UserOfficeMenu
            setUserOfficeInfo={setUserOfficeInfo}
            setAnchorElNav={setAnchorElNav}
          />
        </Box>
      </div>

      <div className={userOfiiceStyles.content}>{checkInfo()}</div>
      <ToastElement />
    </div>
  );
};
