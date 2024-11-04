import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Box from "@mui/material/Box";

export default function CustomizableCard({
    CardCont,
    CardButtomActions,
  Image = {
    src: "https://resources.gdevelop-app.com/gd.games/games-thumbnails/no-image-thumbnail.png",
    ImgRounded: false,
    ImgPadded: false,
  },
  labelConfig = {
    top: "75%",
    left: "5%",
    labelCont: <></>,
  },
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ position: "relative", padding: Image.ImgPadded ? 1 : 0 }}>
        <CardMedia
          component="img"
          height="194px"
          sx={{ height: "200px", borderRadius: Image.ImgRounded ? 2 : 0 }}
          image={Image.src}
          alt="Paella dish"
        />

        <Box
          sx={{
            position: "absolute",
            top: labelConfig.top,
            left: labelConfig.left,
          }}
        >
          {labelConfig.labelCont}
        </Box>
      </Box>
      <CardContent>
      {CardCont}
      </CardContent>
      <CardActions disableSpacing>
        {CardButtomActions}
      </CardActions>
    </Card>
  );
}
