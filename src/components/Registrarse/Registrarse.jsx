import React, { Component } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";



export default class Registrarse extends Component (){

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
                "apellido":resApellido,
                "nombre":resNombre,
                "dni":resDNI,
                "mail":resMail,
                "contrasenia":resContrasenia
            
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
          <Title text="Registrarse" />
        <table className="login-content">
          <tbody>
            <tr>
              <>
                <td>
                  <form >
                     
                    <Label text="Apellido" />
                    <input type="text" name="apellido" /><br />
                    <Label text="Nombre" />
                    <input type="text" name="nombre" /> <br />
                    <Label text="DNI" />
                    <input type="text" name="dni" /><br />
                    <Label text="Mail" />
                    <input type="text" name="mail" /><br />
                    <Label text="Contraseña" />
                    <input type="text" name="contrasenia" /><br />
                    <button onClick={this.crearUsuario} /* type="submit" */ className="petit-submit-button">Confirmar</button>
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
