import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
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
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [sesionActiva, setSesionActiva] = useState(false);
  useEffect(() => {
    if (sesionActiva) {
      setSesionActiva(true)
      console.log("entro aca");
    }
  }, [sesionActiva]);


  return (
        <Router>
    <AuthProvider>
      <SeleccionProvider>
          <Switch>
            <Route  exact path="/login">
              <Login setSesionActiva={setSesionActiva} sesionActiva={sesionActiva} />
            </Route>
            <Route exact path="/singin">
              <Registrarse />
            </Route>
            <Route exact path="/">
            <Main/>
              
            </Route>
          </Switch>
      </SeleccionProvider>
    </AuthProvider>
        </Router>
  );
}

export default (App);
