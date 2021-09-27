import React from "react";
import Post from '../../Post';




const Tabla = () => {
  return (
      <div className= "contenedor-tabla">
             <table className= "tabla-style">
      <thead>
        <tr>
          
          <th>Tipo</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
          
        <Post/> 
        <div className="submit-button-container">
        <button className="submit-button">Crear Nuevo Repuesto</button>
        <button className="submit-button">Editar Repuesto</button>
        <button className="submit-button">Eliminar Repuesto</button>
        </div>
      </tbody>
    </table>
      </div>
 
  );
};
export default Tabla;
