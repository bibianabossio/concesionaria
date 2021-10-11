import React, { Component } from "react";
import "../EditarRepuesto/EditarRepuesto.css";
/* import { useParams } from "react-router-dom"; */

export default class EditarAutomovil extends Component {
  state = {
    valor: this.props.location.state.detail,
    editAuto: [],
  };

  funcionEditarAuto = async (event) => {
    event.preventDefault();
    let resId = event.target.form.id.value;
    let resYear = event.target.form.year.value
    ? event.target.form.year.value
    : this.state.valor.year;
    let resName = event.target.form.name.value
      ? event.target.form.name.value
      : this.state.valor.name;
    let resColor = event.target.form.color.value
      ? event.target.form.color.value
      : this.state.valor.color;
    let resPrice = event.target.form.price.value
      ? event.target.form.price.value
      : this.state.valor.price;
    let resUser_id = event.target.form.user_id.value
      ? event.target.form.user_id.value
      : this.state.user_id.stock;

    try {
      let config = {
        method: "PATCH",
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
        `https://api-concesionario-taller6.herokuapp.com/${resId}`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE ACTUALIZO! :", resEnJson);
    } catch (error) {
      console.log(" hubo un error :( EN LA ACTUALIZAXCION :", error);
    }
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <tbody>
            <tr>
              <>
                <td>
                  <form id="formEditAuto">
                    id
                    <input
                      className="formEditAutoInput"
                      type="text"
                      name="id"
                      disabled
                      value={this.state.valor.id}
                    />
                   Año
                    <input
                      className="formEditAutoInput"
                      type="text"
                      name="year"
                      placeholder={this.state.valor.year}
                    />
                    Modelo
                    <input
                      className="formEditAutoInput"
                      type="text"
                      name="name"
                      placeholder={this.state.valor.name}
                    />
                    Color
                    <input
                      className="formEditAutoInput"
                      type="text"
                      name="color"
                      placeholder={this.state.valor.color}
                    />
                    Precio
                    <input
                      className="formEditAutoInput"
                      type="text"
                      name="price"
                      placeholder={this.state.valor.price}
                    />
                    Vendedor
                    <input
                      className="formEditAutoInput"
                      type="text"
                      name="usar_id"
                      placeholder={this.state.valor.user_id}
                    />
                    <button type="submit" onClick={this.funcionEditarAuto}>
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
}
