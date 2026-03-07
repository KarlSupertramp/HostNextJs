"use client";

import * as React from "react";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type IframeModalProps = {
  open: boolean;
  url: string | null; 
  title?: string;
  onClose: () => void;
  unmountOnClose?: boolean;
};

export function IframeModal({
  open,
  url,
  title,
  onClose,
  unmountOnClose = true,
}: IframeModalProps) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (open && url) setLoading(true);
  }, [open, url]);

  const shouldRenderIframe = open || !unmountOnClose;

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
        backgroundColor: "background.paper",
        borderRadius: 1,
        overflow: "hidden",
      },
    }}>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          title={title ?? url ?? ""}
        >
          {title ?? url ?? "Iframe"}
        </Typography>

        <IconButton onClick={onClose} aria-label="Close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0, position: "relative", height: "100%" }}>
        {loading && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.defaultLight",
              zIndex: 1,
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {shouldRenderIframe && url ? (
          <Box
            component="iframe"
            key={url}
            src={url}
            onLoad={() => setLoading(false)}
            sx={{ width: "100%", height: "100%", border: "none", display: "block", backgroundColor: "background.default" }}
            allow="clipboard-read; clipboard-write; fullscreen"            
          />
        ) : (
          <Box sx={{ p: 3 }}>
            <Typography color="text.secondary">No URL selected.</Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
