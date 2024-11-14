import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import { useState } from "react";
 
// TO DO 1: Update all the hard-coded values with the theme values



function ProductCard({ _product, onToggleFavorite }) {
  const [product, setProduct] = useState(_product);

  const onToggleFav =() => {
    setProduct({...product, isFavorite: !product.isFavorite});
  }
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        maxWidth: 300,
        my: 2,
      }} //hehe tany
    >
      {/* Image and Category Badge */}
      <Box position="relative">
        <CardMedia
          component="img"
          height="200"
          image={product.image} // replace with the actual image URL
          alt="Course Image"
        />
        <Link href={`/courses/${product.category}`}>
        <Chip
          label={product.category}
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            fontSize: "0.75rem",
            fontWeight: "bold",
            backgroundColor: "#6524D3",
            color: "white",
            '&:hover':{
              textDecoration: "underline",
            }
          }}
        />
        </Link>
        <IconButton
          onClick={onToggleFav}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: product.isFavorite ? "grey.200" : "grey.600",
            color: product.isFavorite ? "#E04844" : "white",
            opacity: 0.8,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "grey.200",
              color: product.isFavorite ? "red" : "#E04844",
              transition: "0.5s",
            },
          }}
        >
          {product.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>

      {/* Card Content */}
      <CardContent>
        {/* Duration and Lessons */}
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {product.duration} hours
          </Typography>
          <MenuBookIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {product.lessons} Lesson
          </Typography>
        </Stack>

        {/* Title */}
        <Link href={`/course/${product.id}`}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ mt: 1, fontWeight: "bold" , 
            '&:hover':{
              color: '#6524D3',
              textDecoration: "underline",
            } }}
        >
          {product.title}
        </Typography>
        </Link>

        {/* Author */}
        <Link href={`#`}>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 , 
        '&:hover':{
          color: '#6524D3',
          textDecoration: "underline",
        } }}>
          {product.instructor}
        </Typography>
        </Link>

        {/* Rating */}
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {product.rating}{" "}
          </Typography>
          <Rating
            size="small"
            name="read-only"
            value={product.rating}
            readOnly
            precision={0.5}
            sx={{
              color: "#6524D3",
              "& .MuiRating-icon": {
                marginX: "-1.5px",
              },
            }}
          />
        </Stack>
      </CardContent>
      {/* Enroll Button and Price */}
      <CardActions
        sx={{
          borderTop: "1px #E1E1E5 solid ",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Button
          variant="text"
          sx={{
            color: "#6524D3",
            fontWeight: "bold",
            borderRadius: "10px",
            "&:hover": { color: "#fff", backgroundColor: "#6524D3" },
          }}
        >
          Enroll Now
        </Button>
        <Typography variant="text" sx={{ color: "#6524D3", fontWeight: "bold" }}>
          ${product.price}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
