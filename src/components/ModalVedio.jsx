import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton'; // Ensure correct import
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


const centeredModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '70%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  p: 0,
};

const transparentButtonStyle = {
  backgroundColor: 'transparent',
  color: 'black',
  border: '2px solid black',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
};

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...centeredModalStyle }}>
          <Box sx={{ flex: 1, p: 2 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </Box>
          <Box sx={{ p: 2 }}>
            <Button onClick={handleClose} fullWidth sx={transparentButtonStyle}>Close Child Modal</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default function FullScreenModal({ VidSource }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button >Open modal</Button> */}
      <Button aria-label="play" onClick={handleOpen}>
        <PlayCircleOutlineIcon />
        play
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...centeredModalStyle }}>
          <Box sx={{ flex: 1, position: 'relative' }}>
            <iframe
              width="100%"
              height="100%"
              src={VidSource}
              title="VedioData"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <Box sx={{ position: 'absolute', bottom: -50, left: '50%', transform: 'translateX(-50%)' }}>
            <IconButton onClick={handleClose} sx={{ color: 'white', backgroundColor: 'transparent', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
              <CancelIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
