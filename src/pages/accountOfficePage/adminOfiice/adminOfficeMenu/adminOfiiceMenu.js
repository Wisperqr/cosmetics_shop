import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import StarIcon from "@mui/icons-material/Star";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ChatIcon from "@mui/icons-material/Chat";

export const AdminOfficeMenu = ({ setAdminOfficeInfo, setAnchorElNav }) => {
  return (
    <List sx={{ width: "250px" }}>
      <ListItem
        key="personalData"
        id="adminPersonalData"
        onClick={() => setAdminOfficeInfo("personalData")}
      >
        <ListItemButton onClick={() => setAnchorElNav(null)}>
          <ListItemIcon>
            <ContactEmergencyIcon sx={{ color: "#586c91" }} />
          </ListItemIcon>
          <ListItemText primary="Персональные данные" />
        </ListItemButton>
      </ListItem>
      <ListItem
        key="favorites"
        id="adminFavorites"
        onClick={() => setAdminOfficeInfo("favorites")}
      >
        <ListItemButton onClick={() => setAnchorElNav(null)}>
          <ListItemIcon>
            <StarIcon sx={{ color: "#586c91" }} />
          </ListItemIcon>
          <ListItemText primary="Избранные товары" />
        </ListItemButton>
      </ListItem>
      <ListItem
        key="orders"
        id="adminOrders"
        onClick={() => setAdminOfficeInfo("orders")}
      >
        <ListItemButton onClick={() => setAnchorElNav(null)}>
          <ListItemIcon>
            <FactCheckIcon sx={{ color: "#586c91" }} />
          </ListItemIcon>
          <ListItemText primary="Заказы" />
        </ListItemButton>
      </ListItem>
      <ListItem
        key="product"
        id="adminProduct"
        onClick={() => setAdminOfficeInfo("createProduct")}
      >
        <ListItemButton onClick={() => setAnchorElNav(null)}>
          <ListItemIcon>
            <ChatIcon sx={{ color: "#586c91" }} />
          </ListItemIcon>
          <ListItemText primary="Добавить товар" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
