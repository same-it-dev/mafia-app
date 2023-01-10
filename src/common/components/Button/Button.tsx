import ButtonMUI from "@mui/material/Button";

import { ButtonTypes } from "./interfaces";
import { useButton } from "./useButton";
import { ButtonProps } from "@mui/material";

interface Props {
  variant: ButtonTypes;
}

export const Button = ({
  variant,
  sx,
  type,
  ...props
}: ButtonProps & Props) => {
  const styles = useButton(variant);

  const mergedStyles = { ...styles, ...sx };

  return <ButtonMUI type={type} sx={mergedStyles} {...props} />;
};
