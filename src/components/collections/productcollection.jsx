import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
// TO DO 1: Add State Management For Favourite Products

export default function ProductCollection({ paginatedProducts }) {

  return (
    <Box sx={{marginY:2}}>
      <Grid container spacing={2} justifyContent={"center"} >
      {paginatedProducts?.map((product) => (
        <Grid  key={product.id} item >
        <ProductCard
          _product={product}
        />
        </Grid>
      ))}
      </Grid>
    </Box> //hehe
  );
}
