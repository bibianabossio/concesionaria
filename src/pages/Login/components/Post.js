import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CrearRepuesto from "./Menu/Repuestos/CrearRepuesto";
import Label from "./Label/Label";

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
              <Label text="Crear Nuevo Repuesto" />
              <Link to="/crearRepuesto"></Link> <br />
              <Route path="/CrearRepuesto" component={CrearRepuesto} />
            </Router>
          </td>
          <CrearRepuesto />
        </tr>
      </tbody>
    );
  }
}
