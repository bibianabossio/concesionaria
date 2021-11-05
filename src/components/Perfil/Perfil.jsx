import React, { useContext } from "react";
import "../EditarRepuesto/EditarRepuesto.css";
/* import { render, BrowserRouter as Router, Route, Link } from "react-router-dom"; */

import Title from "../Title/Title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";

const Perfil  = () => {
  const { setSeleccion, usuarioModificar  } = useContext(BarraNavegacionContexto);
  /* state = {
    user: [], 
  }; */
  const  editarUsuario = async (event) =>{
    event.preventDefault();
    console.log(event.target);
    let resNombreUsuario = usuarioModificar.resNombreUsuario;
    let resApellido = event.target.resApellido.value
    ? event.target.resApellido.value 
    :usuarioModificar.resApellido;
    let resNombre = event.target.resNombre.value
    ? event.target.resNombre.value 
    :usuarioModificar.resNombre;
    let resDNI = event.target.resDNI.value
    ? event.target.resDNI.value 
    :usuarioModificar.resDNI;
    let resEmail = event.target.resEmail.value
    ? event.target.resEmail.value 
    :usuarioModificar.resEmail;
    let resPassword = event.target.resPassword.value
    ? event.target.resPassword.value 
    :usuarioModificar.resPassword;
try{
  let sesion = JSON.parse(localStorage.getItem("sesion"));
  let config = {
    method: "PUT",
    headers: {
      Authorization: sesion.bearer + " " + sesion.token,
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nombreUsuario: resNombreUsuario,
          apellido: resApellido,
          nombre: resNombre,
          dni: resDNI,
          email: resEmail,
          password: resPassword,
    }),
  };
    let res = await fetch(
      `https://concesionario-crud.herokuapp.com/auth/actualizarUsuario/${resNombreUsuario}`,
      config
    );
    let resEnJson = await res.json();
    console.dir(resEnJson);
    if (
      resEnJson.resNombreUsuario !== null  ||
      res.status === 200) {
      console.log(" SE ACTUALIZO USUARIO :", resEnJson);
      toast("Usuario Actualizado", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progreso: undefined,
      });
      setTimeout(() => {
        setSeleccion("login");
      }, 5000);
    } else {
      toast(resEnJson.mensaje, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progreso: undefined,
      });
    }
   
  } catch (error) {
    console.log(" hubo un error :( ", error);
  }
};

  const eliminarUsuario = async (event) => {
    event.preventDefault();
    console.log(" se hizo click para borrar al usuario :", event.target.value);

    try {
      /* let sesion = JSON.parse(localStorage.getItem("sesion")); */
      let config = {
        method: "DELETE",
        headers: {
          /* Authorization: sesion.bearer +" " +sesion.token, */
          Accept: "application/json",
          "content-type": "application/json",
        }
        /* body: JSON.stringify(event.target.value), */
       
      };
      let res = await fetch(
        `https://concesionario-crud.herokuapp.com/auth/borrarUsuario/${event.target.value}`,
        config
      );
      let resEnJson = res;
      if (res.status===204){
       
      /* console.log(" SE BORRO! :", resEnJson); */
        toast("Usuario Eliminado", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progreso: undefined,
        });
        setTimeout(() => {
          setSeleccion("menu");
        }, 5000);
      } else {
        toast(resEnJson.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progreso: undefined,
        });
      }

     
    } catch (error) {
      console.log(" hubo un error :( ", error);
    }
  };
  
    return (
      
        <div className="login-container">
          <div className="login-content">
          <Title className="title-label" text="Mi Perfil" /> <br />
           <tbody> 
             <tr>
             <>
            <td>
            <form onSubmit={editarUsuario} id="usuarioModificar">
            Usuario
            <input
           className="regular-style"
           type="text"
            name= "Usuario"
             disabled
             
               
                 value={usuarioModificar.resNombreUsuario}
              />
              <br />
              Apellido
              
              <input
                className="regular-style"
                type="text" 
                name="Apellido" 
                placeholder={usuarioModificar.resApellido}
              />
              <br />

              Nombre
               <input
                className="regular-style"
                type="text" 
                name = "Nombre" 
                placeholder={usuarioModificar.resNombre} 
              />
              <br />
              DNI
              <input
                className="regular-style"
                type="text" 
                name="Número de DNI" 
                placeholder={usuarioModificar.resDNI}
              />
              <br />
              Dirección de mail
             
              <input
                className="regular-style"
                type="text" 
                name="Dirección de mail" 
                placeholder={usuarioModificar.resPassword}
              />
              <br />
             
              <br />
              <br />
            
                <button
                  /*type="submit"*/
                  onClick={editarUsuario}
                  className="submit-button"
                >
                  Editar Usuario
                </button>

                <button
              onClick={eliminarUsuario}
              /* type="submit" */ className="submit-button"
            >
              Eliminar Usuario
            </button>
            <ToastContainer> </ToastContainer>
              
            </form>
            </td>
              <td></td>
            </>
          </tr>
        </tbody>
      </div>
    </div>
    );
      }  ;
  

export default  Perfil; 