import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Brightness3,
  Instagram,
  Telegram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

export const FooterNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "1440px" }}>
      <AppBar position="static" sx={{ background: "var(--dark-deep-blue)" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "100px",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: {
                  xs: "12px",
                  md: "18px",
                  lg: "20px",
                },
                color: "var(--font-white)",
              }}
            >
              +7(800) 800-80-80 | +7(800) 800-80-80
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "16px",
                  lg: "18px",
                },
                display: {
                  xs: "none",
                  md: "block",
                },
                color: "var(--font-white)",
              }}
            >
              г. Москва, 1-я Тверская-Ямская улица, дом 21
            </Typography>
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
                variant="h3"
                noWrap
                component="div"
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
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
                  color: "var(--font-white)",
                  fontSize: {
                    xs: "40px",
                    md: "40px",
                    lg: "50px",
                  },
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
            <IconButton>
              <Instagram
                fontSize="large"
                sx={{
                  margin: "1px",
                  color: "var(--font-white)",
                  fontSize: {
                    xs: "25px",
                    md: "30px",
                    lg: "35px",
                  },
                }}
              />
            </IconButton>
            <IconButton>
              <Telegram
                fontSize="large"
                sx={{
                  margin: "1px",
                  color: "var(--font-white)",
                  fontSize: {
                    xs: "25px",
                    md: "30px",
                    lg: "35px",
                  },
                }}
              />
            </IconButton>
            <IconButton>
              <Twitter
                fontSize="large"
                sx={{
                  margin: "1px",
                  color: "var(--font-white)",
                  fontSize: {
                    xs: "25px",
                    md: "30px",
                    lg: "35px",
                  },
                }}
              />
            </IconButton>
            <IconButton>
              <YouTube
                fontSize="large"
                sx={{
                  margin: "1px",
                  color: "var(--font-white)",
                  fontSize: {
                    xs: "25px",
                    md: "30px",
                    lg: "35px",
                  },
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
