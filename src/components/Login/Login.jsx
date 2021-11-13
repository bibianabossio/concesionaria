import React,{ useState } from "react";

import Title from "../Title/Title";
import Label from "../Label/Label";
import Input from "../Input/Input";
import "./Login.css";
import { useContext } from "react";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Registrarse from "../Registrarse/Registrarse";
import { BrowserRouter as Router,Redirect, useHistory, Link } from "react-router-dom";
import Main from '../Main/Main'
import AuthContext from "../../context/AuthContext";


const Login = ({setSesionActiva,sesionActiva}) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  // const [isLogin, setIsLogin] = useState(false); 
  const [hasError] = useState(false);
  const { handleSeleccion, setSeleccion } = useContext(BarraNavegacionContexto); 
  let history = useHistory()


  //

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  }
  const formHandler = async (e) => {
    e.preventDefault();
    
    if (user && password !== "") {
      try {
        let config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            nombreUsuario: user,
            password: password,
          }),
        };

        let res = await fetch(
          `https://concesionario-crud.herokuapp.com/auth/session`,
          config
        );
        let resEnJson = await res.json();
        localStorage.setItem("sesion", JSON.stringify(resEnJson));
        console.log(" Inicio sesion! :", resEnJson);
        if(resEnJson.status===401){
          toast("Datos Incorrectos", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progreso: undefined,
          });
          
        
        }else{
          setSesionActiva(true)
          console.log("entro aca, estanaca",sesionActiva);
          
          if (resEnJson.bearer === "Bearer") {
            toast("iniciaste sesion!", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progreso: undefined,
            });
            setTimeout(() => {
              
        localStorage.setItem('activo', true)
          console.log("entro aca, estanaca",sesionActiva);

              setSeleccion("menu");
              history.push("/")
              
            }, 5000);
          }
        }
      } catch (error) {
        
        console.log(" hubo un error :(  :", error);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {" "}
       {/*  <li>
          <Link to="/singin">Registrarse</Link>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        
        <Route exact path="/singin" component={Registrarse}></Route>
        <Route exact path="/" component={Main}></Route> */}
        <br />
        <Title className="title-label" text="Concesionaria Citroën" />
        <form className="form">
          {hasError && (
            <label className="label-alert">
              {" "}
              Datos incorrectos o No registrados
            </label>
          )}
          <br />
          <div className="label">
            <Label text="Usuario" />
            <Input
              attribute={{
                id: "usuario",
                name: "usuario",
                type: "text",
                placeholder: "",
              }}
              handleChange={handleChange}
            />
          </div>
          <br />
          <div className="label">
            <Label text="Contraseña" />
            <Input
              attribute={{
                id: "contraseña",
                name: "contraseña",
                type: "password",
                placeholder: "",
              }}
              handleChange={handleChange}
              param={passwordError}
            />
          </div>
          {passwordError && (
            <label className="label-error">
              Contraseña inválida o incompleta
            </label>
          )}
          <br />
          <div className="submit-button-container">
            <button
              onClick={formHandler}
              value="menu"
              className="submit-button"
            >
              Ingresar al Sistema
            </button>

            <Link type="button" className="submit-button" to="/singin">Registrarse</Link>


            {/* <button
             className="submit-button"
              onClick={handleSeleccion}
              value="registrarse"
              
            >
              Registrarse
            </button> */}
            <ToastContainer> </ToastContainer>
          </div>
          <div className="crear-cuenta-login">
            
            <p >Aun no estas registrado?</p>
            <br/>
            <Link type="button" className="submit-button-crear-cuenta" to="/singin">Crear Cuenta</Link>

           
          </div>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Login;
