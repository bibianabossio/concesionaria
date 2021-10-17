import React, { Component,useContext } from "react";
import "../EditarRepuesto/EditarRepuesto.css";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";

/* import { useParams } from "react-router-dom"; */

const  EditarAutomovil =()=> {
  const {setSeleccion,autoModificar} = useContext(BarraNavegacionContexto)
  
  const funcionEditarAuto = async (event) => {
    event.preventDefault();
    console.log(event.target);
    let resId = autoModificar.id;
    let resYear = event.target.year.value
    ? event.target.year.value
    : autoModificar.year;
    let resName = event.target.name.value
      ? event.target.name.value
      : autoModificar.name;
    let resColor = event.target.color.value
      ? event.target.color.value
      : autoModificar.color;
    let resPrice = event.target.precio.value
      ? event.target.precio.value
      : autoModificar.precio;
    let resUser_id = event.target.user_id.value
      ? event.target.user_id.value
      : autoModificar.user_id;

    try {
      let config = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
            year:parseFloat(resYear),
            name:resName,
            color:resColor,
            price:parseFloat(resPrice),
            user_id:parseFloat(resUser_id)
        }),
      };
      let res = await fetch(
        
        `https://api-concesionario-taller6.herokuapp.com/auto/${resId}`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE ACTUALIZO! :", resEnJson);
      setSeleccion("menu")
    } catch (error) {
      console.log(" hubo un error :( EN LA ACTUALIZAXCION :", error);
    }
  };

    return (
      <div className="login-container">
        <div className="login-content">
          <tbody>
            <tr>
              <>
                <td>
                  <form onSubmit={funcionEditarAuto} id="autoModificarEditAuto">
                    id
                    <input
                      className="autoModificarEditAutoInput"
                      type="text"
                      name="id"
                      disabled
                      value={autoModificar.id}
                    />
                    <br/>
                   Año
                    <input
                      className="autoModificarEditAutoInput"
                      type="text"
                      name="year"
                      placeholder={autoModificar.year}
                    />
                    <br/>
                    Modelo
                    <input
                      className="autoModificarEditAutoInput"
                      type="text"
                      name="name"
                      placeholder={autoModificar.name}
                    />
                    <br/>
                    Color
                    <input
                      className="autoModificarEditAutoInput"
                      type="text"
                      name="color"
                      placeholder={autoModificar.color}
                    />
                    <br/>
                    Precio
                    <input
                      className="autoModificarEditAutoInput"
                      type="text"
                      name="precio"
                      placeholder={autoModificar.price}
                    />
                    <br/>
                    Vendedor
                    <input
                      className="autoModificarEditAutoInput"
                      type="text"
                      name="user_id"
                      placeholder={autoModificar.user_id}
                    />
                    <br/>
                    <button type="submit">
                      Confirmar
                    </button>
                  </form>
                </td>
                <td></td>
              </>
            </tr>
          </tbody>
        </div>
      </div>
    );
  }


export default  EditarAutomovil 