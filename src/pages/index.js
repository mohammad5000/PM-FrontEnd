import { Box, Button, Container, Typography, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import CustomerReview from "@/components/CustomerReview";
import HeroSectionPrime from "@/components/HeroSectionPrime";
import ContactForm from "@/components/Contact";
import ProductCollection from "@/components/collections/productcollection";
import products from "@/data/products";
import MainLayout from "@/layout/MainLayout";
import reviews from "@/data/review";

export default function Home() {
  return (
    <Stack direction="column">
      {/* <Navbar /> */}
      <MainLayout>
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
        <Container sx={{ marginY: 10 }}>
          <ProductHomeHeader />
          <ProductCat />
          <ProductCollection paginatedProducts={products.slice(0, 6)} />
        </Container>
        <WhyUsSection />
        <Container sx={{ marginY: 10 }}>
          <ContactForm />
        </Container>
        {/* <Footer /> */}
      </MainLayout>
    </Stack>
  );
}


Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

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
      <Typography
        className="pb-10"
        variant="h6"
        sx={{ color: "white", fontSize: { xs: '1rem', md: '1.5rem' } }} // Responsive font size
      >
        {Text}
      </Typography>
    </Stack>
  );

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#6524D3] to-[#007DA5] text-white text-center md:px-[144px] py-5">
      <Stack direction="column" sx={{ color: "white", width: "100%", pb: 10 }}>
        <Typography variant="h4" sx={{ color: "white", fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
          Why Study With Us?
        </Typography>
        <Typography variant="body1" sx={{ color: "white", fontSize: { xs: '1rem', md: '1.25rem' } }}>
          Why Study With Us?
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
        <Typography variant="h4" sx={{ color: "white", fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
          What Customers Says
        </Typography>
        <Typography variant="body1" sx={{ color: "white", fontSize: { xs: '1rem', md: '1.25rem' } }}>
          Our Happy Customer says about us
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent:   { xs: "center", md: "space-between" },
          paddingInline:"10px"
        }}
      >
<br/>
        {reviews.map((review, index) => (
          <><CustomerReview key={index} Review={review} /><br className="md:hidden"/></>
          
        ))}
      </Stack>
    </div>
  );
}


const ProductHomeHeader = () => {
  return (

    /* Title and Description */
    <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} justifyContent={"space-between"} sx={{ p: 4 }} textAlign={{ xs: 'center', md: 'left' }}>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Browse Our Courses
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          When known printer took a galley of type scramble make
        </Typography>
      </Box>
      {/* Button */}
      <Button
        variant="outlined"
        href="/courses"
        sx={{
          borderColor: "#6524D3",
          color: "#6524D3",
          fontWeight: "bolder",
          fontSize: "16px",
          height: "50px",
          marginTop: "10px",
          padding: "0px 60px",
          border: "4px solid #6524D3",
          borderRadius: "8px",
          transform: '0.3s',
          "&:hover": {
            color: "white",
            backgroundColor: "#6524D3",
            transform: "0.3s",
          },
        }}
      >
        View Courses
      </Button>
    </Box>
  );
};


const ProductCat = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    /* Tabs for Course Categories */
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center', mb: 2 }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="inherit"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#6524D3',
          },
          '& .Mui-selected': {
            color: '#6524D3', // Text color for selected tab
          },
        }}
      >
        <Tab label="All Courses" disableRipple />
        <Tab label="PMP 2024" disableRipple />
        <Tab label="PMP 2024" disableRipple />
        <Tab label="PMP 2024" disableRipple />
      </Tabs>
    </Box>
  )
};
