import { Box, Slide } from "@mui/material";
import AlertMUI from "@mui/material/Alert";
import { useEffect, useState } from "react";

export const Alert = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 5000);
  }, []);

  return (
    <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "absolute",
          top: "25px",
          zIndex: "1000",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AlertMUI
          severity="warning"
          variant="filled"
          sx={{ maxWidth: "400px", width: "100%" }}
        >
          Hello i am Alert !!
        </AlertMUI>
      </Box>
    </Slide>
  );
};
