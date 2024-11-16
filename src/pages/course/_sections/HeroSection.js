import HeroSectionPrime from "@/components/HeroSectionPrime";
import StarRating from "@/components/StarRate";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import LanguageIcon from "@mui/icons-material/Language";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Image from "next/image";

export default function HeroCourse({
  title = "no Title Please Put one",
  Desctiption = "Consequat adipisicing proident dolor sint minim occaecat eu qui eu non. Velit occaecat dolor ex pariatur quis et ullamco velit. Consectetur dolor dolor magna in consequat officia amet ex proident ipsum nulla.",
  Image = "/assets/Images/defultImage.png",
}) {
  return (
    <HeroSectionPrime
      bgColor="gradient"
      imgSrc="/assets/Images/HomeHeroImage.png"
      content={
        <Box
          sx={{ color: "white", width: { xs: "100%", md: "100%", lg: "50%" } }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Advanced Course
          </Typography>
          <br />
          <Typography variant="p">
            Consequat adipisicing proident dolor sint minim occaecat eu qui eu
            non. Velit occaecat dolor ex pariatur quis et ullamco velit.
            Consectetur dolor dolor magna in consequat officia amet ex proident
            ipsum nulla.
          </Typography>

          <Stack direction={"row"} sx={{ marginTop: 2 }}>
            <Chip color={"info"} label="pm" />
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              marginBlock: 1,
              desplay: "flex",
              alignItems: { xs: "start", md: "center" },
            }}
          >
            <StarRating rating={4.5} />{" "}
            <Typography variant="p">
              {"( 8000 rating )  104,329 students"}
            </Typography>
          </Stack>
          <Typography variant="p">
            created by : eng Mohammed Mogahed{" "}
          </Typography>
          <Stack
            sx={{ marginBlock: 2 }}
            direction={"row"}
            flex={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <UpdateIcon />{" "}
              <Typography variant="p">Last updated 6/2024</Typography>
            </Box>
            <Box>
              <LanguageIcon />{" "}
              <Typography variant="p">Last updated 6/2024</Typography>
            </Box>
          </Stack>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            35.00 $
          </Typography>
          <br />
          <Stack direction={"row"} flex={"flex"} alignItems={"center"}>
            <Button className="bg-[#F65D11] text-white px-5 py-2 rounded-lg mr-5">
              <AddShoppingCartIcon /> Add to Cart
            </Button>
            <Button className="bg-white text-[#F65D11] px-5 py-2 rounded-lg ">
              <AttachMoneyIcon /> Add to Cart
            </Button>

            {/* <Button>data</Button> */}
          </Stack>
        </Box>
      }
    />
  );
}
