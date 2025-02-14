import React, { useState } from "react";
import { Form, Button, InputGroup, Card } from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

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
            Registration Form
          </Card.Title>
          <Form>
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
              <Form.Control type="date" required />
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
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña"
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

            <div className="d-grid">
              <Button variant="dark" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
