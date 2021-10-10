import React, { Component } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";

export default class Registrarse extends Component {
  /* 
    crearUsuario= async(event)=>{
        event.preventDefault()
        console.log("hice click",event.target.form.tipo.value);
        let resApellido=event.target.form.tipo.value?event.target.form.tipo.value:""
        let resNombre=event.target.form.stock.value?event.target.form.stock.value:""
        let resDNI=event.target.form.marca.value?event.target.form.marca.value:""
        let resMail=event.target.form.modelo.value?event.target.form.modelo.value:""
        let resContrasenia=event.target.form.precio.value?event.target.form.precio.value:""
        
        try {
            let config = {
              method: "POST",
              headers: {
                Accept: "application/json",
                "content-type": "application/json",
              },
              body: JSON.stringify({
                "usuario":resUsuario,
                "nombre":resNombre,
                "dni":resDNI,
                "mail":resMail,
                "contrasenia":resContrasenia,
                
            
                  }),
    };

   let res = await fetch(
        `https://merce`,
        config
      ); 
      let resEnJson = await res.json();
      console.log(" SE CREO UN NUEVO USUARIO :", resEnJson);
    } catch (error) {
      console.log(" hubo un error :( EN LA ACTUALIZAXCION :", error);
    }

  }
*/
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
              <input className="regular-style" type="text" />
              <br />
              <Label text="Apellido y Nombre" />
              <input className="regular-style" type="text" /> <br />
              <Label text="DNI" />
              <input className="regular-style" type="text" />
              <br />
              <Label text="Mail" />
              <input className="regular-style" type="text" />
              <br />
              <Label text="Contraseña" />
              <input className="regular-style" type="text" />
              <br />
              <Label text="Validar Contraseña" />
              <input className="regular-style" type="text" />
              <br /> <br />
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
