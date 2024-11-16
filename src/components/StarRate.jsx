// components/StarRating.js

import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const StarRating = ({ rating, fontSize = 16, iconSize = 24, allowChange = true }) => {

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1" style={{ fontSize: `${fontSize}px`, marginRight: '8px' }}>
        {rating.toFixed(1)}
      </Typography>
      {
        allowChange ? (
          <>

            <div className='md:flex hidden'>
              <Rating name="read-only" value={rating} readOnly />

            </div>
            <div className='md:hidden flex'>
              <StarIcon color='#FAAF00' sx={{ fontSize: "24px", color: '#FAAF00' }} />
            </div></>
        ) : (
          <Rating name="read-only" value={rating} readOnly />

        )
      }



    </Box>
  );
};

export default StarRating;
