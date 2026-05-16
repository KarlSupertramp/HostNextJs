"use client";
import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Waterlevel from "./waterlevel";
import WebAssetIcon from '@mui/icons-material/WebAsset';

type WaterLevelModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
};

export function WaterLevelModal({
  open,
  title,
  onClose,
}: WaterLevelModalProps) {

  return (
   <Dialog
    open={open}
    onClose={onClose}
    slotProps={{
      backdrop: {
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(6px)",
        },
      },
    }}
    PaperProps={{
      sx: {
        minWidth: 1000,
        height: "85vh",
        backgroundColor: "background.defaultLight",
        borderRadius: 1,
        overflow: "hidden",
      },
    }}>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Typography
          variant="body1"     
          sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}
          title={title}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton href={"/waterlevelPage"} aria-label="Fullscreen" size="small">
            <WebAssetIcon />
          </IconButton>
          <IconButton onClick={onClose} aria-label="Close" size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>    
      <Waterlevel />    
    </Dialog>
  );
}
