import React, { useState } from "react";
import { Dialog, DialogContent, IconButton, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";


export default function VideoPopup({ video }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      {/* Trigger (thumbnail or button) */}

      <IconButton
        onClick={handleOpen}
        size="large"
        sx={{ color: "white", borderRadius: "8px" }}
      >
        <PlayCircleFilledWhiteIcon fontSize="large" />
      </IconButton>
      {/* Popup Modal */}
      <Dialog
        open={open}
        maxWidth={"xl"}
        onClose={handleClose}
        fullWidth={true}
      >
        <DialogContent style={{ position: "relative", padding: "0" }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          {/* Video Player */}
          <iframe
            width="100%"
            height="800"
            src={`https://www.youtube.com/embed/${video}`} // Replace with your video URL
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
