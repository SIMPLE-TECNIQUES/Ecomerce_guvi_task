import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import TopNavbar from "../../Components/Header/TopNavbar";
import ProductCard from "../../Components/Product/Card/ProductCard";

function AllProducts() {
  const { products } = useSelector((state) => state.products);
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <h4 className="mb-4">Showing Products from</h4>
        <Row>
          {products &&
            products.map((p) => {
              return (
                <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={p.id}>
                  <ProductCard product={p} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <div className="mb-5"></div>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8326352438365649"
     crossorigin="anonymous"></script>
      <Footer />
    </Fragment>
  );
}

export default AllProducts;
