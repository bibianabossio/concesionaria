import React from "react";
import ListadoRepuestos from "../ListadoRepuestos/ListadoRepuestos";
import Title from "../Title/Title";

const Tabla = () => {
  return (
        <ListadoRepuestos />
    /* <div className="contenedor-tabla">
      <tr>
        <Title text="Listado de Repuestos" />
        <br />
      </tr>
      <table className="tabla-style2">
        <thead>
          <th>Clave</th>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Stock</th>
          <th></th>
          <th></th>
        </thead>
        
      </table>
    </div> */
  );
};
export default Tabla;
