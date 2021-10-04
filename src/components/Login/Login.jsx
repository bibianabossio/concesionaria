import React, { useState } from "react";
import Title from "../Title/Title";
import Label from "../Label/Label";
import Input from "../Input/Input";
import "./Login.css";
import Registrarse from "../Registrarse/Registrarse";


import { Link } from "react-router-dom";


const Login = () => {
  const classes = useState();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "bibi" && param.password === "123456") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  }
  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <Title text="Concesionaria Citroën" />
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
          <Link to="menu">
          <button onClick={handleSubmit}  className="submit-button">
            Ingresar al Sistema
          </button>
          </Link>  
      
         <Link to= "registrarse"> 
            <button onClick={handleSubmit} className="submit-button">
              Registrarse
            </button>
            </Link> 

          
           
            <br />
          </div>
        </div>
      </div>
  
  );
};

export default Login;
