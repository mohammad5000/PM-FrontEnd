import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';



export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#f9f9f9', pt: 5,  justifyContent:"center"}}>
      <Container maxWidth={"lg"} disableGutters>
        <Grid container spacing={{xs:2,md:6,lg:10}} justifyContent={"center"} direction={{xs:"column", md:"row"}}sx={{pl:2}}>
          {/* Logo and Description */}
          <Grid item  xs={12} md={3}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Image src="/assets/Images/tree-736885_640.jpg" alt="PM Academy Logo" width={125} height={125} />
              <Typography variant="body2" color="textSecondary" align="left" sx={{paddingY: 2}}>
                Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.<br/>Nunc vulputate libero et velit interdum,<br/> ac aliquet odio mattis.
              </Typography>
            </Box>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={3}>
            
            <Typography variant="h6" color="textPrimary" gutterBottom >
              Useful Links
            </Typography>
            <Box display="flex" alignItems="flex-start" my={2}>
            <InfoOutlinedIcon fontSize="small" sx={{ mr: "8px" ,color:"#6524D3"}} />
            <Link href="\about" variant="body2" color="textSecondary" fontSize={"14px"} sx={{textDecoration:"none",
              '&:hover':{
                textDecoration: "underline",
                color: "#6524D3"
              }}}>
              About
            </Link>
            </Box>
            <Box display="flex" alignItems="flex-start" my={2}>
            <MenuBookOutlinedIcon fontSize="small" sx={{ mr: "8px", color:"#6524D3" }} />
            <Link href="#" variant="body2" color="textSecondary" fontSize={"14px"} sx={{textDecoration:"none",
              '&:hover':{
                textDecoration: "underline",
                color: "#6524D3"
              }}}>
              Free Resources
            </Link>
            </Box>
            <Box display="flex" alignItems="flex-start" my={2}>
            <AutoStoriesIcon fontSize="small" sx={{ mr: "8px",color:"#6524D3"}}  />
            <Link href="#" variant="body2" color="textSecondary" fontSize={"14px"} sx={{textDecoration:"none",
              '&:hover':{
                textDecoration: "underline",
                color: "#6524D3"
              }}}>
              Courses
            </Link>
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom >
              Contact Us
            </Typography>
            <Box display="flex" alignItems="flex-start"  mt={2}>
              <EmailIcon fontSize="small" sx={{ mr: "8px", color:"#6524D3"}} />
              <Typography variant="body2">example@example.com</Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" mt={2}>
              <PhoneIcon fontSize="small" sx={{ mr: "8px" ,color:"#6524D3"}} />
              <Typography variant="body2"> +0000000000</Typography>
            </Box>
            <Box alignItems="flex-start" mt={1} sx={{ color:"#6524D3"}}>
              <IconButton color="inherit" sx={{pl:0, 
                '&:hover':{
                  color: "#46306D"
                }}}>
                <FacebookIcon />
              </IconButton  >
              <IconButton color="inherit" sx={{ pl:0,
                '&:hover':{
                  color: "#46306D"
                }}}>
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" sx={{pl:0, 
                '&:hover':{
                  color: "#46306D"
                }}}>
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Get The App */}
          <Grid item xs={12} md={3} color={"#6524D3"}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Get The App
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <IconButton color="inherit" sx={{ mb: 1, transition: "0.3s",borderRadius:"16px", 
              '&:hover':{
                backgroundColor: "#6524D3",
                color: "#f9f9f9",
                transition: "0.3s"
              } }} >
                <AppleIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>Download on the Apple Store</Typography>
              </IconButton>
              <IconButton color="inherit" sx={{ mb: 1, transition: "0.3s",borderRadius:"16px", 
              '&:hover':{
                backgroundColor: "#6524D3",
                color: "#f9f9f9",
                transition: "0.3s"
              } }} >
                <GoogleIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>Get it on Google Play</Typography>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            ©2024
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
