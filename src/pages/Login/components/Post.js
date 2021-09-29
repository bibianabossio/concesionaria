import React, { Component } from "react";


export default class Post extends Component {
  state = {
    post: [],
  };
  async componentDidMount() {
    const res = await fetch(
      "https://api-taller-mecanico.herokuapp.com/repuestos"
    );
    const data = await res.json();
    this.setState({ post: data });
  }
  
  render() {
    return (
    
      <tbody>
     
        {this.state.post.map((post) => {
          return (
            <tr>
              <>
                <td>{post.tipo}</td>
                <td>{post.marca}</td>
                <td>{post.modelo}</td>
                <td>{post.precio}</td>
                <td>{post.stock}</td>
              </>
            </tr>
          );
        })}
        <tr>
          <td colspan="5">
            <button className="submit-button">Crear Nuevo Repuesto</button>
            <button className="submit-button">Editar Repuesto</button>
            <button className="submit-button">Eliminar Repuesto</button>
          </td>
        </tr>
      </tbody>
    );
  }
}
