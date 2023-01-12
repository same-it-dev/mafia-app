/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "../hooks/useForm";
import { ReactNode, useEffect } from "react";
import { Select, MenuItem } from "common/components";
import { PresetInterface } from "common/interfaces";
import { Box } from "@mui/system";

interface Props {
  onSubmit: (data: any) => void;
  onPresetChange: (presetId: number) => void;
  onCountGamersChange: (count: number) => void;
  gamerItems: number[];
  presets: PresetInterface[];
  children: ReactNode;
}

export const SettingForm = ({
  onSubmit,
  onCountGamersChange,
  onPresetChange,
  gamerItems,
  presets,
  children,
}: Props) => {
  const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
    useForm({
      onSubmit,
    });

  useEffect(() => {
    onCountGamersChange(Number(values.countGamers));
  }, [values.countGamers]);

  useEffect(() => {
    onPresetChange(Number(values.preset));
  }, [values.preset]);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box
        sx={{
          margin: "0 auto",
        }}
      >
        <Select
          name="countGamers"
          value={values.countGamers}
          label="Кількість гравців"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.countGamers && Boolean(errors.countGamers)}
          errorText={errors.countGamers}
        >
          {gamerItems.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>

        <Select
          isRender={!!values.countGamers}
          name="preset"
          value={values.preset}
          label="Оберіть гру"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.preset && Boolean(errors.preset)}
          errorText={errors.preset}
        >
          {presets.map((preset) => (
            <MenuItem key={preset.id} value={preset.id}>
              {preset.name}
            </MenuItem>
          ))}
        </Select>

        {children}
      </Box>
    </Box>
  );
};
