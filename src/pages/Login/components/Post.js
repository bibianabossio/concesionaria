import React, { Component } from "react";
import {render, BrowserRouter as Router, Route, Link } from "react-router-dom";
import CrearRepuesto from "./Menu/Repuestos/CrearRepuesto";


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
            <tr key={post.id}>
<<<<<<< HEAD
             
=======
              <>
                <td>{post.id}</td>
>>>>>>> 152b7ef617b45df873e6d43bcbce11da858326b7
                <td>{post.tipo}</td>
                <td>{post.marca}</td>
                <td>{post.modelo}</td>
                <td>{post.precio}</td>
                <td>{post.stock}</td>
<<<<<<< HEAD
              
=======
                <td>
                  <form
                    action="https://api-taller-mecanico.herokuapp.com/repuestos/"
                    method="GET"
                  >
                    <input type="text" name="id" value={post.id} />
                    <button type="submit"className="petit-submit-button">Eliminar</button>
                  </form>
                </td>
                <td>
                  <form
                    action="https://api-taller-mecanico.herokuapp.com/repuestos/"
                    method="GET"
                  >
                    <input type="text" name="id" value={post.id} />
                    <button type="submit" className="petit-submit-button">Modificar</button>
                  </form>
                </td>
              </>
>>>>>>> 152b7ef617b45df873e6d43bcbce11da858326b7
            </tr>
          );
        })}
        <tr>
          <td colspan="5">
            <Router>
              
              <Link className="submit-button"  to="/crearrepuesto">Crear Repuesto</Link> 
              <Route path="/crearrepuesto" component={CrearRepuesto} />
            </Router>
          </td>
          </tr>
      </tbody>
    );
  }
}
