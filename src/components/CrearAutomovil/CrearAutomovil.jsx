import React, { Component } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
/* import Login from "../Login/Login"; */

export default class CrearAuto extends Component {
  crearAutomovil = async (event) => {
    event.preventDefault();
    console.log("hice click", event.target.form.year.value);
    let resYear = event.target.form.year.value
      ? event.target.form.year.value
      : "";
    let resName = event.target.form.name.value
      ? event.target.form.name.value
      : "";
    let resColor = event.target.form.color.value
      ? event.target.form.color.value
      : "";
    let resPrice = event.target.form.price.value
      ? event.target.form.price.value
      : "";
    let resUser_id = event.target.form.user_id.value
      ? event.target.form.user_id.value
      : "";

    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
            year:resYear,
            name:resName,
            color:resColor,
            price:resPrice,
            user_id:resUser_id,
        
        }),
      };
      let res = await fetch(
        `https://api-concesionario-taller6.herokuapp.com/`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE CREO UN NUEVO AUTO :", resEnJson);
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
            <Title className="title-label" text="Crear Nuevo Automovil" /> <br />
            <form className="form">
              <Label text="Año" />
              <input className="regular-style" type="text" />
              <br />
              <Label text="Modelo" />
              <input className="regular-style" type="text" />
              <br />
              <Label text="Color" />
              <input className="regular-style" type="text" />
              <br />
              <Label text="Precio" />
              <input className="regular-style" type="text" name="precio" />
              <br />
              <Label text="Vendedor" />
              <input className="regular-style" type="text" name="text" />
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


