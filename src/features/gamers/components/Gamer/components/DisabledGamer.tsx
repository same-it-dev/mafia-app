import { Box, Typography } from "@mui/material";
import { Button } from "common/components";
import { GamerInterface } from "common/interfaces";
import { OnFinishAbilityInterface } from "../../../interfaces";

interface Props {
  gamer: GamerInterface;
  onFinishAbility: OnFinishAbilityInterface;
}

export const DisabledGamer = ({
  gamer: { id, isBlocked, isKilled, role },
  onFinishAbility,
}: Props) =>
  isBlocked || isKilled ? (
    <Box
      sx={{
        background: "#ffffffb5",
        height: "100%",
        width: "100%",
        zIndex: "100",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          background: "black",
          color: "white",
          padding: "15px",
        }}
        variant="h5"
      >
        {role.name} №-{id}
        <Box
          sx={{
            marginLeft: "15px",
          }}
          component="span"
        >
          {isBlocked && "заблокований"}
          {isKilled && "вбитий"}
        </Box>
      </Typography>

      <Button
        onClick={() => onFinishAbility("fail")}
        sx={{
          margin: "auto 15px",
        }}
        variant="contained"
      >
        Наступний гравець
      </Button>
    </Box>
  ) : (
    <></>
  );
