// Import required components from MUI
import { Box, Typography, TextField, Button, Card } from "@mui/material";
import { Grid2 } from "@mui/material";
import Container from "@mui/material/Container";

export default function ContactForm() {
  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      {/* Left side with image and text */}
      <Grid2
        display={{ xs: "none", md: "flex" }}
        item
        xs={12}
        md={6}
        sx={{ position: "relative" }}
      >
        <Box
          component="img"
          src="https://media.istockphoto.com/id/1086346530/photo/happy-support-center-worker-working-on-his-computer.jpg?s=612x612&w=0&k=20&c=zeWfgByXKxiXbsEdfvbCXjDvlG-mVa7rb0NNPnA1wX0=" // replace with your image path
          alt="Contact Background"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            padding: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 300}}>
            Happiness prosperous impression had conviction For every delay in
            they
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginTop: 0}}
          >
            Mohamed Mujahid
          </Typography>
          <Typography variant="caption" sx={{ marginTop: -1 }}>CEO & Founder</Typography>
        </Box>
      </Grid2>

      {/* Right side with form */}
      <Grid2
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#E0D7FF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Typography variant="p" sx={{ fontWeight: "bold", mb: 1,fontSize:24 }}>
          How Can We Help?
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, textAlign: "center" }}>
          Have a question or feedback? Fill out the form below, and we will get
          back to you as soon as possible.
        </Typography>

        <TextField
          label="First Name"
          variant="outlined"
          sx={{
            mb: 2,
            bgcolor: "#fff",
            width: {
              xs: "250px",
              sm: "335px",
              md: "60%",
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          sx={{
            mb: 2,
            bgcolor: "#fff",
            width: {
              xs: "250px",
              sm: "335px",
              md: "60%",
            },
          }}
          placeholder="Enter your Email Address"
        />
        <TextField
          label="Title"
          variant="outlined"
          sx={{
            mb: 2,
            bgcolor: "#fff",
            width: {
              xs: "250px",
              sm: "335px",
              md: "60%",
            },
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          sx={{
            mb: 2,
            bgcolor: "#fff",
            width: {
              xs: "250px",
              sm: "335px",
              md: "60%",
            },
          }}
          multiline
          rows={4}
        />

        <Button
          variant="contained"
          onClick={() => alert("Form submitted")}
          sx={{ bgcolor: "#6A1B9A", color: "#fff", px: 5 }}
        >
          Submit
        </Button>
      </Grid2>
    </Card>
  );
}
