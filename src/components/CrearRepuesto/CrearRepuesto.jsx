import React, { Component } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
import Login from "../Login/Login";

export default class CrearRep extends Component {
  
  crearRepuesto=(event)=>{
    event.preventDefault()
    console.log("hice click");


  }

  render() {
    return (
      
        <div className="login-content">
          <Title text="Crear Nuevo Repuesto" />

          <tbody>
            <tr>
              <>
                <td>
                  <form
                    action="https://api-taller-mecanico.herokuapp.com/repuesto/crear"
                    method="POST"
                  >
                     <Label text="Id" />
                     <input type="text" name="id" /><br />
                    <Label text="Tipo" />
                    <input type="text" name="tipo" /><br />
                    <Label text="Marca" />
                    <input type="text" name="marca" /> <br />
                    <Label text="Modelo" />
                    <input type="text" name="modelo" /><br />
                    <Label text="Precio" />
                    <input type="text" name="precio" /><br />
                    <Label text="Stock" />
                    <input type="text" name="stock" /><br />
                    <button onClick={this.crearRepuesto} /* type="submit" */ className="petit-submit-button">Confirmar</button>
                  </form>
                </td>
                <td></td>
              </>
            </tr>
          </tbody>
        </div>
      
    );
  }
}
