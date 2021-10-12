import React, { Component } from "react";
/*hola */
export default class Auto extends Component {
  state = {
    auto: [],
  };
  async componentDidMount() {
    const res = await fetch("https://api-concesionario-taller6.herokuapp.com/autos");
    const data = await res.json();
    this.setState({ auto: data });
    console.log(this.state.auto.autos);
  }
  funcionBorrar = async (event) => {
    event.preventDefault();
    console.log(" se hizo click para borara el coso :", event.target.value);

    try {
      let config = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(event.target.value),
      };
      let res = await fetch(
        `https://api-concesionario-taller6.herokuapp.com/autos`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE BORRO! :", resEnJson);
    } catch (error) {
      console.log(" hubo un error :( :", error);
    }
  };
  editarAutomovil = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  render() {
    return (
        <>
         <ul>
    
            </ul>
        </>
    )
}
}