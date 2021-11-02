import React, { Component } from "react";
/* import { render, BrowserRouter as Router, Route, Link } from "react-router-dom"; */
import Label from "../Label/Label";
import Title from "../Title/Title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";

const Perfil  = () => {
  const { usuarioModificar, setSeleccion } = useContext(BarraNavegacionContexto);
  /* state = {
    user: [], */
  }; 
  const  editarUsuario = async (e) =>{
    e.preventDefault();
    console.log(e.target);
    let resNombreUsuario = usuarioModificar.resNombreUsuario;
    let resApellido = e.target.resApellido.value
    ? e.target.resApellido.value 
    :usuarioModificar.resApellido;
    let resNombre = e.target.resNombre.value
    ? e.target.resNombre.value 
    :usuarioModificar.resNombre;
    let resDNI = e.target.resDNI.value
    ? e.target.resDNI.value 
    :usuarioModificar.resDNI;
    let resEmail = e.target.resEmail.value
    ? e.target.resEmail.value 
    :usuarioModificar.resEmail;
    let resPassword = e.target.resPassword.value
    ? e.target.resPassword.value 
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
      `https://concesionario-crud.herokuapp.com/auth/consultarUsuario/${resNombreUsuario}`,
      config
    );
    let resEnJson = await res.json();
    console.dir(resEnJson);
    if (
      resEnJson.resNombreUsuario !== null  ||
      res.status === 200) {
      console.log(" SE ACYUALIZO USUARIO :", resEnJson);
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
      if (res.status==204){
       
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
      <>
        <div className="login-container">
          <div className="login-content">
            {" "}
            <br />
            <Title className="title-label" text="Mi Perfil" /> <br />
            <form className="form">
              <Label text="Usuario" />
              <input
                className="regular-style"
                type="text" /*value={this.user.usuario}*/
              />
              <br />
              <Label text="Apellido" />
              <input
                className="regular-style"
                type="text" /*placeholder={this.user.apellido} */
              />{" "}
              <br />
              <Label text="Nombre" />
              <input
                className="regular-style"
                type="text" /*placeholder={this.user.nombre} */
              />{" "}
              <br />
              <Label text="Número de DNI" />
              <input
                className="regular-style"
                type="text" /* placeholder={this.user.dni}*/
              />
              <br />
              <Label text="Dirección de mail" />
              <input
                className="regular-style"
                type="text" /*placeholder={this.user.mail}*/
              />
              <br />
              <Label text="Contraseña Nueva" />
              <input
                className="regular-style"
                type="text" /*placeholder={this.user.contrasenia}*/
              />
              <br />
              <Label text="Validar Contraseña Nueva" />
              <input
                className="regular-style"
                type="text" /*placeholder={this.user.contrasenia}*/
              />
              <br />
              <br />
              <div className="submit-button-container">
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
              </div>
            </form>
            <br />
          </div>
        </div>
      </>
    );
  
}
export default  Perfil 