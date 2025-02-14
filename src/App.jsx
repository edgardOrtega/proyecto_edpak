import { useState } from "react";
import "./App.css";
import Navegation from "./components/Navegation";
import Home from "./view/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./view/Login";
import Register from "./view/Register";
import Profile from "./view/Profile";
import ListarUsuarios from "./view/ListarUsuarios";
import ListarProductos from "./view/ListarProductos";
import CrearProducto from "./view/CrearProducto";
import Galeria from "./view/Galeria";
import Carrito from "./view/Carrito";
import Historial from "./view/Historial"; // ✅ Importamos Historial.jsx
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ListarUsuarios" element={<ListarUsuarios />} />
        <Route path="/ListarProductos" element={<ListarProductos />} />
        <Route path="/CrearProducto" element={<CrearProducto />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Historial" element={<Historial />} /> {/* ✅ Nueva Ruta */}
      </Routes>
    </>
  );
}

export default App;
