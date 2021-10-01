import React, { Component } from "react";



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
          <tbody>           
                <tr >
                  <>
                  <td>
                      <form
                        action="https://api-taller-mecanico.herokuapp.com/repuesto/crear"
                        method="POST"
                      >
                          
                        <input type="text" name="id"  />
                        <input type="text" name="tipo"  />
                        <input type="text" name="marca"  />
                        <input type="text" name="modelo"  />
                        <input type="text" name="precio"  />
                        <input type="text" name="stock"  />
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
    