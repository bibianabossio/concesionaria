import React, { Component } from "react";
import Title from "../../Title/Title";
import Label from "../../Label/Label";

export default class CrearRep extends Component {
  state = {
    crearRep: [],
  };
  async componentDidMount() {
    const editRep = await fetch(
      "https://api-taller-mecanico.herokuapp.com/repuestos/id"
    );
    const data = await editRep.json();
    this.setState({ post: data });
  }

  render() {
    return (
      
        <div className="login-content">
          <Title text="Crear Nuevo Repuesto" />

          <tbody>
            <tr>
              <>
                <td>
                  <form
                    action="https://api-taller-mecanico.herokuapp.com/repuesto/crear"
                    method="POST"
                  >
                     <Label text="Id" />
                     <input type="text" name="id" /><br />
                    <Label text="Tipo" />
                    <input type="text" name="tipo" /><br />
                    <Label text="Marca" />
                    <input type="text" name="marca" /> <br />
                    <Label text="Modelo" />
                    <input type="text" name="modelo" /><br />
                    <Label text="Precio" />
                    <input type="text" name="precio" /><br />
                    <Label text="Stock" />
                    <input type="text" name="stock" /><br />
                    <button type="submit" className="submit-button">Confirmar</button>
                  </form>
                </td>
                <td></td>
              </>
            </tr>
          </tbody>
        </div>
      
    );
  }
}
