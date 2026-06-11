import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList() {
  return (
    <Row className="g-4">
      {products.map(p => (
        <Col md={4} key={p.id}>
          <ProductCard product={p} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;