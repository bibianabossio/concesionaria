import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Contrasenia from "./components/Contrasenia/Contrasenia";
import Menu from "./components/Menu/Menu";
import CrearRepuesto from "./components/CrearRepuesto/CrearRepuesto";
import Registrarse from "./components/Registrarse/Registrarse";
import Perfil from "./components/Perfil/Perfil";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
