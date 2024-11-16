import ContactForm from "@/components/Contact";
import { Box, Container, Typography } from "@mui/material";
import AboutHeader from "./_sections/AboutHeader";

import VisionSection from "./_sections/VisionSection";
import MissionSection from "./_sections/MissionSection";
import CEOSection from "./_sections/CEO";
import MainLayout from "@/layout/MainLayout";


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
          PM-Academy is a leading provider of project management training and certification. We offer a variety of courses and programs to help you achieve your goals. Our mission is to provide you with the knowledge and skills you need to succeed in your career.
        </Typography>
        </Box>
        <VisionSection />
        <MissionSection />
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
