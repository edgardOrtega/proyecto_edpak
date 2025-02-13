import React from "react";
import { Table, Button } from "react-bootstrap";

const ListarProductos = () => {
  const products = [
    { id: 1, name: "Producto 1", description: "Descripción 1", price: "$10", stock: 20, category: "Categoría A" },
    { id: 2, name: "Producto 2", description: "Descripción 2", price: "$15", stock: 10, category: "Categoría B" },
    { id: 3, name: "Producto 3", description: "Descripción 3", price: "$20", stock: 5, category: "Categoría C" },
    { id: 4, name: "Producto 4", description: "Descripción 4", price: "$25", stock: 8, category: "Categoría D" },
  ];

  return (
    <div className="container mt-4">
      <h4 className="text-center fw-bold">LISTADO DE PRODUCTOS</h4>
      <Table striped bordered hover className="text-center align-middle mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
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

export default ListarProductos;