// components/StarRating.js

import React from 'react';
import { Box, Rating, Typography } from '@mui/material';

const StarRating = ({ rating, fontSize = 16, iconSize = 24 }) => {

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1" style={{ fontSize: `${fontSize}px`, marginRight: '8px' }}>
        {rating.toFixed(1)}
      </Typography>
      <Rating name="read-only" value={rating} readOnly />

    </Box>
  );
};

export default StarRating;
