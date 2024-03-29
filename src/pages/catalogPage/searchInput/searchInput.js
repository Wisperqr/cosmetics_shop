import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/products/productsSelectors";
import { setFilteredProducts } from "../../../redux/products/productsActions";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "2px solid var(--dark-deep-blue)",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const SearchInput = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  function handleChange({ target: { value } }) {
    dispatch(
      setFilteredProducts(
        products.filter((prod) => {
          if (prod.name.toLowerCase().includes(value)) {
            return prod;
          }
        })
      )
    );
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Поиск..."
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
    </Search>
  );
};
