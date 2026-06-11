import { Card, Button, Badge } from "react-bootstrap";

function ProductCard({ product }) {
  const isAvailable = product.status === "In stock";;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "250px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>

        <Badge bg={isAvailable ? "success" : "secondary"}>
          {product.status}
        </Badge>

        <div className="mt-3">
          <Button
            variant={isAvailable ? "primary" : "secondary"}
            disabled={!isAvailable}
          >
            <i className="bi bi-cart-plus me-1"></i>
            {isAvailable ? "Add to Cart" : "Sold Out"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;