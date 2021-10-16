import React, { Component,useState,useEffect,useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditarRepuesto from "../EditarRepuesto/EditarRepuesto";
import Loading from "../Loading/Loading";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";

/* import CrearRepuesto from "../CrearRepuesto/CrearRepuesto"; */

const Post=()=> {
  /*   userHandler = (value) => {
    
      setUrlUser(`https://api-taller-mecanico.herokuapp.com/repuestos/=${value}`);
      setRequestOptionsUser({
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });
    } */
    let repuesto={
      id:null,
      tipo:null
    }

    const [post, setPost] = useState([])
    const [search, setSearch] = useState("")
    const {handleSeleccion} = useContext(BarraNavegacionContexto)
    const [form, setForm] = useState({
      id:null,
    tipo:null,
    marca:null,
    modelo:null,
    precio:null,
    stock:null,
    })

    const handleChange=(e)=>{
      setForm({
        ...form,
        [e.target.id]:e.target.value
      })
    }

    useEffect(async() => {
      const res = await fetch(
        "https://api-taller-mecanico.herokuapp.com/repuestos"
      );
      const data = await res.json();
      setPost(data);
      
    }, [post,search])


  const funcionBorrar = async (event) => {
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
  const editarRepuesto = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
/*hola */
const handleSubmit=async(e)=>{
  e.preventDefault()
  
  let req=`https://api-taller-mecanico.herokuapp.com/repuestos/?search=${this.search}`
  console.log(req)
    const res = await fetch(req);
    const data = await res.json();
    this.setState({ post: data });
  }

const handleSubmitModificar=(e)=>{
  e.preventDefault()
  setForm({
    
    id:e.target.idInputModif,
    tipo:e.target.tipoInputModif,
    marca:e.target.marcaInputModif,
    modelo:e.target.modedloInputModif,
    precio:e.target.precioInputModif,
    stock:e.target.stockInputModif,
  })
  
  console.log("se hizo click en modificar", form);
  console.log("se Evento", e.target);
}

const handleEdit=(e)=>{
  e.preventDefault()
console.log("es del",e.target.value);
idModificar(e.target.value)
console.log("es delsdsdfffffff",idModificar);
}

  return (
      <>
      <h2 style={{ height: 25, width: '100%' }}>Listado de Repuestos</h2>

      <form onSubmit={handleSubmit}>
      
        <input 
          type="text" 
          placeholder="buscar" 
          value={search}
          onChange={(e) => {
           search=e.target.value
            
          }
          }
        />
      
      <input type="submit" />
    </form>
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
        <tbody className="tabla-style2">
          {post?post.map((post) => (
              <tr key={post.id}>
              
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
                        onClick={funcionBorrar}
                        value={post.id}
                        className="submit-button"
                      >
                        Eliminar
                      </button>
                    </form>
                  </td>
                  <td>
                     <form onSubmit={handleSubmitModificar}>   
                       
                     <input type="text" name="idInputModif" value={post.id} onChange={(e)=>{
                       setForm({id:post.id})
                     }}/> 
                      <input type="text" name="marcaInputModif" value={post.marca} onChange={(e)=>{}}/>                 
                      <input type="text" name="tipoInputModif" value={post.tipo} onChange={(e)=>{}}/>                 
                      <input type="text" name="modedloInputModif" value={post.modelo} onChange={(e)=>{}}/>                 
                      <input type="text" name="precioInputModif" value={post.precio} onChange={(e)=>{}}/>                 
                      <input type="text" name="stockInputModif" value={post.stock} onChange={(e)=>{}}/>                 
                    <button type="submit"   value={"editar repuesto"} className="submit-button">Editar Repuesto</button>                    
                  </form>
                    {/* <Router>
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
                    </Router> */}
                  </td>
                
              </tr>
            )
           ):<Loading/>}
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

export default Post