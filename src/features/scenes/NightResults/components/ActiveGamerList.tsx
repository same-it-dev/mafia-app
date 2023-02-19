import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { GamerInterface } from "common/interfaces";
import { ActiveGamerRow } from "./ActiveGamerRow";

interface Props {
  gamers: GamerInterface[];
}

export const ActiveGamerList = ({ gamers }: Props) => (
  <Box sx={{ width: "100%", marginTop: "25px" }}>
    <Accordion sx={{ background: "none" }}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<ExpandMoreIcon sx={{ color: "primary.contrastText" }} />}
      >
        <Typography variant="h5" color="primary.contrastText">
          Гравці які залишились
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        {gamers.map((gamer) => (
          <ActiveGamerRow key={gamer.id} gamer={gamer} />
        ))}
      </AccordionDetails>
    </Accordion>
  </Box>
);
