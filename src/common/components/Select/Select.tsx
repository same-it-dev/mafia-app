/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SelectMUI from "@mui/material/Select";
import { FormHelperText, SelectProps } from "@mui/material";

interface Props {
  errorText?: string;
  isRender?: boolean;
}

export const Select = ({
  label,
  error,
  errorText,
  children,
  isRender = true,
  ...props
}: Props & SelectProps) =>
  isRender ? (
    <FormControl
      sx={{
        width: "100%",
        background: "#1d1e26",
        fontFamily: '"Cuprum"',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "23px",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        marginBottom: "30px",
        borderRadius: "5px",

        "& .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused, & .MuiSvgIcon-root, & .MuiInputBase-root":
          {
            color: "#abb0c5",
          },

        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },

        "& .MuiSelect-select": {
          padding: "15px !important",
        },
      }}
    >
      <InputLabel>{label}</InputLabel>
      <SelectMUI
        {...props}
        MenuProps={{
          sx: {
            ".MuiPaper-root": { marginTop: "15px", background: "none" },
            ".MuiList-root": { backgroundColor: "#1D1E26" },
            "& .MuiButtonBase-root": {
              color: "#abb0c5",
              padding: "15px",
            },
          },
        }}
      >
        {children}
      </SelectMUI>
      <FormHelperText error>{error && errorText}</FormHelperText>
    </FormControl>
  ) : (
    <></>
  );
