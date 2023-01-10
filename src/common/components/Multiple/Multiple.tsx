/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const MenuProps = {
  PaperProps: {
    style: {
      background: "#1D1E26",
      color: "#abb0c5",
    },
  },
};

interface Props {
  options: {
    firstName?: string;
    secondName?: string;
    value: string | number;
  }[];
  onChange: (value: number[]) => void;
  title: string;
  resetValue?: number;
  maxSelected?: number;
}

export const Multiple = ({
  options,
  onChange,
  title,
  resetValue,
  maxSelected,
}: Props) => {
  const [selected, setSelected] = useState<any>([]);

  useEffect(() => {
    if (resetValue === 0) {
      setSelected([]);
    }
  }, [resetValue]);

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;

    const result = typeof value === "string" ? value.split(",") : value;

    if (maxSelected && result.length > maxSelected) return;

    setSelected(result);
    onChange(result);
  };

  return (
    <div>
      <FormControl
        css={css`
          width: 100%;
          background: #1d1e26;
          font-family: "Cuprum";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 30px;
          border-radius: 5px;

          .MuiInputLabel-root,
          .MuiInputLabel-root.Mui-focused,
          .MuiSvgIcon-root,
          .MuiInputBase-root {
            color: #abb0c5;
          }

          .MuiOutlinedInput-notchedOutline {
            border: none;
          }

          .MuiSelect-select {
            padding: 15px !important;
          }
        `}
      >
        <InputLabel id="multiple-checkbox-label">{title}</InputLabel>

        <Select
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label={title} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {options.map(({ firstName, secondName, value }) => (
            <MenuItem
              sx={{
                justifyContent: "flex-start",
                display: "flex",
              }}
              key={value}
              value={value}
            >
              <Checkbox
                sx={{
                  color: "#fff",
                  "& .MuiSvgIcon-root": {
                    color: "#fff",
                  },
                }}
                checked={selected.indexOf(value) > -1}
              />
              <Box component="span">{firstName}</Box>{" "}
              <Box
                component="span"
                sx={{
                  marginLeft: "15px",
                }}
              >
                {secondName}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
