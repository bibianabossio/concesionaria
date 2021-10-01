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
              <>
                <td>{post.id}</td>
                <td>{post.tipo}</td>
                <td>{post.marca}</td>
                <td>{post.modelo}</td>
                <td>{post.precio}</td>
                <td>{post.stock}</td>
                <td>
                  <form
                    action="https://api-taller-mecanico.herokuapp.com/repuestos/"
                    method="GET"
                  >
                    <input type="text" name="id" value={post.id} />
                    <button type="submit">Eliminar</button>
                  </form>
                </td>
                <td>
                  <form
                    action="https://api-taller-mecanico.herokuapp.com/repuestos/"
                    method="GET"
                  >
                    <input type="text" name="id" value={post.id} />
                    <button type="submit">Modificar</button>
                  </form>
                </td>
              </>
            </tr>
          );
        })}
        <tr>
          <td colspan="5">
            <Router>
              <button className="submit-button">Crear Repuesto</button>
              <Route path="/CrearRepuesto" component={CrearRepuesto} />
            </Router>
          </td>
          < CrearRepuesto />
        </tr>
      </tbody>
    );
  }
}
