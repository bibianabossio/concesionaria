import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditarRepuesto from "../EditarRepuesto/EditarRepuesto";
/* import CrearRepuesto from "../CrearRepuesto/CrearRepuesto"; */

export default class Post extends Component {
  /*   userHandler = (value) => {
    
      setUrlUser(`https://api-taller-mecanico.herokuapp.com/repuestos/=${value}`);
      setRequestOptionsUser({
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });
    } */

  state = {
    post: [],
  };
  async componentDidMount() {
    const res = await fetch(
      "https://api-taller-mecanico.herokuapp.com/repuestos"
    );
    const data = await res.json();
    this.setState({ post: data });
    console.log("esta es de repuestos:", data);
  }

  funcionBorrar = async (event) => {
    event.preventDefault();
    console.log(" se hizo click para borara el coso :", event.target.value);

    try {
      let config = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(event.target.value),
      };
      let res = await fetch(
        `https://api-taller-mecanico.herokuapp.com/repuestos/${event.target.value}`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE BORRO! :", resEnJson);
    } catch (error) {
      console.log(" hubo un error :( :", error);
    }
  };
  editarRepuesto = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  render() {
    return (
      <>
        <h2 style={{ height: 25, width: '100%' }}>Listado de Repuestos</h2>

        <table style={{ height: 25, width: '100%' }} className="tabla-style2">
          <thead>
            <th>Clave</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
            <th></th>
          </thead>
          <tbody style={{ height: 25, width: '100%' }} className="tabla-style2">
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
                      <form>
                        <button
                          type="submit"
                          onClick={this.funcionBorrar}
                          value={post.id}
                          className="submit-button"
                        >
                          Eliminar
                        </button>
                      </form>
                    </td>
                    <td>
                      {/*  <form>                    
                    <button type="submit" onClick={this.editarRepuesto} value={post.id} className="submit-button">Editar Repuesto</button>                    
                  </form> */}
                      <Router>
                        <Link
                          className="submit-button"
                          to={{
                            pathname: `EditarRepuesto/${post.id}`,

                            state: {
                              detail: post,
                              id: post.id,
                              tipo: post.tipo,
                              marca: post.marca,
                              modelo: post.modelo,
                              precio: post.precio,
                              post: post.stock,
                            },
                          }}
                          value={post.id}
                        >
                          Modificar
                        </Link>
                      </Router>
                    </td>
                  </>
                </tr>
              );
            })}
            <tr>
              <td colspan="5">
                <Router>
                  <Link className="submit-button" to="/crearrepuesto">
                    Crear Repuesto
                  </Link>
                </Router>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
