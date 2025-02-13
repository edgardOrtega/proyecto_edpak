import React, { useState } from "react";
import { Form, Button, InputGroup, Card } from "react-bootstrap";
import { FaEye, FaGlobe } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 text-center login-card">
        <h2 className="fw-bold">Welcome again!</h2>
        <p>Please enter your details</p>

        <Form>
          {/* Campo de Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          {/* Campo de Password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FaEye />
              </Button>
            </InputGroup>
          </Form.Group>

          {/* Botón Log In */}
          <Button className="w-100 login-btn mb-2">Log In</Button>

          {/* Botón Log In con Email */}
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