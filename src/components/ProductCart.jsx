import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card
      style={{ width: "16rem", border: "2px solid yellow", textAlign: "center", padding: "15px" }}
      className="p-4 m-4 shadow-lg rounded-4"
    >
      <Card.Body>
        <Card.Title className="fw-bold mb-3">{product.name}</Card.Title>
        <Card.Img variant="top" src={product.image} alt={product.name} className="mb-3"
          style={{ width: "100%", height: "auto" }} />
        <Card.Text className="mb-2">
          <strong>Descripción:</strong> {product.description}
        </Card.Text>
        <Row className="justify-content-between align-items-center mb-3 px-2">
          <Col className="text-start"><strong>Precio:</strong> ${product.price}</Col>
          <Col className="text-end"><strong>Stock:</strong> {product.stock}</Col>
        </Row>
        <Button
          variant="warning"
          className="fw-bold w-100 rounded-pill py-2"
          onClick={() => addToCart(product)}
        >
          AGREGAR
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
