import MenuItemMUI from "@mui/material/MenuItem";
import { MenuItemProps } from "@mui/material";

export const MenuItem = ({ children, ...props }: MenuItemProps) => (
  <MenuItemMUI
    sx={{
      display: "flex",
      justifyContent: "center",
      padding: "15px 15px",
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "23px",
      letterSpacing: "0.05em",
      color: "#abb0c5",
      textTransform: "uppercase",
    }}
    {...props}
  >
    {children}
  </MenuItemMUI>
);
