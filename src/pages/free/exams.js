import { useState } from 'react';

import MainLayout from "@/layout/MainLayout";
import { Box, Breadcrumbs, Button, Container, Divider, Stack, Typography } from "@mui/material";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import Image from "next/image";
import HeroSectionPrime from "@/components/HeroSectionPrime";
import Link from "next/link";
import SingleChoise from "./_QuistionAnswers/SingleChoise";
import MultipleChoice from './_QuistionAnswers/MultibleChoise';
import MatchingQuestion from './_QuistionAnswers/Matching';

export default function Freeexam() {
    const [ShowCorrectAnswer, setShowCorrectAnswer] = useState(false)
    return (
        <MainLayout>
            <HeroSectionPrime
                bgColor={"rgba(101, 36, 211, 0.27)"}
                content={
                    <div className="h-screen py-5">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href={"#"}> Home </Link>
                            <Link href={"#"}> Free Vedios </Link>
                        </Breadcrumbs>

                        <Typography
                            variant="h3"
                            className=" font-bold mt-[20vh] text-[48px] max-w-[750px]"
                        >
                            Investing in yourself doesn't always have to come at a cost
                        </Typography>
                        <br />
                        <Typography
                            variant="body2"
                            className=" mt-[10vh] max-w-[750px] text-[20px]"
                        >
                            We have created a number of free courses to aid and support your
                            growth throughout your career. Refresh your skills or explore new
                            areas of learning to better adapt in our ever-evolving profession.
                        </Typography>
                    </div>
                }
            />
            <br/>
            <Container className="min-h-screen flex items-center justify-center">
                <Box sx={{
                    border: "2px solid #6524D3",
                    width: "100%",
                    borderRadius: "10px"
                }}>
                    <Container sx={{ paddingBlock: "20px" }}>
                        <Stack direction={"row"} className="flex items-center justify-between">
                            <Stack direction={"row"} className="flex items-center justify-start">
                                <Image width={50} height={50} src={"/assets/Images/IconExam.png"} alt="h" className="me-5" />
                                <Typography variant="h6" fontWeight={"bold"}>planning</Typography>

                            </Stack>
                            <Stack direction={"row"} className="flex items-center justify-start">
                                {/* <Image width={50} height={50} src={"/assets/Images/IconExam.png"} alt="h" className="me-5"/> */}

                                <Typography variant="h6" className="text-[#6524D3]" fontWeight={"bold"}><TimerOutlinedIcon /> 00:50:00</Typography>

                            </Stack>

                        </Stack>
                        <br />
                        <Divider />
                        <br />
                        <Box sx={{ padding: 2 }}>
                            <Typography variant="P" className="text-[#6524D3]" fontWeight={"bold"}>Quistion 1</Typography>

                            <Box
                                sx={{
                                    backgroundColor: "#6524D3",
                                    padding: 2,
                                    marginBlock: 1,
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" }, // 'column' on small screens, 'row' on medium and larger
                                    alignItems: "center", // Align items centrally
                                }}
                            >
                                <Typography variant="body1" className="text-[#ffffff]" sx={{ flex: 1 }}>
                                    Exercitation esse ex incididunt pariatur cupidatat. Ex ad in exercitation Lorem ad nulla enim sit commodo do. Mollit proident esse irure enim dolor consectetur laboris consectetur Lorem reprehenderit dolor.
                                </Typography>
                                <Image
                                    width={200}
                                    height={200}
                                    src="/assets/Images/tree-736885_640.jpg"
                                    alt="icon"
                                    className="mx-5 w-[50%]"
                                />
                            </Box>

                        </Box>
                        <Box className="my-5">
                            {/* <SingleChoise
                            showAnswer={ShowCorrectAnswer}
                                answers={['first', 'second', 'third']}
                                correct="second"
                            /> */}
                            {/* <MultipleChoice 
                            answers={["Option 1", "Option 2", "Option 3", "Option 4"]}
                            correct={["Option 1", "Option 3"]}
                            showAnswer={ShowCorrectAnswer}
                            /> */}
                            <MatchingQuestion/>
                        </Box>
                        <Divider />

                    </Container>

                    <Stack direction={"row"} className="flex items-center justify-between p-5">

                        <Button variant="contained" size="large" className="bg-[#6524D3] w-32">
                            previous
                        </Button>


                        <Button variant="contained" size="large" sx={{
                            backgroundColor: "white",
                            border: "2px solid #6524D3 ",
                            color: "#6524D3"
                        }} 
                        onClick={()=>setShowCorrectAnswer(!ShowCorrectAnswer)}
                        >
                            Show Answer
                        </Button>


                        <Button variant="contained" size="large" className="bg-[#6524D3] w-32">
                            next
                        </Button>

                    </Stack>
                </Box>
            </Container>
        </MainLayout>
    );
}