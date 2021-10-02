import React, { Component } from "react";
import {render, BrowserRouter as Router, Route, Link } from "react-router-dom";
import CrearRepuesto from "../CrearRepuesto/CrearRepuesto";



export default class Post extends Component {
   userHandler = (value) => {
    
      setUrlUser(`https://api-taller-mecanico.herokuapp.com/repuestos/=${value}`);
      setRequestOptionsUser({
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });
    }
  
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
                    <input type="text" name="id" hidden value={post.id} />
                    <Link type="submit" className="submit-button">Eliminar</Link>                    
                  </form>
                </td>
                <td>
                    <Link className="submit-button"  to="/EditarRepuesto">Modificar</Link> 
                </td>
              </>
            </tr>
            
          );
        })}
        <tr>
          <td colspan="5">
              <Link className="submit-button"  to="/crearrepuesto">Crear Repuesto</Link> 
          </td>
          </tr>
      </tbody>
      
      
    );
  }
}
