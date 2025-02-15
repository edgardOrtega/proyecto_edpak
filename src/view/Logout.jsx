import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";  // ✅ Importa el contexto

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();  // ✅ Obtén la función logout de AuthContext

  const handleLogout = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión se cerrará y volverás a la página de inicio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        logout();  // ✅ Llama a logout() para actualizar el estado global
        navigate("/");  // ✅ Redirige al home
        Swal.fire("Sesión cerrada", "Has cerrado sesión correctamente.", "success");
      }
    });
  };

  return (
    <NavLink to="#" onClick={handleLogout} className="nav-link">
      Cerrar Sesión
    </NavLink>
  );
};

export default Logout;
