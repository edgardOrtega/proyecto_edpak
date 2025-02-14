import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JSON_FILE = "/data/listadoUsuarios.json"; // Ruta del archivo JSON
const ListarUsuarios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(JSON_FILE); // Ruta local del JSON
        setUsers(response.data);
      } catch (err) {
        setError("Error al cargar los usuarios");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (index) => {
    navigate(`/editar-usuario/${index}`);
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter((_, i) => i !== index));
        Swal.fire("Eliminado!", "El usuario ha sido eliminado.", "success");
      }
    });
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-4" />;
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;

  return (
    <div className="container mt-4">
      <h4 className="text-center fw-bold">LISTADO DE USUARIOS</h4>
      <Table striped bordered hover className="text-center align-middle mt-3">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Rol</th>
            <th>Activo</th>
            <th>Fecha Creación</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.Email}</td>
              <td>{user.Password}</td>
              <td>{user.Rol}</td>
              <td>{user.Activo ? "Sí" : "No"}</td>
              <td>{new Date(user.Fecha_creado).toLocaleDateString()}</td>
              <td>
                <Button variant="success" size="sm" onClick={() => handleEdit(index)}>Editar</Button>
              </td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListarUsuarios;
