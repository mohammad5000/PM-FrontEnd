import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
/**
 *
 * @param {*} lineHeight for line hight of paragraph
 * @param Align For Text Algin
 * @param position for justify and algin
 * @param btnAppear for disappear button or not
 * @param bgColor for brightness and gradient
 * @param widthToggle for content width in about and service
 * @param imgSrc image path
 * @param title of title of hero Section
 * @param content for content of hero Section
 * @param bgCont for content of hero Section
 *  * @param SideImage for content of hero Section


 * @returns
 */
export default function HeroSectionPrime({
  lineHeight,
  Align,
  position,
  btnAppear = false,
  imgSrc,
  bgColor,
  title,
  content,
  widthToggle,
  Height = "100vh",
  SideImage,
}) {
  return (
    <>
      <Box
        component={"section"}
        sx={{
          height: "100vh",
          width: "100%", // w-full
          position: "relative", // relative
          display: "flex", // flex
          flexDirection: "column", // flex-col
          justifyContent: "center", // justify-center
          alignItems: "center", // items-center
          zIndex: 40, // z-40
          backgroundColor: `${bgColor}`, // bg-white
          minHeight: "500px", // Set minimum height
        }}
      >
        <Box></Box>

        <Box
          sx={{
            width: "100%", // w-4/5 (80%)
            color: "black", // text-white
            display: "flex", // flex
            flexDirection: "row", // flex-col
            justifyContent: position === "s" ? "flex-start" : "center", // justify-start / justify-center
            alignItems: position === "s" ? "flex-start" : "center", // items-start / items-center
            gap: 2, // gap-5 (Material-UI uses a spacing scale, 5 = 40px)
            paddingX: {xs:"20px",md:"144px"},
          }}
        >
          <Box
            variant="div" // Sets the Box variant to h2
            sx={{
              display: "flex", // flex
              flexDirection: "column", // flex-col
              width:"100%"
            }}
            // className="bg-red-400"
          >


            
            <Container>
              
            <Box
              variant="div" // Sets the Box variant to h2
              sx={{
                fontFamily: "hookrideFont", // Custom font family
                width: { xs: "100%", md: "100%" } // Responsive width: 100% on small screens, 60% on medium and larger screens
              
              }}
            >
              {title}
            </Box>

            <Box
              variant="div" // Sets the Box variant to body1 (for small text)
              sx={{
                fontSize: { xs: "0.875rem", md: "1.125rem" }, // text-sm (14px), md:text-lg (18px)
                width: "100%", // Conditional width based on widthToggle
                lineHeight: lineHeight, // Use lineHeight prop for custom line height
              }}
            >
              {content}
            </Box>
            </Container>


          </Box>
          {SideImage && (
            <Box
              sx={{
                variant: "dev", // This may not apply as expected. Use sx prop for styling.
                display: {xs:"none",sm:"flex"}, // Optional: Adjusts layout for Box
                justifyContent: "center", // Center the content if needed
                alignItems: "center", // Center the content if needed
                width: "60%", // Adjust the width as needed
                height: "auto", // Height can be adjusted based on requirements
              }}
            >
              <Image
                src={SideImage}
                alt="About Hero Section"
                height={500}
                width={500}
                style={{ objectFit: "cover" }} // Ensure proper fitting of the image
              />
            </Box>
          )}
        </Box>


        {imgSrc && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            overflow: "hidden",
            zIndex: -10,
            top: 0,
            "&:after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,

              ...(bgColor === "gradient"
                ? {
                    background:
                      "linear-gradient(to right, #005CB9, rgba(30, 144, 255, 0.3))",
                    opacity: 0.8,
                  }
                : {
                    filter: "brightness(0.5)",
                  }),
            },
          }}
        >
          <Image
            src={imgSrc}
            alt="About Hero Section"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Maintains aspect ratio and covers the area
            priority // Optionally set to load this image first
          />
        </Box>
        )}
      </Box>
    </>
  );
}
