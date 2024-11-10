import Container from "@mui/material/Container";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import {Product}  from "../types/Products";
import { Box,  Grid2 } from "@mui/material";


// Base URL for Fake Store API
const BASE_URL = "https://fakestoreapi.com";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Box>Something went wrong, please try again!</Box>;
  }

  return (
    
    <Container sx={{ mt: 2 }}>
        <div style={{marginTop:'60px'}}/>  {/* Add space above the product cards */}
      <Grid2 container spacing={2}>
        {products.map((p) => (
          <Grid2 size={{xs:12, sm:5, md:4}}  >
            <ProductCard {...p} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default HomePage;
