import React from 'react';
import { Box, Typography, Stack, IconButton, Avatar, Divider } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

const VisionSection = ({}) => {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      sx={{ py: 8, px: 4 }}

    >
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={4} 
        maxWidth="lg" 
        alignItems="center"
      >
        {/* Image Section */}
        <Box 
          component="img"
          src="https://st4.depositphotos.com/1653005/21507/i/450/depositphotos_215075326-stock-photo-vision-concept-young-business-man.jpg"  // Replace with the path to your image
          alt="Vision Image"
          sx={{
            borderRadius: 2,
            width: { xs: '100%', md: '50%' },
            height: 'auto',
          }}
        />
        
        {/* Text Content Section */}
        <Stack spacing={2} sx={{ width: { xs: '100%', md: '50%' } }}>
          {/* Icon and Label */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ bgcolor: 'secondary.light', width: 25, height: 25 }}>
              <BoltIcon fontSize="small" />
            </Avatar>
            <Typography variant="subtitle1" color="textSecondary">
              Our Vision
            </Typography>
          </Stack>

          {/* Title */}
          <Typography variant="h5" component="h2" fontWeight="bold">
          To be the global leader in project management education
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="textSecondary">
          driving a sustainable transformation by combining practical, real-world experience with academic excellence. PM-Academy aims to empower individuals and organizations to achieve excellence through innovative, practical, and accessible learning solutions. We are committed to fostering professionalism, ethics, and inclusivity while qualifying professionals before certifying them, inspiring them to excel in a dynamic and diverse world.          
          
          
          </Typography>

          {/* Bullet Points */}
          {/* <Box component="ul" sx={{ pl: 2, m: 0 }}>
            <Typography component="li" variant="body2" color="textSecondary">
              Expert-led educational experiences.
            </Typography>
            <Typography component="li" variant="body2" color="textSecondary">
              Flexible pathways to personal and professional achievement.
            </Typography>
            <Typography component="li" variant="body2" color="textSecondary">
              Educational opportunities at every investment level.
            </Typography>
          </Box> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default VisionSection;
