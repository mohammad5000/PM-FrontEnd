import VideoCollection from "@/components/collections/VideoCollection";
import HeroSectionPrime from "@/components/HeroSectionPrime";
import VideoCard from "@/components/VideoCard";
import MainLayout from "@/layout/MainLayout";

import { Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "next/link";
export default function Freevideos() {
  return(
    <MainLayout>
      
            <HeroSectionPrime

        bgColor={"rgba(101, 36, 211, 0.27)"}
        content={
          <div className="h-screen py-5">
            <Breadcrumbs aria-label="breadcrumb">
              <Link href={"/"}> Home </Link>
              <Link href={"/free/video"}> Free Videos </Link>
            </Breadcrumbs>

            <Typography
              variant="h3"
              className=" font-bold mt-[20vh] w-full leading-snug md:leading-relaxed text-4xl md:text-[48px] md:max-w-[750px]"
            >
              Investing in yourself does not always have to come at a cost
            </Typography>
            <br />
            <Typography
              variant="body2"
              className=" mt-[10vh] w-full md:max-w-[750px] text-[20px]"
            >
              We have created a number of free courses to aid and support your
              growth throughout your career. Refresh your skills or explore new
              areas of learning to better adapt in our ever-evolving profession.
            </Typography>
          </div>
        }
      />
    <Container sx={{marginTop:15}}>
    <VideoCollection/>
  </Container>
  </MainLayout>
  )
  
}
