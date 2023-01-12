import { Button } from "common/components";
import DialogMUI from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { IconDialogTypes } from "./interfaces";
import { useDialogIcon } from "./hooks";

interface Props {
  icon?: IconDialogTypes;
  title?: string;
  description?: string;
  isOpen: boolean;
  onConfirm?: () => void;
  onReject?: () => void;
  onNext?: () => void;
  confirm?: boolean;
  reject?: boolean;
  next?: boolean;
}

export const Dialog = ({
  icon,
  title,
  description,
  isOpen,
  onReject,
  onConfirm,
  onNext,
  confirm,
  next,
  reject,
}: Props) => {
  const Icon = useDialogIcon(icon);

  return (
    <Box>
      <DialogMUI
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          id="alert-dialog-title"
        >
          {Icon && (
            <Icon
              sx={{
                color: "secondary.main",
                width: "40px",
                height: "40px",
                marginRight: "15px",
              }}
            />
          )}

          {title}
        </DialogTitle>
        <DialogContent
          sx={{
            minWidth: "480px",
          }}
        >
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            "& .MuiButton-root": {
              width: "200px",
              margin: "15px",
            },
          }}
        >
          {reject && (
            <Button variant="contained" onClick={onReject}>
              Ні
            </Button>
          )}
          {confirm && (
            <Button variant="contained" onClick={onConfirm} autoFocus>
              Так
            </Button>
          )}
          {next && (
            <Button variant="contained" onClick={onNext} autoFocus>
              Далі
            </Button>
          )}
        </DialogActions>
      </DialogMUI>
    </Box>
  );
};
