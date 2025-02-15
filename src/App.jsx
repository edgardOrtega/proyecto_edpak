import { useState, useEffect } from "react";
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
import Historial from "./view/Historial"; 
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [productos, setProductos] = useState([]);
  const [stockDisponible, setStockDisponible] = useState(() => {
    const savedStock = localStorage.getItem("stockDisponible");
    return savedStock ? JSON.parse(savedStock) : {};
  });

  useEffect(() => {
    fetch("/data/tecnologia.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProductos(data);
          setStockDisponible((prev) => {
            const newStock = { ...prev };
            data.forEach((producto, index) => {
              const id = index + 1;
              if (newStock[id] === undefined) newStock[id] = producto.stock;
            });
            localStorage.setItem("stockDisponible", JSON.stringify(newStock));
            return newStock;
          });
        }
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("stockDisponible", JSON.stringify(stockDisponible));
  }, [stockDisponible]);

  const actualizarStock = (id, cantidad) => {
    setStockDisponible((prev) => {
      const stockActual = prev[id] !== undefined ? prev[id] : productos.find(p => p.id === id)?.stock ?? 0;
      const nuevoStock = Math.max(0, stockActual + cantidad);

      console.log(`🔄 Actualizando stock: ID ${id} - Cambio: ${cantidad} - Nuevo Stock: ${nuevoStock}`);

      const updatedStock = { ...prev, [id]: nuevoStock };
      localStorage.setItem("stockDisponible", JSON.stringify(updatedStock));
      return updatedStock;
    });
  };

  return (
    <>

      <AuthProvider>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/Profile" element={<Profile />} />
        <Route path="/ListarUsuarios" element={<ListarUsuarios />} />
        <Route path="/ListarProductos" element={<ListarProductos />} />
        <Route path="/CrearProducto" element={<CrearProducto />} />
        <Route path="/Galeria" element={<Galeria actualizarStock={actualizarStock} stockDisponible={stockDisponible} />} />
        <Route path="/Carrito" element={<Carrito actualizarStock={actualizarStock} />} />
        <Route path="/Historial" element={<Historial />} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
