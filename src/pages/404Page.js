import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1">404</Typography>
        <Typography variant="h6">Такой страницы не существует</Typography>
        <Link to="/">
          <Button variant="contained" sx={{ marginTop: 2 }}>
            На главную
          </Button>
        </Link>
      </Container>
    </Box>
  );
};
