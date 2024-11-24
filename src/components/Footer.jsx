import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function Footer() {
  return (
    <Box sx={{ mt: 5, pt: 5, justifyContent: "center" }}>
      <Container maxWidth={"lg"} disableGutters>
        <Grid
          container
          spacing={{ xs: 2, md: 6, lg: 10 }}
          justifyContent={"center"}
          direction={{ xs: "column", md: "row" }}
          sx={{ pl: 2 }}
        >
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Image
                src="/assets/Images/Logo_nav.png"
                alt="PM Academy Logo"
                width={175}
                height={175}
                style={{ borderRadius: "8px" }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                align="left"
                sx={{ paddingY: 2 }}
              >
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
                <br />
                Nunc vulputate libero et velit interdum,
                <br /> ac aliquet odio mattis.
              </Typography>
            </Box>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Useful Links
            </Typography>
            <Box display="flex" alignItems="flex-start" my={2}>
              <InfoOutlinedIcon
                fontSize="small"
                sx={{ mr: "8px", color: "#6524D3" }}
              />
              <Link
                href="\about"
                variant="body2"
                color="textSecondary"
                fontSize={"14px"}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#6524D3",
                  },
                }}
              >
                About Us
              </Link>
            </Box>
            <Box display="flex" alignItems="flex-start" my={2}>
              <MenuBookOutlinedIcon
                fontSize="small"
                sx={{ mr: "8px", color: "#6524D3" }}
              />
              <Link
                href="/free/videos"
                variant="body2"
                color="textSecondary"
                fontSize={"14px"}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#6524D3",
                  },
                }}
              >
                Free Resources
              </Link>
            </Box>
            <Box display="flex" alignItems="flex-start" my={2}>
              <AutoStoriesIcon
                fontSize="small"
                sx={{ mr: "8px", color: "#6524D3" }}
              />
              <Link
                href="#"
                variant="body2"
                color="textSecondary"
                fontSize={"14px"}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#6524D3",
                  },
                }}
              >
                Courses
              </Link>
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="flex-start" mt={2}>
              <EmailIcon
                fontSize="small"
                sx={{ mr: "8px", color: "#6524D3" }}
              />
              <Typography variant="body2">example@example.com</Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" mt={2}>
              <PhoneIcon
                fontSize="small"
                sx={{ mr: "8px", color: "#6524D3" }}
              />
              <Typography variant="body2"> +0000000000</Typography>
            </Box>
            <Box alignItems="flex-start" mt={1} sx={{ color: "#6524D3" }}>
              <IconButton
                color="inherit"
                sx={{
                  pl: 0,
                  "&:hover": {
                    color: "#46306D",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  pl: 0,
                  "&:hover": {
                    color: "#46306D",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  pl: 0,
                  "&:hover": {
                    color: "#46306D",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Get The App */}
          <Grid item xs={12} md={3} color={"#6524D3"}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Get The App
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              sx={{ pb: 2 }}
            >
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
              <br />
              Nunc vulputate libero et velit interdum,
              <br /> ac aliquet odio mattis.
            </Typography>
            <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent={"space-between"}>
              <IconButton
                color="inherit"
                className="me-2"
                sx={{
                  mb: 2,
                  transition: "0.3s",
                  borderRadius: "16px",
                  border: "1px solid #6524D3",
                  "&:hover": {
                    backgroundColor: "#6524D3",
                    color: "#f9f9f9",
                    transition: "0.3s",
                  },
                }}
              >
                <AppleIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  App Store
                </Typography>
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  mb: 2,
                  transition: "0.3s",
                  borderRadius: "16px",
                  border: "1px solid #6524D3",
                  "&:hover": {
                    backgroundColor: "#6524D3",
                    color: "#f9f9f9",
                    transition: "0.3s",
                  },
                }}
              >
                <GoogleIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Google Play
                </Typography>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box mt={5} textAlign="center" sx={{ backgroundColor: "#E0E0E0", paddingY:1}}>
        <Typography variant="body2" color="black">
          ©2024
        </Typography>
      </Box>
    </Box>
  );
}
