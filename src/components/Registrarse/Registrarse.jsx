import React, { Component } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";

export default class Registrarse extends Component {
  crearUsuario = async (event) => {
    event.preventDefault();
    console.log("hice click", event.target.form.nombreUsuario.value);
    let resNombreUsuario = event.target.form.nombreUsuario.value
      ? event.target.form.nombreUsuario.value
      : "";
    let resApellido = event.target.form.apellido.value
      ? event.target.form.apellido.value
      : "";
    let resNombre = event.target.form.nombre.value
      ? event.target.form.nombre.value
      : "";
    let resDNI = event.target.form.dni.value ? event.target.form.dni.value : "";
    let resEmail = event.target.form.email.value
      ? event.target.form.email.value
      : "";
    let resPassword = event.target.form.password.value
      ? event.target.form.password.value
      : "";

    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nombreUsuario: resNombreUsuario,
          apellido: resApellido,
          nombre: resNombre,
          dni: resDNI,
          email: resEmail,
          password: resPassword,
        }),
      };

      let res = await fetch(
        `https://concesionario-crud.herokuapp.com/auth/usuario`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE CREO UN NUEVO USUARIO :", resEnJson);
    } catch (error) {
      console.log(" hubo un error :( EN LA ACTUALIZAXCION :", error);
    }
  };

  render() {
    return (
      <>
        <div className="login-container">
          <div className="login-content">
            {" "}
            <br />
            <Title className="title-label" text="Registrarse" />
            <form className="form">
              <Label text="Usuario" />
              <input
                className="regular-style"
                type="text"
                name="nombreUsuario"
              />
              <br />
              <Label text="Apellido" />
              <input
                className="regular-style"
                type="text"
                name="apellido"
              />{" "}
              <br />
              <Label text="Nombre" />
              <input className="regular-style" type="text" name="nombre" />{" "}
              <br />
              <Label text="DNI" />
              <input className="regular-style" type="text" name="dni" />
              <br />
              <Label text="Email" />
              <input className="regular-style" type="text" name="email" />
              <br />
              <Label text="Contraseña" />
              <input className="regular-style" type="text" name="password" />
              <br />
              <br />
              <button
                onClick={this.crearUsuario}
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
