import products from "../data/products";
import ProductCard from "./ProductCard";   // ← BẮT BUỘC
import { Row, Col, Container } from "react-bootstrap";

function ProductList() {
  return (
    <Container className="my-4">
      <Row>
        {products.map((p) => (
          <Col md={4} key={p.id} className="mb-4">
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;