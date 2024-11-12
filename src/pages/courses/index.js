import ProductCollection from "@/components/collections/productcollection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";

export default function Courses() {
  return (
    <>
      <Navbar />
      <Container>
      <ProductCollection />
      </Container>
      <Footer />
    </>
  );
}
