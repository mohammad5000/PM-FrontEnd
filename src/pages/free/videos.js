import VideoCollection from "@/components/collections/VideoCollection";
import VideoCard from "@/components/VideoCard";
import MainLayout from "@/layout/MainLayout";

import { Container } from "@mui/material";
export default function Freevideos() {
  return(
    <MainLayout>
    <Container sx={{marginTop:15}}>
    <VideoCollection/>
  </Container>
  </MainLayout>
  )
  
}
