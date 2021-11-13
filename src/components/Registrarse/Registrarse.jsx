
import React, {  useContext } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import "./Registrarse.css"
import Login from "../Login/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from '../Main/Main'

const Registrarse = () => {
  const { setSeleccion } = useContext(BarraNavegacionContexto);
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
        `https://concesionario-crud.herokuapp.com/auth/usuarios`,
        config
      );
      let resEnJson = await res.json();
      console.dir(resEnJson);
      if (
        res.status===201) {
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
      console.log(" hubo un error :( EN LA ACTUALIZACION :", error);
    }
  };
  

  return (
    <>
   {/*  <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/" component={Main}></Route> */}
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
          <br/>
          <div className="contenedor">
            <p>Ya te encuentras registrado?</p>
          <div>
           
            <Link type="button" className="registrarse-boton-iniciar-sesion" to="/login">Iniciar Sesion</Link>
          </div>
          </div>
            

           
            <ToastContainer> </ToastContainer>
          </form>
          <br />
        </div>
      </div>
    </>
  );
};
export default Registrarse;
