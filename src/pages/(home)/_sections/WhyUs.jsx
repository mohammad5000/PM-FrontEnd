import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomerReview from "@/components/CustomerReview";

// export function Home() {
//   return (
//     <Stack
//       spacing={2}
//       direction="column"
//       className="flex flex-col items-center justify-center"
//     >
//       <WhyUsSection />
//     </Stack>
//   );
// }


// // -----------------------------------------------------------

export default function WhyUsSection() {
  const CircledInfo = ({
    ImageSource = "/assets/Images/defultImage.png",
    Text = "",
  }) => (
    <Stack
      spacing={2}
      direction="column"
      className="flex flex-col items-center justify-center"
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
      <Typography variant="h6" sx={{ color: 'white' }}>{Text}</Typography>
      {/* <h3 className="text-white">{Text}</h3> */}
    </Stack>
  );

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#6524D3] to-[#007DA5] text-white text-center px-[144px] py-5">
      <Stack spacing={2} direction="column" sx={{ color: 'white', width: '100%' ,pb: 5}} >
      <Typography variant="h4" sx={{ color: 'white' }}>Why Study With Us?</Typography>
      <Typography variant="p" sx={{ color: 'white' }}>Why Study With Us?</Typography>

      </Stack>
      <Stack
        spacing={2}
        direction="row"
        className="w-full flex flex-row items-center justify-between"
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

      <br /><br /><br />

      <Stack spacing={2} direction="column" sx={{ color: 'white', width: '100%' ,pb: 5}} >
      
        <Typography variant="h4" sx={{ color: 'white' }}>What Customers Says</Typography>
        <Typography variant="p" sx={{ color: 'white' }}>Our Happy Customer says about us</Typography>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        className="w-full flex flex-row items-center justify-between "
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
