import CustomizableCard from "@/components/Card";
import FreeVediosSection from "./_vediossections/FreeVedios";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Freevideos() {
  const CustomizeCard = () => (
    <CustomizableCard
      labelConfig={{
        top: "85%",
        left:"6%",
        labelCont: (
          <Box
            sx={{
              backgroundColor: "#6524D3",
              color: "white",
              padding: "4px 8px",
              borderRadius: "100px",
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"center"
            }}
          >
            <DateRangeIcon /> 25 June ,2024
          </Box>
        ),
      }}
      Image={{
        ImgPadded: true,
        ImgRounded: true,
        src: "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      }}
      CardCont={
        <Typography variant="h6" fontWeight={"bold"} color="primary">
          Free Videos
        </Typography>
      }
      CardButtomActions={
        <Stack
          direction="row"
          sx={{
            width: "100%",
            desplay: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline:1
          }}
        >
          <div className="flex items-center justify-center">
            <AccessTimeIcon /> 20:12:00
          </div>
          <Button aria-label="share">
            <PlayCircleOutlineIcon />
            play
          </Button>
        </Stack>
      }
    />
  );
  return (
    <div>
      <h1>Free Videos</h1>
      <FreeVediosSection />
      <CustomizeCard />
    </div>
  );
}
