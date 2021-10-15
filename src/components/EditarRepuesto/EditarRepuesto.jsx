import React, { Component } from "react";
import "./EditarRepuesto.css";
/* import { useParams } from "react-router-dom"; */

export default class EditarRepuesto extends Component {
  state = {
   /*  valor: this.props.location.state.detail,
    editRep: [], */
  };

  funcionEditarRep = async (event) => {
    event.preventDefault();
    let resId = event.target.form.id.value;
    let resTipo = event.target.form.tipo.value
      ? event.target.form.tipo.value
      : this.state.valor.tipo;
    let resMarca = event.target.form.marca.value
      ? event.target.form.marca.value
      : this.state.valor.marca;
    let resModelo = event.target.form.modelo.value
      ? event.target.form.modelo.value
      : this.state.valor.modelo;
    let resPrecio = event.target.form.precio.value
      ? event.target.form.precio.value
      : this.state.valor.precio;
    let resStock = event.target.form.stock.value
      ? event.target.form.stock.value
      : this.state.valor.stock;

    try {
      let config = {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          tipo: resTipo,
          marca: resMarca,
          modelo: resModelo,
          precio: resPrecio,
          stock: resStock,
        }),
      };
      let res = await fetch(
        `https://api-taller-mecanico.herokuapp.com/repuestos/${resId}`,
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
                  <form id="formEditRep">
                    id
                    <input
                      className="formEditRepInput"
                      type="text"
                      name="id"
                      disabled
                     /*  value={this.state.valor.id?this.state.valor.id: "yo"} */
                    />
                    Tipo
                    <input
                      className="formEditRepInput"
                      type="text"
                      name="tipo"
                  /*     placeholder={this.state.valor.tipo?this.state.valor.id: "yo"} */
                    />
                    Marca
                    <input
                      className="formEditRepInput"
                      type="text"
                      name="marca"
                     /*  placeholder={this.state.valor.marca?this.state.valor.id: "yo"} */
                    />
                    Modelo
                    <input
                      className="formEditRepInput"
                      type="text"
                      name="modelo"
                      /* placeholder={this.state.valor.modelo?this.state.valor.id: "yo"} */
                    />
                    Precio
                    <input
                      className="formEditRepInput"
                      type="text"
                      name="precio"
                   /*    placeholder={this.state.valor.precio?this.state.valor.id: "yo"} */
                    />
                    Stock
                    <input
                      className="formEditRepInput"
                      type="text"
                      name="stock"
                     /*  placeholder={this.state.valor.stock?this.state.valor.id: "yo"} */
                    />
                    <button type="submit" onClick={this.funcionEditarRep}>
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
