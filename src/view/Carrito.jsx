import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useHistory } from "../context/HistoryContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Carrito = ({ actualizarStock }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const { addToHistory } = useHistory();
  const navigate = useNavigate();

  // 🔹 Eliminar un producto y restaurar stock en la galería
  const handleRemove = (product) => {
    console.log("📌 Eliminando producto:", product);
    actualizarStock(product.id, product.quantity); // ✅ Devuelve stock
    removeFromCart(product.id);
  };

  // 🔹 Vaciar carrito y restaurar stock de todos los productos
  const handleClearCart = () => {
    console.log("📌 Vaciando carrito...");
    cart.forEach((product) => {
      console.log(`➕ Restaurando stock: ${product.name} (${product.quantity})`);
      actualizarStock(product.id, product.quantity);
    });
    clearCart();
  };

  // 🔹 Finalizar compra (NO restaurar stock)
  const handlePurchase = () => {
    if (cart.length === 0) return;

    // ✅ Guardamos la compra en historial
    addToHistory(cart);

    Swal.fire({
      title: "¡Compra realizada con éxito!",
      text: "Tu compra ha sido registrada correctamente.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      clearCart(); // ✅ Solo vacía el carrito (NO restaura stock)
      navigate("/historial"); // ✅ Redirige al historial
    });
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
            <Col md={3} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </Col>

            <Col md={5}>
              <h5 className="fw-bold">{product.name.toUpperCase()}</h5>
              <p><strong>Descripción:</strong> {product.description}</p>
              <p><strong>Precio:</strong> ${product.price}</p>
            </Col>

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

            <Col md={2} className="text-center">
              <Button variant="danger" onClick={() => handleRemove(product)}>
                Eliminar
              </Button>
            </Col>
          </Row>
        ))
      ) : (
        <h5 className="text-center mt-4">No hay productos en el carrito</h5>
      )}

      {cart.length > 0 && (
        <div className="text-center mt-4">
          <Button variant="dark" className="w-40 mb-3" onClick={handleClearCart}>
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
