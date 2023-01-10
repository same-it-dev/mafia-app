import { SxPropsInterface } from "common/interfaces";
import { ButtonTypes } from "./interfaces";

const contained: SxPropsInterface = {
  display: "flex",
  padding: "10px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "secondary.main",
  borderRadius: "5px",
  fontStyle: "normal",
  fontSize: "18px",
  textTransform: "uppercase",
  color: "secondary.contrastText",
  transition: "background 0.7s",
  "&:hover": {
    backgroundColor: "secondary.dark",
  },
};

const text: SxPropsInterface = {
  display: "flex",
  padding: "10px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  fontStyle: "normal",
  fontSize: "18px",
  textTransform: "uppercase",
  color: "primary.contrastText",
};

const buttonTypes: Record<ButtonTypes, SxPropsInterface> = {
  contained,
  text,
  outlined: {},
};

export const useButton = (variant: ButtonTypes) => buttonTypes[variant];
