import React from 'react';
import { Box, Typography, Stack, IconButton, Avatar, Divider } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

const MissionSection = ({ }) => {
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
            PM-Academy is dedicated to delivering comprehensive project management training
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="textSecondary">
            that bridges the gap between theory and practice. Our mission is to:</Typography>

          {/* Bullet Points */}
          <Box component="ul" sx={{ pl: 2, m: 0, listStyleType: 'disc', color: 'black' }}>
      <li>
        <Typography variant="body2" color="textSecondary">
          Provide a diverse range of courses tailored to various industries and career levels.
        </Typography>
      </li>
      <li>
        <Typography variant="body2" color="textSecondary">
          Transfer simplified knowledge and practical experience to improve value and best practices.
        </Typography>
      </li>
      <li>
        <Typography variant="body2" color="textSecondary">
          Foster a supportive community for continuous learning and professional growth.
        </Typography>
      </li>
      <li>
        <Typography variant="body2" color="textSecondary">
          Help learners to Learn, Practice, Improve, and Excel.
        </Typography>
      </li>
    </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MissionSection;
