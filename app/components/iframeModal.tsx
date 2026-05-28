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
import WebAssetIcon from '@mui/icons-material/WebAsset';

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
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    if (open && url) setLoading(true);
  }, [open, url]);

  const shouldRenderIframe = open || !unmountOnClose;

  function useFullscreen() {
    if (!iframeRef.current) return;

    try {
      const canvas = iframeRef.current.contentDocument?.querySelector("#unity-canvas");
      if (canvas?.requestFullscreen) {
        canvas.requestFullscreen();
        return;
      }
    } catch (e) {
      // Cross-origin iframe, try iframe fullscreen instead
    }

    if (iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    }
  }

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
          title={title ?? url ?? ""}
        >
          {title ?? url ?? "Iframe"}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton 
              sx={{ backgroundColor: "background.defaultLight" }}
              onClick={useFullscreen} 
              aria-label="Fullscreen" 
              size="small">
            <WebAssetIcon />
          </IconButton>
          <IconButton 
              sx={{ backgroundColor: "background.defaultLight" }} 
              onClick={onClose} 
              aria-label="Close" 
              size="small">
            <CloseIcon />
          </IconButton>
        </Box>
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
          <Box<'iframe'>
            component="iframe"
            ref={iframeRef}
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
