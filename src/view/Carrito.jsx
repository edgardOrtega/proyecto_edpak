import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useHistory } from "../context/HistoryContext";
import { useNavigate } from "react-router-dom"; // 🚀 Importamos useNavigate para redirección
import Swal from "sweetalert2"; // 🚀 Importamos SweetAlert2

const Carrito = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const { addToHistory } = useHistory();
  const navigate = useNavigate(); // 🚀 Hook para redirigir al historial

  // Función para comprar: Mueve el carrito al historial, muestra SweetAlert y redirige
  const handlePurchase = () => {
    if (cart.length > 0) {
      addToHistory(cart); // ✅ Mueve la compra al historial
      clearCart(); // ✅ Vacía el carrito después de la compra
      
      Swal.fire({
        title: "¡Compra realizada con éxito!",
        text: "Tu compra ha sido registrada correctamente.",
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        navigate("/historial"); // ✅ Redirección al historial después de la compra
      });
    }
  };

  return (
    <Container className="mt-5 text-center">
      <h2 className="fw-bold mb-4">LISTADO DEL CARRITO</h2>

      {cart.length > 0 ? (
        cart.map((product) => (
          <Row
            key={product.id}
            className="my-3 mx-auto p-3 shadow-sm rounded-3"
            style={{
              border: "3px solid yellow",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "850px",
              padding: "15px",
            }}
          >
            {/* Imagen del producto */}
            <Col md={3} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </Col>

            {/* Información del producto */}
            <Col md={5}>
              <h5 className="fw-bold">{product.name.toUpperCase()}</h5>
              <p>
                <strong>Descripción:</strong> {product.description}
              </p>
              <p>
                <strong>Precio:</strong> ${product.price}
              </p>
            </Col>

            {/* Botones de cantidad */}
            <Col md={2} className="text-center">
              <Button
                variant="light"
                className="fw-bold border"
                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                disabled={product.quantity <= 1}
              >
                -
              </Button>
              <span className="mx-2">{product.quantity}</span>
              <Button
                variant="light"
                className="fw-bold border"
                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                disabled={product.quantity >= product.stock}
              >
                +
              </Button>
            </Col>

            {/* Botón de eliminar */}
            <Col md={2} className="text-center">
              <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                Eliminar
              </Button>
            </Col>
          </Row>
        ))
      ) : (
        <h5 className="text-center mt-4">No hay productos en el carrito</h5>
      )}

      {/* Botones "Vaciar Carrito" y "Comprar" */}
      {cart.length > 0 && (
        <div className="text-center mt-4">
          <Button variant="dark" className="w-40 mb-3" onClick={clearCart}>
            Vaciar Carrito
          </Button>
          <Button variant="success" className="w-40 mb-3" onClick={handlePurchase}>
            Comprar
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Carrito;
