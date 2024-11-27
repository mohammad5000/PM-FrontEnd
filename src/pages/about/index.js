import ContactForm from "@/components/Contact";
import { Box, Container, Typography } from "@mui/material";
import AboutHeader from "./_sections/AboutHeader";

import VisionSection from "./_sections/VisionSection";
import MissionSection from "./_sections/MissionSection";
import CEOSection from "./_sections/CEO";
import MainLayout from "@/layout/MainLayout";
import ValuesSection from "./_sections/ValuesSection";


export default function About() {
  return (
    <>
      <MainLayout>
      <AboutHeader />
      <Container maxWidth="lg" sx={{my:10}}>
        <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mt: 4, mb: 2 }} align="center">
          Who Are We
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center">
        At PM-Academy, we are committed to transforming project management education by providing practical, real-world training that goes beyond traditional learning. Founded by Eng. Mohamed Megahed, a seasoned project management professional with over 24 years of experience, our academy offers a comprehensive suite of courses designed to meet the needs of today’s learners. 
Our approach blends theoretical knowledge with hands-on application, empowering learners to excel in their careers.
        </Typography>
        </Box>
        <VisionSection />
        <MissionSection />
        <ValuesSection/>
      </Container>
      <CEOSection />
      <Box>
        <Container maxWidth="md" sx={{my:10}}>
          <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mt: 4, mb:"3px" }} align="center">
            Contact Us
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center" sx={{mb:5}}>
            Have a question or need help? Feel free to reach out to us using the form below.
          </Typography>
          <ContactForm />
        </Container>
      </Box>
      </MainLayout>
    </>
  );
}
