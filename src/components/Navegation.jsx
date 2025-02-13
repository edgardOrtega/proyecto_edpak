import { NavLink } from "react-router-dom"; // Importa NavLink
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/edpak.png";

const Navegation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="contenedor">
        <Navbar.Brand as={NavLink} to="/">
          <img
            className="logo img-fluid rounded"
            src={logo}
            alt="Proyecto Tecnológico"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Register">registro</Nav.Link>
            <Nav.Link as={NavLink} to="/Login">Inicio sesión</Nav.Link>
            <Nav.Link as={NavLink} to="/Profile">Mi perfil</Nav.Link>
            <Nav.Link as={NavLink} to="/ListarUsuarios">Listar Usuarios</Nav.Link>
            <Nav.Link as={NavLink} to="/ListarProductos">Listar Producto</Nav.Link>
            <Nav.Link as={NavLink} to="/CrearProducto">Crear Producto</Nav.Link>
            <Nav.Link as={NavLink} to="/Galeria">Galeria</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegation;