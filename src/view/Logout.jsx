import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Logout = () => {
  const navigate = useNavigate();

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
        localStorage.clear();
        navigate("/");
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
