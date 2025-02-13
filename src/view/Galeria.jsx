import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Spinner, Alert } from "react-bootstrap";
import ProductCart from "../components/ProductCart"; // Asegúrate de que el nombre es correcto

const Galeria = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/data/tecnologia.json")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProductos(response.data);
        } else {
          console.error("Error: La respuesta no es un array", response.data);
          setError("Los datos no tienen el formato esperado.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setError("No se pudieron cargar los productos.");
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Galería de Productos</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="justify-content-center">
        {!loading &&
          !error &&
          productos.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
      </Row>
    </Container>
  );
};

export default Galeria;