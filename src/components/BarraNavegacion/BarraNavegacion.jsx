import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import "./App.css";
import Login from "../Login/Login";
import Contrasenia from "../Contrasenia/Contrasenia";
import Menu from "../Menu/Menu";
import CrearRepuesto from "../CrearRepuesto/CrearRepuesto";
import Registrarse from "../Registrarse/Registrarse";
import Perfil from "../Perfil/Perfil";

const BarraNavegacion =()=>{


    return (
        <>
        <Router>
        <Link to="/">Home</Link> <br />
        <Link to="/registrarse"></Link>
        <Link to="/perfil">Perfil</Link> <br />
        <Link to="/contraseña">Actualizar Usuario</Link> <br />
        <Link to="/menu">Inicio</Link> <br />
        <Link to="/crearrepuesto"></Link>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <Login />
              </div>
            );
          }}
        ></Route>
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/contraseña" component={Contrasenia} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/menu" component={Menu} />
        <Route path="/crearrepuesto" component={CrearRepuesto} />
      </Router>
      </>
    )
}
export default BarraNavegacion