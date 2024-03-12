import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AccountCircle,
  Login,
  Logout,
  ShoppingCart,
} from "@mui/icons-material";
import { Badge, Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Brightness3 } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserCart } from "../../redux/user/userSelectors";
import {
  clearCart,
  clearFavorites,
  logout as logoutRedux,
  setUsers,
} from "../../redux/user/userActions";
import { API_URL_USERS } from "../../constants/api";
import { getAllProducts } from "../../redux/products/productsSelectors";
import { setFilteredProducts } from "../../redux/products/productsActions";
import { useState } from "react";

export const SearchAppBar = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(getUser);
  const products = useSelector(getAllProducts);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const cart = useSelector(getUserCart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL_USERS);
      const users = await response.json();
      dispatch(setUsers(users));
    } catch (error) {
      dispatch(setUsers(error));
    }
  };

  function handleLogout() {
    dispatch(logoutRedux());
    dispatch(clearCart());
    dispatch(clearFavorites());
  }

  function handleClick() {
    dispatch(setFilteredProducts(products));
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "1440px",
        minHeight: "64px",
      }}
    >
      <AppBar
        // position="static"
        sx={{
          minHeight: "64px",
          display: "flex",
          justifyContent: "center",
          background: "var(--dark-deep-blue)",
          position: {
            md: "sticky",
            lg: "static",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{
                  color: "var(--font-white)",
                  "&:hover": {
                    color: "var(--light-deep-blue)",
                  },
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              <MenuItem onClick={() => navigate("/")}>
                <Typography
                  textAlign="center"
                  sx={{ color: "var(--dark-deep-blue)" }}
                >
                  Главная
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/catalog")}>
                <Typography
                  textAlign="center"
                  sx={{ color: "var(--dark-deep-blue)" }}
                >
                  Каталог
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/blogs")}>
                <Typography
                  textAlign="center"
                  sx={{ color: "var(--dark-deep-blue)" }}
                >
                  Блог
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/delivery")}>
                <Typography
                  textAlign="center"
                  sx={{ color: "var(--dark-deep-blue)" }}
                >
                  Доставка
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/contacts")}>
                <Typography
                  textAlign="center"
                  sx={{ color: "var(--dark-deep-blue)" }}
                >
                  Контакты
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Button
              sx={{
                color: "var(--font-white)",
                "&:hover": {
                  color: "var(--light-deep-blue)",
                },
              }}
              onClick={() => navigate("/")}
            >
              Главная
            </Button>
            <Button
              sx={{
                color: "var(--font-white)",
                "&:hover": {
                  color: "var(--light-deep-blue)",
                },
              }}
              onClick={() => {
                handleClick();
                navigate("/catalog");
              }}
            >
              Каталог
            </Button>
            <Button
              sx={{
                color: "var(--font-white)",
                "&:hover": {
                  color: "var(--light-deep-blue)",
                },
              }}
              onClick={() => navigate("/blogs")}
            >
              Блог
            </Button>
            <Button
              sx={{
                color: "var(--font-white)",
                "&:hover": {
                  color: "var(--light-deep-blue)",
                },
              }}
              onClick={() => navigate("/delivery")}
            >
              Доставка
            </Button>
            <Button
              sx={{
                color: "var(--font-white)",
                "&:hover": {
                  color: "var(--light-deep-blue)",
                },
              }}
              onClick={() => navigate("/contacts")}
            >
              Контакты
            </Button>
          </Box>
          <Link style={{ textDecoration: "none" }} to="/">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                noWrap
                component="div"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    color: "var(--font-white)",
                    fontFamily: "'Dancing Script', cursive",
                  },
                  fontSize: {
                    xs: "30px",
                    md: "30px",
                    lg: "40px",
                  },
                }}
              >
                Moon
              </Typography>
              <Brightness3
                sx={{
                  fontSize: {
                    md: "40px",
                    lg: "50px",
                  },
                  color: "var(--font-white)",
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              />
            </Box>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginLeft: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {authUser ? (
                <>
                  <Link
                    to="/accountoffice"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AccountCircle
                      onClick={() => fetchUsers()}
                      sx={{
                        m: "0 5px",
                        color: "var(--font-white)",
                        fontSize: {
                          xs: "20px",
                          md: "25px",
                          lg: "35px",
                        },
                        "&:hover": {
                          color: "var(--light-deep-blue)",
                        },
                      }}
                    />
                  </Link>
                  <Typography
                    style={{
                      textTransform: "capitalize",
                      margin: "5px",
                      color: "var(--font-white)",
                    }}
                  >
                    {authUser.login}
                  </Typography>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "var(--font-white)",
                    }}
                  >
                    <Typography>Вход</Typography>
                    <Login
                      onClick={() => fetchUsers()}
                      fontSize="large"
                      sx={{
                        m: "0 5px",
                        color: "var(--font-white)",
                        fontSize: {
                          xs: "20px",
                          md: "25px",
                          lg: "35px",
                        },
                        "&:hover": {
                          color: "var(--light-deep-blue)",
                        },
                      }}
                    />
                  </Link>
                </>
              )}

              {authUser ? (
                <>
                  <Link
                    to="/cart"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Badge
                      badgeContent={cart.length}
                      color="error"
                      sx={{ margin: "0 15px" }}
                    >
                      <ShoppingCart
                        fontSize="large"
                        sx={{
                          color: "var(--font-white)",
                          fontSize: {
                            xs: "20px",
                            md: "25px",
                            lg: "35px",
                          },
                          "&:hover": {
                            color: "var(--light-deep-blue)",
                          },
                        }}
                      />
                    </Badge>
                  </Link>

                  <Link
                    to="/"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "var(--font-white)",
                    }}
                    onClick={handleLogout}
                  >
                    <Logout
                      fontSize="large"
                      sx={{
                        margin: "0 5px",

                        fontSize: {
                          xs: "20px",
                          md: "25px",
                          lg: "35px",
                        },
                        "&:hover": {
                          color: "var(--light-deep-blue)",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        display: {
                          xs: "none",
                          sm: "block",
                          md: "block",
                        },
                      }}
                    >
                      Выход
                    </Typography>
                  </Link>
                </>
              ) : null}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
