import React from "react";
import Post from '../../Post';

const Tabla = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr><Post/></tr>
      </tbody>
    </table>
  );
};
export default Tabla;
