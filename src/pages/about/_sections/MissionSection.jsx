import React from 'react';
import { Box, Typography, Stack, IconButton, Avatar, Divider } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

const MissionSection = ({}) => {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      sx={{ py: 4, px: 4 }}

    >
      <Stack 
        direction={{ xs: 'column', md: 'row-reverse' }} 
        spacing={4} 
        maxWidth="lg" 
        alignItems="center"
      >
        {/* Image Section */}
        <Box 
          component="img"
          src="https://media.istockphoto.com/id/588353994/photo/corporate-communication-concept-our-mission.jpg?s=612x612&w=0&k=20&c=zLwVdfBMny5lip1RKBrrwDZ_RuAn1P8Q7gfnp65_aqs="  // Replace with the path to your image
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
              Our Mission
            </Typography>
          </Stack>

          {/* Title */}
          <Typography variant="h5" component="h2" fontWeight="bold">
            35,000+ Happy Students Joined With Us To Achieve Their Goals
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim minim.
          </Typography>

          {/* Bullet Points */}
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            <Typography component="li" variant="body2" color="textSecondary">
              Expert-led educational experiences.
            </Typography>
            <Typography component="li" variant="body2" color="textSecondary">
              Flexible pathways to personal and professional achievement.
            </Typography>
            <Typography component="li" variant="body2" color="textSecondary">
              Educational opportunities at every investment level.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MissionSection;
