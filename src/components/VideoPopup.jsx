import React, { useState } from "react";
import { Dialog, DialogContent, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

export default function VideoPopup({ video }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Trigger Button */}
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
        maxWidth="xl"
        onClose={handleClose}
        fullWidth={true}
        PaperProps={{
          style: {
            backgroundColor: "transparent", // Makes background transparent if needed
            boxShadow: "none",
          },
        }}
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

          {/* Responsive Video Wrapper */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9 aspect ratio
              backgroundColor: "black",
            }}
          >
            {/* Video */}
            <iframe
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
