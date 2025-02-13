import React, { useState } from "react";
import { Form, Button, InputGroup, Card } from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const Profile = () => {
  const [formData, setFormData] = useState({
    username: "edgard_Ortega",
    birthdate: "16/05/1991",
    email: "edgard_garito@live.cl",
    password: "************",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "28rem", backgroundColor: "#fefe00", padding: "25px", borderRadius: "15px" }}>
        <Card.Body>
          <Card.Title className="text-center fw-bold fs-4">Perfil Personal</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Nombre usuario</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Fecha de nacimiento</Form.Label>
              <Form.Control
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button variant="outline-dark" onClick={() => setShowPassword(!showPassword)}>
                  <FaEye />
                </Button>
              </InputGroup>
            </Form.Group>

            <div className="d-grid">
              <Button variant="dark" type="button" onClick={() => console.log("Datos guardados:", formData)}>
                GUARDAR
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;