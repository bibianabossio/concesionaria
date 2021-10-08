import React, { Component } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
/* import Login from "../Login/Login"; */

export default class CrearRep extends Component {
  
  crearRepuesto= async(event)=>{
    event.preventDefault()
    console.log("hice click",event.target.form.tipo.value);
    let resTipo=event.target.form.tipo.value?event.target.form.tipo.value:""
    let resMarca=event.target.form.marca.value?event.target.form.marca.value:""
    let resModelo=event.target.form.modelo.value?event.target.form.modelo.value:""
    let resPrecio=event.target.form.precio.value?event.target.form.precio.value:""
    let resStock=event.target.form.stock.value?event.target.form.stock.value:""

    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          "tipo":resTipo,
          "marca":resMarca,
          "modelo":resModelo,
          "precio":resPrecio,
          "stock":resStock
      
            }),
      };
      let res = await fetch(
        `https://api-taller-mecanico.herokuapp.com/repuestos`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE CREO UN NUEVO REPUESTOOO :", resEnJson);
    } catch (error) {
      console.log(" hubo un error :( EN LA ACTUALIZAXCION :", error);
    }

  }

  render() {
    return (      
      <>
          <Title text="Crear Nuevo Repuesto" />
        <table className="login-content">
          <tbody>
            <tr>
              <>
                <td>
                  <form >
                     
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
        </table>
        </>
      
    );
  }
}
