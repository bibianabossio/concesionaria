import React, { Component } from "react";
import "./EditarRepuesto.css"

export default class EditarRepuesto extends Component {
    state = {
      editRep: [],
    };
   
    async componentDidMount() {
      const editRep = await fetch(
        "https://api-taller-mecanico.herokuapp.com/repuestos/id"
      );
      const data = await editRep.json();
      this.setState({ editRep: data });
    }
  
    render() {
        return (
          <tbody>           
                <tr >
                  <>
                  <td>
                      <form
                        action="https://api-taller-mecanico.herokuapp.com/repuesto/EDITAR"
                        method="PATCH"
                        id="formEditRep"
                      >
                        
                          id
                        <input class="formEditRepInput" type="text" name="id"  />
                        Tipo
                        <input class="formEditRepInput" type="text" name="tipo" />
                        Marca
                        <input class="formEditRepInput" type="text" name="marca" />
                        Modelo
                        <input class="formEditRepInput" type="text" name="modelo"  />
                        Precio
                        <input class="formEditRepInput" type="text" name="precio"  />
                        Stock
                        <input class="formEditRepInput" type="text" name="stock" />

                        <button type="submit">Confirmar</button>
                      </form>
                    </td>
                    <td>
                      
                    </td>
                  </>
                </tr>
           
          </tbody>
        );
      }
    }
    