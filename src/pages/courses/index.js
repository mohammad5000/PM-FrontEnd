import ProductCollection from "@/components/collections/productcollection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import initial_products from "@/data/products";
import Box from "@mui/material/Box";
import CoursesHeader from "./_sections/heroSection";

import { dataInstructors } from "@/data/instructors";
import { dataCats } from "@/data/cat";
import { Pagination, Select } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6524D3",
    },
  },
});

export default function Courses({}) {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") ?? 1);
  const [filteredProducts, setFilteredProducts] = useState(initial_products);
  const [category, setCategory] = useState(searchParams.get("cat") || "" );
  const [instructor, setInstructor] = useState(searchParams.get("instructor") || "");
  const itemsPerPage = 6;
  const startIndex = (Number(page) - 1) * itemsPerPage;
  const entries = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const router = useRouter();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setPage(1);
    router.push(`/courses?cat=${event.target.value}&instructor=${instructor}`);
  };
 
  const handleInstructorChange = (event) => {
    setInstructor(event.target.value);
    setPage(1);
    router.push(`/courses?cat=${category}&instructor=${event.target.value}`);
  };
  
  // useEffect(()=>{
  //     setCategory(searchParams.get("cat") || "");
  // },[searchParams.get("cat")])

  useEffect(() => {
    const filtered = initial_products.filter(
      (product) =>
        (category === ""   || product.category === category) &&
        (instructor === "" || product.instructor === instructor)
    );
    setFilteredProducts(filtered);
  },[category,instructor])

  console.log(searchParams.get("cat"));

  return (
    <>
      <Navbar />
      <CoursesHeader />
      <Container sx={{ marginY: 10 }} disableGutters>
        <Container>
          <Box>
          <FormControl sx={{ width: "150px" ,marginLeft:{lg:14}}}>
            <InputLabel id="category-select-label" sx={{}}>
              Categories
            </InputLabel>

            <Select
              labelId="category-select-label"
              id="category-select"
              defaultValue={category}
              value={category}
              label="Categories"
              onChange={handleCategoryChange}
            >
              <MenuItem value={""}>all</MenuItem>

              {dataCats.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: "150px", marginLeft: 2 }}>
            <InputLabel id="instructor-select-label">Instructors</InputLabel>
            <Select
              labelId="instructor-select-label"
              id="instructor-select"
              defaultValue={instructor}
              value={instructor}
              label="Instructors"
              onChange={handleInstructorChange}
            >
              <MenuItem value={""}>all</MenuItem>

              {dataInstructors.map((instructor) => (
                <MenuItem key={instructor} value={instructor}>
                  {instructor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Box>
        </Container>
        
        <ProductCollection paginatedProducts={entries} />

        <ThemeProvider theme={theme}>
          <Pagination
            page={Number(page)}
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            onChange={handlePageChange}
            color="primary"
            sx={{ "& .MuiPagination-ul": { justifyContent: "center" } }}
          />
        </ThemeProvider>
      </Container>
      <Footer />
    </>
  );
}
