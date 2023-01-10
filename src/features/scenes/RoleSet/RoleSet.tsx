import { Box, Typography } from "@mui/material";
import { Button } from "common/components";
import { GamerForm } from "./components";
import { useRoleSet } from "./hooks";

export const RoleSet = () => {
  const { gamers, roles, onSubmit } = useRoleSet();

  return (
    <Box>
      <Typography
        sx={{
          color: "primary.contrastText",
        }}
        variant="h1"
      >
        Встановлення ролей
      </Typography>
      <GamerForm gamers={gamers} roles={roles} onSubmit={onSubmit}>
        <Button
          sx={{
            margin: "30px auto",
          }}
          type="submit"
          variant="contained"
        >
          Зберегти
        </Button>
      </GamerForm>
    </Box>
  );
};
