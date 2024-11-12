import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import initial_products from "@/data/products";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

// TO DO 1: Add State Management For Favourite Products

export default function ProductCollection() {
  const [products, setProducts] = useState(initial_products);
  // Toggle favorite status
  const toggleFavorite = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  return (
    <Box sx={{marginY:2}}>
      <Grid container spacing={2} justifyContent={"center"} >
      {products.map((product) => (
        <Grid  key={product.id} item >
        <ProductCard
          product={product}
          onToggleFavorite={() => toggleFavorite(product.id)}
        />
        </Grid>
      ))}
      </Grid>
    </Box> //hehe
  );
}
