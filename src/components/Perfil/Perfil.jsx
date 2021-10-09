import React, { Component } from "react";
/* import { render, BrowserRouter as Router, Route, Link } from "react-router-dom"; */
import Label from "../Label/Label";
import Title from "../Title/Title";

export default class Perfil extends Component {
  state = {
    user: [],
  }; /*
  async componentDidMount() {
    const res = await fetch(
      "llamado a api de merce"
    );
    const data = await res.json();
    this.setState({ post: data });
  }*/

  funcionModificar = async (event) => {
    event.preventDefault();
    console.log(
      " se hizo click para modificar al usuario :",
      event.target.value
    );
  };

  funcionBorrar = async (event) => {
    event.preventDefault();
    console.log(" se hizo click para borrar al usuario :", event.target.value);
    /*
    try {
      let config={
        method:'DELETE',
        headers:{
          'Accept':'application/json' ,
          'content-type': 'application/json'
        },
        body:JSON.stringify(event.target.value)
      }
    let res=await fetch(`llamar a la api de merce/${event.target.value}`,config);
      let resEnJson=await res.json()
    console.log(" SE BORRO! :",resEnJson)
  
    
      
    } catch (error) {
    console.log(" hubo un error :( :",error)
      
    }*/
  };

  render() {
    return (
      <>
        <div className="login-container">
          <div className="login-content">
            {" "}
            <br />
            <Title text="Mi Perfil" /> <br />
            <form>
              <Label text="Usuario" />
              <input type="text" /*value={this.user.usuario}*/ />
              <br />
              <Label text="Apellido y Nombre" />
              <input type="text" /*placeholder={this.user.nombre} */ /> <br />
              <Label text="Número de DNI" />
              <input type="text" /* placeholder={this.user.dni}*/ />
              <br />
              <Label text="Dirección de mail" />
              <input type="text" /*placeholder={this.user.mail}*/ />
              <br />
              <Label text="Contraseña Nueva" />
              <input type="text" /*placeholder={this.user.contrasenia}*/ />
              <br />
              <Label text="Validar Contraseña Nueva" />
              <input type="text" /*placeholder={this.user.contrasenia}*/ />
              <br />
              <br />
              <button
                /*type="submit"*/
                onClick={this.funcionBorrar}
                className="submit-button"
              >
                Eliminar
              </button>
              <br />
              <button
                /*type="submit"*/
                onClick={this.funcionModificar}
                className="submit-button"
              >
                Modificar
              </button>
            </form>
            <br />
          </div>
        </div>
      </>
    );
  }
}
