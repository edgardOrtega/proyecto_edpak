import React, { useState } from "react";
import { Form, Button, InputGroup, Card } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Obtener la fecha actual y calcular los límites de edad
  const today = new Date();
  const minDate = new Date(today.getFullYear() - 150, today.getMonth(), today.getDate()); // Hace 150 años
  const maxDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()); // Mínimo 1 año

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convertir la fecha de nacimiento ingresada a un objeto Date
    const birthDateObj = new Date(birthDate);

    // Validar que la fecha de nacimiento esté dentro del rango permitido
    if (birthDateObj < minDate || birthDateObj > maxDate) {
      setError("Fecha inválida");
      return;
    }

    // Validar que la contraseña tenga al menos 4 caracteres
    if (password.length < 4) {
      setError("La contraseña debe tener al menos 4 caracteres.");
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");

    let timer = 5;
    Swal.fire({
      title: "Registro exitoso",
      html: `¡Por favor, usar solo los usuarios del Read Me!<br><br>Lea bien antes de continuar: <b>${timer}</b> segundos.`,
      icon: "success",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.disableButtons();
        const b = Swal.getHtmlContainer().querySelector("b");
        const interval = setInterval(() => {
          timer--;
          b.textContent = timer;
          if (timer <= 0) {
            clearInterval(interval);
            Swal.enableButtons();
          }
        }, 1000);
      }
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card
        style={{
          width: "22rem",
          backgroundColor: "#fefe00",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Card.Body>
          <Card.Title className="text-center fw-bold fs-4">
            Formulario de Registro
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                type="date"
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su dirección"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FaEye />
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme su contraseña"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <FaEye />
                </Button>
              </InputGroup>
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}

            <div className="d-grid">
              <Button variant="dark" type="submit">
                Registrar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
