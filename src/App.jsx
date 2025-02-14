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

function App() {
  const [productos, setProductos] = useState([]); // Guardar productos desde el JSON
  const [stockDisponible, setStockDisponible] = useState(() => {
    const savedStock = localStorage.getItem("stockDisponible");
    return savedStock ? JSON.parse(savedStock) : {};
  });

  // 🔹 Cargar productos desde el JSON al iniciar
  useEffect(() => {
    fetch("/data/tecnologia.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProductos(data);

          // 🔹 Inicializar el stock desde el JSON si aún no está en `localStorage`
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

  // 🔹 Asegurar que `localStorage` se mantenga actualizado
  useEffect(() => {
    localStorage.setItem("stockDisponible", JSON.stringify(stockDisponible));
  }, [stockDisponible]);

  // 🔹 Función para actualizar stock sin sobrescribir mal los valores
  const actualizarStock = (id, cantidad) => {
    setStockDisponible((prev) => {
      const stockActual = prev[id] !== undefined ? prev[id] : productos.find(p => p.id === id)?.stock ?? 0;
      const nuevoStock = Math.max(0, stockActual + cantidad); // Evita stock negativo

      console.log(`🔄 Actualizando stock: ID ${id} - Cambio: ${cantidad} - Nuevo Stock: ${nuevoStock}`);

      const updatedStock = { ...prev, [id]: nuevoStock };
      localStorage.setItem("stockDisponible", JSON.stringify(updatedStock)); // ✅ Guardar en localStorage
      return updatedStock;
    });
  };

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
        <Route path="/Galeria" element={<Galeria actualizarStock={actualizarStock} stockDisponible={stockDisponible} />} />
        <Route path="/Carrito" element={<Carrito actualizarStock={actualizarStock} />} />
        <Route path="/Historial" element={<Historial />} />
      </Routes>
    </>
  );
}

export default App;
