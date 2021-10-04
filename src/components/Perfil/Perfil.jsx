import React, { Component } from "react";
import { render, BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <form>
          <input type="text" disabled /*value={this.user.usuario}*/ /><br />
          <input type="text" /*placeholder={this.user.nombre} */ /> <br />
          <input type="text" /* placeholder={this.user.dni}*/ /><br />
          <input type="text" /*placeholder={this.user.mail}*/ /><br />
          <button
            type="submit"
            onClick={this.funcionBorrar}
            className="submit-button"
          >
            Eliminar
          </button>
          <button
            type="submit"
            onClick={this.funcionModificar}
            className="submit-button"
          >
            Modificar
          </button>
        </form>
      </>
    );
  }
}
