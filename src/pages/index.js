import Stack from "@mui/material/Stack";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import CustomerReview from "@/components/CustomerReview";
import HeroSectionPrime from "@/components/HeroSectionPrime";

export default function Home() {
  return (
    <Stack direction="column">
      <HeroSectionPrime
        Height=""
        SideImage={"/assets/Images/HomeHeroImage.png"}
        title={
          <Typography
            variant="h3"
            sx={{
              color: "#000000", // Change color for xs size, inherit for larger sizes
              fontSize: { xs: "24px", md: "32px" }, // Responsive font size
              fontWeight: "bold",
            }}
          >
            Get Best
            <span style={{ color: "#6524D3" }}> Project Management</span> Online
            Courses with PM Academy
          </Typography>
        }
        content={
          <Stack direction="column">
            <Typography
              variant="p"
              sx={{
                color: "#000000", // Change color for xs size, inherit for larger sizes
                fontSize: { xs: "20px", md: "20px" }, // Responsive font size
              }}
            >
              Start, switch, or advance your career in project management with
              PM Academy Online Courses, Professional Certificates, and
              Specialized Training Programs.{" "}
            </Typography>
            <br />
            <Stack direction="row">
              <Button
                variant="contained"
                sx={{ marginRight: 1, backgroundColor: "#6524D3" }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginRight: 1, // margin on the right
                  color: "#6524D3", // text color
                  borderColor: "#6524D3", // border color
                  borderWidth: 2, // border width
                  "&:hover": {
                    borderColor: "#5E2EAB", // Optional: change border color on hover
                    backgroundColor: "rgba(101, 36, 211, 0.1)", // Optional: background color on hover
                  },
                }}
              >
                Courses
              </Button>
            </Stack>
          </Stack>
        }
        imgSrc={"/assets/Images/HOME Hero.png"}
      />

      <WhyUsSection />
    </Stack>
  );
}

// -----------------------------------------------------------

function WhyUsSection() {
  const CircledInfo = ({
    ImageSource = "/assets/Images/defultImage.png",
    Text = "",
  }) => (
    <Stack
      spacing={2}
      direction="column"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "4px solid white",
          backgroundColor: "#F65D11",
          paddingX: 4,
          paddingY: 4,
        }}
      >
        <Image
          src={ImageSource}
          alt={Text}
          height={500}
          width={500}
          className="w-full h-full object-cover drop-shadow-3xl"
        />
      </Box>
      <Typography variant="h6" sx={{ color: "white" }}>
        {Text}
      </Typography>
      {/* <h3 className="text-white">{Text}</h3> */}
    </Stack>
  );

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#6524D3] to-[#007DA5] text-white text-center md:px-[144px] py-5">
      <Stack direction="column" sx={{ color: "white", width: "100%", pb: 5 }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          Why Study With Us?
        </Typography>
        <Typography variant="p" sx={{ color: "white" }}>
          Why Study With Us?
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on medium and larger screens
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CircledInfo
          ImageSource="/assets/Images/IconExam.png"
          Text="Expert-Led and Globally Recognized"
        />
        <CircledInfo
          ImageSource="/assets/Images/IconCourses.png"
          Text="Advanced PMP Exam Simulation"
        />
        <CircledInfo
          ImageSource="/assets/Images/IconCert.png"
          Text="Flexible, Time Saved, Online Learning"
        />
      </Stack>

      <br />
      <br />
      <br />

      <Stack
        spacing={2}
        direction="column"
        sx={{ color: "white", width: "100%", pb: 5 }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          What Customers Says
        </Typography>
        <Typography variant="p" sx={{ color: "white" }}>
          Our Happy Customer says about us
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on medium and larger screens
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomerReview
          ImageSource="/assets/Images/IconExam.png"
          Text="Expert-Led and Globally Recognized"
        />
        <CustomerReview
          ImageSource="/assets/Images/IconExam.png"
          Text="Expert-Led and Globally Recognized"
        />
        <CustomerReview
          ImageSource="/assets/Images/IconExam.png"
          Text="Expert-Led and Globally Recognized"
        />
      </Stack>
    </div>
  );
}
