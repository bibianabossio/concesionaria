import React, { Component, useContext } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";

const Registrarse = () => {
  const { handleSeleccion, setSeleccion } = useContext(BarraNavegacionContexto);
  const crearUsuario = async (event) => {
    event.preventDefault();
    console.log("hice click", event.target.form.nombreUsuario.value);
    let resNombreUsuario = event.target.form.nombreUsuario.value
      ? event.target.form.nombreUsuario.value
      : "";
    let resApellido = event.target.form.apellido.value
      ? event.target.form.apellido.value
      : "";
    let resNombre = event.target.form.nombre.value
      ? event.target.form.nombre.value
      : "";
    let resDNI = event.target.form.dni.value ? event.target.form.dni.value : "";
    let resEmail = event.target.form.email.value
      ? event.target.form.email.value
      : "";
    let resPassword = event.target.form.password.value
      ? event.target.form.password.value
      : "";

    try {
      let config = {
        method: "POST",
        headers: {
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
        `https://concesionario-crud.herokuapp.com/auth/usuario`,
        config
      );
      let resEnJson = await res.json();
      console.dir(resEnJson);
      if (
        resEnJson.idUsuario != null ||
        resEnJson.mensaje != "Nombre de usuario existente"
      ) {
        console.log(" SE CREO UN NUEVO USUARIO :", resEnJson);
        toast("Usuario Registrado", {
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
      console.log(" hubo un error :( EN LA ACTUALIZAXCION :", error);
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
          <Title className="title-label" text="Registrarse" />
          <form className="form">
            <Label text="Usuario" />
            <input className="regular-style" type="text" name="nombreUsuario" />
            <br />
            <Label text="Apellido" />
            <input className="regular-style" type="text" name="apellido" />{" "}
            <br />
            <Label text="Nombre" />
            <input className="regular-style" type="text" name="nombre" /> <br />
            <Label text="DNI" />
            <input className="regular-style" type="text" name="dni" />
            <br />
            <Label text="Email" />
            <input className="regular-style" type="text" name="email" />
            <br />
            <Label text="Contraseña" />
            <input className="regular-style" type="text" name="password" />
            <br />
            <br />
            <button
              onClick={crearUsuario}
              /* type="submit" */ className="submit-button"
            >
              Confirmar
            </button>

            <button
              onClick={eliminarUsuario}
              /* type="submit" */ className="submit-button"
            >
              Eliminar Usuario
            </button>
            <ToastContainer> </ToastContainer>
          </form>
          <br />
        </div>
      </div>
    </>
  );
};
export default Registrarse;
