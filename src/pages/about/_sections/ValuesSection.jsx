import React from 'react';
import { Box, Typography, Stack, IconButton, Avatar, Divider, Card, CardMedia ,CardContent } from '@mui/material';


const CardValue = ({title,text}) => {
    return(
        <Card sx={{
            width:{sm:'270px',xs:"60%"},
            height: '200px',
            borderRadius: 2,
            boxShadow: 5,
            backgroundColor: '#6a1b9a', // Purple background
            color:"white",
            my: 4,
        }}>
    
            <CardContent>
                <Typography variant="h7" component="h2" fontWeight="bold" className='h-[60px]'>
                    {title}
                </Typography>
    
                 <Divider sx={{ my: 2 }} />
                 <Typography variant="body2" color="white">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

const ValuesSection = ({}) => {
  return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    py: 8,
    color: 'white',
   }}>
    <Box>
    {/* <Typography variant="h5" component="h1" fontWeight="bold" color='black'>
      Our Values
    </Typography> */}
    <Typography variant="h5" component="h2" fontWeight="bold" color='black'>
    Our Values          </Typography>

    </Box>
    <Box className=" w-full flex md:flex-row flex-col gap-4 items-center justify-center flex-wrap">
        <CardValue title={"Responsibility, Respect, Fairness, and Honesty"} text={"Upholding the highest ethical standards."}/>
        <CardValue title={"Excellence and Innovation"} text={"Facilitating excellence through innovation in education."}/>
        <CardValue title={"Diversity and Inclusion"} text={"Embracing and respecting differences to build stronger communities."}/>
        <CardValue title={"Continuous Improvement"} text={"Encouraging lifelong learning and adaptability."}/>
        <CardValue title={"Practical Knowledge"} text={" Providing actionable insights to foster real-world impact."}/>

    </Box>

   </Box>
  );
};

export default ValuesSection;
