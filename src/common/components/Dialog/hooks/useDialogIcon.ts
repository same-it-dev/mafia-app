import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { IconDialogTypes } from "../interfaces";

const icons = {
  yes: ThumbUpAltIcon,
  no: ThumbDownAltIcon,
};

export const useDialogIcon = (variant?: IconDialogTypes) => {
  return variant ? icons[variant] : null;
};
