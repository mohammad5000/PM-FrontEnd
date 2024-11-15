import React from 'react';
import { Box, Typography, Stack, IconButton, Avatar, Divider, Card, CardMedia ,CardContent } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

const CEOSection = ({}) => {
  return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    py: 8,
    backgroundColor: '#6a1b9a', // Purple background
    color: 'white',
   }}>
    <Box>
    <Typography variant="h5" component="h2" fontWeight="bold">
      Meet Our CEO/Founder
    </Typography>
    <Typography variant="body1"  >
      Lorem ipsum dolor sit amet consectetur adipiscing elit sed.
    </Typography>
    </Box>
    <Card sx={{
        width:'270px',
        height: 'auto',
        borderRadius: 2,
        boxShadow: 5,
        my: 4,
    }}>
        <CardMedia
            component="img"
            image="/assets/Images/EngM.png" // Replace with the path to your image
            alt="Vision Image"
        />
        <CardContent>
            <Typography variant="h7" component="h2" fontWeight="bold">
                Eng. Mohamed Mogahed
            </Typography>
            <Typography variant="body2" color="textSecondary">
                CEO/Founder
            </Typography>
             <Divider sx={{ my: 2 }} />
             <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim minim.
            </Typography>
        </CardContent>
    </Card>
   </Box>
  );
};

export default CEOSection;
