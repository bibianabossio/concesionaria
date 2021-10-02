import React, { Component } from "react";


export default class EditRep extends Component {
    state = {
      editRep: [],
    };
    async componentDidMount() {
      const editRep = await fetch(
        "https://api-taller-mecanico.herokuapp.com/repuestos/id"
      );
      const data = await res.json();
      this.setState({ post: data });
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
                      >
                          
                        <input type="text" name="id" value={post.id} />
                        <input type="text" name="tipo" value={post.tipo} />
                        <input type="text" name="marca" value={post.marca} />
                        <input type="text" name="modelo" value={post.modelo} />
                        <input type="text" name="precio" value={post.precio} />
                        <input type="text" name="stock" value={post.stock} />
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
    