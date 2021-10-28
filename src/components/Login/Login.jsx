import { useState } from "react";
import * as React from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
import Input from "../Input/Input";
import "./Login.css";
import { useContext } from "react";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";

const Login = () => {
  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { handleSeleccion,setSeleccion } = useContext(BarraNavegacionContexto);

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
  const formHandler = async(e) => {
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
            "nombreUsuario": user,
            "password": password,
          }),
        };

        let res = await fetch(
          `https://concesionario-crud.herokuapp.com/auth/login`,
          config
        );
        let resEnJson = await res.json();
        localStorage.setItem("sesion",JSON.stringify(resEnJson) );
        console.log(" Inicio sesion! :", resEnJson);
        if (resEnJson.bearer=== "Bearer"){
          setSeleccion("menu")
        }
        
          } catch (error) {
        console.log(" hubo un error :(  :", error);
      }
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        {" "}
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

            <button
              onClick={handleSeleccion}
              value="registrarse"
              className="submit-button"
            >
              Registrarse
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Login;
