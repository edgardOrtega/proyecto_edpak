import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useHistory } from "../context/HistoryContext";

const Historial = () => {
  const { history } = useHistory();

  return (
    <Container className="mt-5 text-center">
      <h2 className="fw-bold mb-4">HISTORIAL DE COMPRAS</h2>

      {history.length > 0 ? (
        history.slice().reverse().map((purchase) => (
          <Card
            key={purchase.id}
            className="mb-4 shadow-sm"
            style={{
              border: "3px solid yellow",
              maxWidth: "750px",
              margin: "0 auto",
              padding: "15px",
            }}
          >
            <Card.Body>
              <h5 className="fw-bold">Compra realizada el {purchase.date}</h5>
              <h6 className="fw-bold text-success">Total: ${purchase.total}</h6>
              <Row className="justify-content-center">
                {purchase.products.map((product) => (
                  <Col key={product.id} md={3} className="text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                      style={{ maxWidth: "80px", height: "auto" }}
                    />
                    <p className="fw-bold">{product.name}</p>
                    <p>Cantidad: {product.quantity}</p>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h5 className="text-center mt-4">No hay compras registradas</h5>
      )}
    </Container>
  );
};

export default Historial;
