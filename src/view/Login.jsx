import React, { useState } from "react";
import { Form, Button, InputGroup, Card } from "react-bootstrap";
import { FaEye, FaGlobe } from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ Importa SweetAlert2

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);

    if (result.success) {
      Swal.fire({
        title: `¡Bienvenido!`,
        text: `Tu rol es: ${result.rol}`,
        icon: "success",
        confirmButtonText: "Continuar",
        timer: 2000, // ✅ Cierra la alerta automáticamente en 2 segundos
        showConfirmButton: false, // ✅ Oculta el botón de confirmación
      }).then(() => {
        navigate("/Galeria"); // ✅ Redirige después de la alerta
      });
    } else {
      Swal.fire({
        title: "Error",
        text: result.message,
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 text-center login-card">
        <h2 className="fw-bold">Welcome again!</h2>
        <p>Please enter your details</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FaEye />
              </Button>
            </InputGroup>
          </Form.Group>

          <Button className="w-100 login-btn mb-2" type="submit">
            Log In
          </Button>

          <Button variant="light" className="w-100 border login-email-btn">
            <FaGlobe className="me-2" />
            Log in with Email
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
