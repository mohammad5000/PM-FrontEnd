import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Overview({ 
    image_src = "/assets/Images/tree-736885_640.jpg", 
    Requirements = [
        "Nisi occaecat voluptate velit nisi.",
        "Est nostrud laboris proident anim aute.",
        "Pariatur adipisicing voluptate irure do velit amet culpa sit Lorem sunt sint sint velit."
    ], 
    Description = "Ut id esse esse irure culpa consectetur. Dolore et quis sint cillum irure commodo quis laborum commodo duis dolore ut qui. Deserunt adipisicing nulla esse eu elit labore elit sit sunt velit. In qui nisi dolore ad cillum sunt ipsum occaecat proident ex cillum ea. Tempor officia deserunt adipisicing dolor officia. Duis occaecat et anim deserunt cillum Lorem enim aute dolor laborum sit culpa incididunt tempor. Est veniam proident aliquip ipsum."
}) {
    return (
        <Container className="mt-10">
            <Stack direction="column">
                <Grid container spacing={2}>
                    {/* Right Container (Course Requirements) */}
                    <Grid item xs={12} sm={6}>

                        <Container>
                            <Image
                                width={100}
                                height={100}
                                className="w-full"
                                src={image_src}  // Allow dynamic image source
                                alt="course image"
                            />
                        </Container>
                    </Grid>

                    {/* Left Container (Image) */}
                    <Grid item xs={12} sm={6}>
                    <Container>
                            <TitleText text={"Course Requirements:"} />
                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                {Requirements.map((requirement, index) => (
                                    <li key={index}>{requirement}</li>
                                ))}
                            </ul>
                        </Container>
                    </Grid>
                </Grid>

                {/* Course Description */}
                <Container className="mt-10">
                    <TitleText text={"Course Description:"} />
                    <Typography variant="body1" className="text-gray-700 dark:text-gray-300">
                        {Description}
                    </Typography>
                </Container>
            </Stack>
        </Container>
    );
}

// TitleText Component
function TitleText({ text }) {
    return (
        <>
            <h2 className="mb-1 text-lg font-semibold text-[#6524D3]">
                {text}
            </h2>
            <div className="mb-2 bg-[#6524D3] w-[90px] h-2 rounded-2xl" />
        </>
    );
}
