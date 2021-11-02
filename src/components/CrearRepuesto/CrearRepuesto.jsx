import React, { Component } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
/* import Login from "../Login/Login"; */
/*hola */
export default class CrearRep extends Component {
  crearRepuesto = async (event) => {
    event.preventDefault();
    console.log("hice click", event.target.form);
    let resTipo = event.target.form.tipo.value
      ? event.target.form.tipo.value
      : "";
    let resMarca = event.target.form.marca.value
      ? event.target.form.marca.value
      : "";
    let resModelo = event.target.form.modelo.value
      ? event.target.form.modelo.value
      : "";
    let resPrecio = event.target.form.precio.value
      ? event.target.form.precio.value
      : "";
    let resStock = event.target.form.stock.value
      ? event.target.form.stock.value
      : "";

    try {
      let sesion = JSON.parse(localStorage.getItem("sesion"));
      let config = {
        method: "POST",
        headers: {
          Authorization: sesion.bearer + " " + sesion.token,
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          tipo: resTipo,
          marca: resMarca,
          modelo: resModelo,
          precio: parseFloat(resPrecio),
          stock: parseFloat(resStock),
        }),
      };
      let res = await fetch(
        `https://api-taller-mecanico.herokuapp.com/repuestos`,
        config,
        { mode: "no-cors" }
      );
      let resEnJson = await res.json();
      console.log(" SE CREO UN NUEVO REPUESTOOO :", resEnJson);
    } catch (error) {
      console.log(" hubo un error :( EN LA ACTUALIZAXCION :", error);
    }
  };

  render() {
    return (
      <>
        <div className="login-container">
          <div className="login-content">
            <br />
            <Title className="title-label" text="Crear Nuevo Repuesto" /> <br />
            <form className="form">
              <Label text="Tipo" />
              <input className="regular-style" type="text" name="tipo" />
              <br />
              <Label text="Marca" />
              <input className="regular-style" type="text" name="marca" />{" "}
              <br />
              <Label text="Modelo" />
              <input className="regular-style" type="text" name="modelo" />
              <br />
              <Label text="Precio" />
              <input className="regular-style" type="text" name="precio" />
              <br />
              <Label text="Stock" />
              <input className="regular-style" type="text" name="stock" />
              <br />
              <br />
              <button
                onClick={this.crearRepuesto}
                /* type="submit" */ className="submit-button"
              >
                Confirmar
              </button>
            </form>
            <br />
          </div>
        </div>
      </>
    );
  }
}
