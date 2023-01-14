import { Box, Typography } from "@mui/material";
import { Button } from "common/components";
import { RolesList, SettingForm } from "./components";
import { useSetting } from "./hooks";

export const Setting = () => {
  const {
    onSubmit,
    onCountGamersChange,
    onPresetChange,
    gamerItems,
    presets,
    roles,
    countGamers,
  } = useSetting();

  return (
    <Box
      sx={{
        padding: "0 15px",
      }}
    >
      <Typography
        sx={{
          color: "primary.contrastText",
        }}
        variant="h1"
      >
        Налаштування
      </Typography>

      <SettingForm
        onSubmit={onSubmit}
        onCountGamersChange={onCountGamersChange}
        onPresetChange={onPresetChange}
        gamerItems={gamerItems}
        presets={presets}
      >
        <Button variant="contained" type="submit">
          Зберегти
        </Button>
        {countGamers ? <RolesList roles={roles} /> : ""}
      </SettingForm>
    </Box>
  );
};
