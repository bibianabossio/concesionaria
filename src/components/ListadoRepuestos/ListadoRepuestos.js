import React, { Component } from "react";
import {render, BrowserRouter as Router, Route, Link } from "react-router-dom";
import CrearRepuesto from "../CrearRepuesto/CrearRepuesto";



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
  }

  

  funcionBorrar=async(event)=>{
    event.preventDefault()
    console.log(" se hizo click para borara el coso :",event.target.value)
    
    try {
      let config={
        method:'DELETE',
        headers:{
          'Accept':'application/json' ,
          'content-type': 'application/json'
        },
        body:JSON.stringify(event.target.value)
      }
      let res=await fetch(`https://api-taller-mecanico.herokuapp.com/repuestos/${event.target.value}`,config);
      let resEnJson=await res.json()
    console.log(" SE BORRO! :",resEnJson)
  
    
      
    } catch (error) {
    console.log(" hubo un error :( :",error)
      
    }
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
                  <form>                    
                    <button type="submit" onClick={this.funcionBorrar} value={post.id} className="submit-button">Eliminar</button>                    
                  </form>
                </td>
                <td>
                    <Link 
                    
                    className="submit-button"  to={{
                      pathname: `EditarRepuesto/${post.id}`,
                      
                      state: { detail: post,
                      id:post.id,
                      tipo:post.tipo,
                      marca:post.marca,
                      modelo:post.modelo,
                      precio:post.precio,
                      post:post.stock

                      }
                    }} value={post.id}>Modificar</Link> 
                </td>
              </>
            </tr>
            
          );
        })}
        <tr>
          <td colspan="5">
              <Link className="submit-button"  to="/crearrepuesto" >Crear Repuesto</Link> 
          </td>
          </tr>
      </tbody>
      
      
    );
  }
}
