import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import videos from "@/data/video";
import VideoCard from "@/components/VideoCard";
// TO DO 1: Add State Management For Favourite Products

export default function VideoCollection({ }) {

  return (
    <Box sx={{marginY:2}}>
      <Grid container spacing={2} justifyContent={"center"} >
      {videos?.map((video) => (
        <Grid  key={video.id} item >
        <VideoCard
          video={video}
        />
        </Grid>
      ))}
      </Grid>
    </Box> //hehe
  );
}
