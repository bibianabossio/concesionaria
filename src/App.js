import React from "react";
import { BrowserRouter as Router,
  Switch, Route, Link } from "react-router-dom";
//import "./App.css";
/*
import Contrasenia from "./components/Contrasenia/Contrasenia";
import Menu from "./components/Menu/Menu";
import CrearRepuesto from "./components/CrearRepuesto/CrearRepuesto";
import Perfil from "./components/Perfil/Perfil"; */
import Login from "./components/Login/Login";
import Registrarse from "./components/Registrarse/Registrarse";
import Main from "./components/Main/Main";
import "./index.css";
import { SeleccionProvider } from "./context/BarraNavegacionContexto";

function App() {
  return (
    <SeleccionProvider>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/singin">
            <Registrarse />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>

       
      </Router>
    </SeleccionProvider>
  );
}

export default App;
