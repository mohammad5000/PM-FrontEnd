import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const centeredModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: '40%', xs: '90%' },
  height: '70%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  p: 0,
};

const ResultModal = ({ open, handleClose, Result }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...centeredModalStyle }}>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', p: 2 , height:"100%" }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
=          <Typography variant='p'>Your Score is</Typography>
          <Typography variant='p'>{Result.examResult}</Typography>
          <Typography variant='body1'>over</Typography>
          <Typography variant='p'>{Result.examMax}</Typography>
=        </Box>
      </Box>
    </Modal>
  );
};

export default ResultModal;
