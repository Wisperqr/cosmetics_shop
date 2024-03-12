import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import StarIcon from "@mui/icons-material/Star";
import { History } from "@mui/icons-material";

export const UserOfficeMenu = ({ setUserOfficeInfo, setAnchorElNav }) => {
  return (
    <List
      sx={{
        width: "250px",
      }}
    >
      <ListItem
        key="personalData"
        onClick={() => setUserOfficeInfo("personalData")}
        style={{ padding: "8px 0" }}
      >
        <ListItemButton onClick={() => setAnchorElNav(null)}>
          <ListItemIcon>
            <ContactEmergencyIcon
              sx={{
                color: "#586c91",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Персональные данные" />
        </ListItemButton>
      </ListItem>
      <ListItem
        key="favorites"
        onClick={() => setUserOfficeInfo("favorites")}
        style={{ padding: "8px 0" }}
      >
        <ListItemButton onClick={() => setAnchorElNav(null)}>
          <ListItemIcon>
            <StarIcon
              sx={{
                color: "#586c91",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Избранные товары" />
        </ListItemButton>
      </ListItem>
      <ListItem
        key="orderHistory"
        onClick={() => setUserOfficeInfo("orderHistory")}
        style={{ padding: "8px 0" }}
      >
        <ListItemButton onClick={() => setAnchorElNav(null)}>
          <ListItemIcon>
            <History
              sx={{
                color: "#586c91",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="История заказов" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
