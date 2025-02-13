import React from "react";
import { Table, Button } from "react-bootstrap";

const ListarUsuarios = () => {
  const users = [
    { id: 1, username: "usuario1", email: "user1@example.com", password: "******", rol: "Admin", activo: "Sí", fecha: "2024-02-11" },
    { id: 2, username: "usuario2", email: "user2@example.com", password: "******", rol: "User", activo: "No", fecha: "2024-02-10" },
    { id: 3, username: "usuario3", email: "user3@example.com", password: "******", rol: "Editor", activo: "Sí", fecha: "2024-02-09" },
    { id: 4, username: "usuario4", email: "user4@example.com", password: "******", rol: "User", activo: "Sí", fecha: "2024-02-08" },
  ];

  return (
    <div className="container mt-4">
      <h4 className="text-center fw-bold">LISTADO DE USUARIOS</h4>
      <Table striped bordered hover className="text-center align-middle mt-3">
        <thead>
          <tr>
            <th>userName</th>
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.rol}</td>
              <td>{user.activo}</td>
              <td>{user.fecha}</td>
              <td>
                <Button variant="success" size="sm">Editar</Button>
              </td>
              <td>
                <Button variant="danger" size="sm">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListarUsuarios;