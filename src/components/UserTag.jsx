// components/UserComponent.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const UserTag = ({ userImage = "https://cdn.iconscout.com/icon/free/png-256/free-user-icon-download-in-svg-png-gif-file-formats--profile-avatar-account-person-app-interface-pack-icons-1401302.png?f=webp&w=256", userName = "", size = 50 }) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" textAlign="center">
      <Box
        component="img"
        src={userImage}
        alt={userName}
        marginRight={1}

        sx={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '1px solid white', // Optional: adds a border around the image
          backgroundColor: "white",
          display: "flex", alignItems: "center", justifyContent: "center"

        }}
      />
      <Typography variant="body1" sx={{ marginTop: '0px', fontWeight: 'bold', overflow: "hidden", textOverflow: "ellipsis", fontSize: "12px" }}>
        {userName}
      </Typography>
    </Box>
  );
};

export default UserTag;
