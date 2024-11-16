import MainLayout from "@/layout/MainLayout";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import Image from "next/image";

export default function Freeexam() {
    return (
        <MainLayout>
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
                        <Box>
                            
                        </Box>
                        <Divider />

                    </Container>

                    <Stack direction={"row"} className="flex items-center justify-between p-5">

                            <Button variant="contained" size="large" className="bg-[#6524D3] w-32">
                                previous
                            </Button>

                      
                            <Button variant="contained" size="large" sx={{
                                backgroundColor:"white",
                                border:"2px solid #6524D3 ",
                                color:"#6524D3"
                            }} >
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
