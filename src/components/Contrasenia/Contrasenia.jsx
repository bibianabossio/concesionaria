import React, { useState } from "react";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Label from "../Label/Label";
import "../Login/Login.css"
import "../Label/Label.css";
import { Link } from "react-router-dom";

function Contrasenia() {
  const classes = useState();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
    } else {
      if (value === "contraseña") {
        setPassword(value);
      }
    }
  }
  function handleSubmit() {
    let account = { user, password };
    if (account) {
      console.log("account:", account);
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <Title text="Actualizar Datos del Usuario" />
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
          />
        </div>
        <br />
        

        <div className="label">
          <Label text="Validar Contraseña" />
          <Input
            attribute={{
              id: "contraseña",
              name: "contraseña",
              type: "password",
              placeholder: "",
            }}
            handleChange={handleChange}
          />
        </div>
        <br />
        

        <div className="submit-button-container">
        <button onClick={handleSubmit} className="submit-button">
              Guardar Nuevo Usuario
            </button>
            <button onClick={handleSubmit} className="submit-button">
            Modificar Datos 
          </button>
          <button onClick={handleSubmit} className="submit-button">
            Eliminar Usuario
          </button>
          <Link to= "menu"> 
          <button onClick={handleSubmit} className="submit-button">
            Volver al inicio
          </button>
          </Link>
        </div>

        <br />
      </div>
    </div>
  );
}
export default Contrasenia;