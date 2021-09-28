import React from "react";
import Post from "../../Post";

const Tabla = () => {
  return (
    <div className="contenedor-tabla">
      <table className="tabla-style2">
        <thead>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Stock</th>
        </thead>
        <Post />
      </table>
    </div>
  );
};
export default Tabla;
