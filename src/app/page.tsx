import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

import { ProductsWrapper } from "@/components/ProductsWrapper";

export default async function Home() {
  return (
    <>
      <Header />
      <MainContent>
        <Container>
          <ProductsWrapper />
        </Container>
      </MainContent>
      <Footer />
    </>
  );
}
