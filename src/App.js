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
import { useJwt } from "react-jwt";
let tokenExpirado="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzYwNDU0ODJ9.m4VPBh7C8bjwuJgg3DAg0OZt_cOzzKmFvp258R9B1Fw"
function App() {
  const [sesionActiva, setSesionActiva] = useState(false);
  
 //localStorage.setItem('sesion',{token:""})
  const { decodedToken, isExpired } = useJwt(JSON.parse(localStorage.getItem("sesion"))?.token?JSON.parse(localStorage.getItem("sesion")).token:tokenExpirado);
  if(JSON.parse(localStorage.getItem("sesion"))!==""){
    console.log("token", JSON.parse(localStorage.getItem("sesion")));
    console.log("decodificado", decodedToken);
    console.log("esta expirado???", isExpired);

  } 
  /* sdsds*/
  /* useEffect(() => {
    if (localStorage.getItem("activo")=== "true"   ) {
      if(!isExpired){
        setSesionActiva(true)
        console.log("entro aca inicial");

      }else{
        setSesionActiva(false)
      }
    }else{
      setSesionActiva(false)
    }
  }, []); */
 useEffect(() => {
    if (localStorage.getItem("activo")=== "true" ) {
      if(!isExpired){
        setSesionActiva(true)
        console.log("entro aca inicial");

      }else{
        setSesionActiva(false)
      }
    }else{
      setSesionActiva(false)
    }
  }, [sesionActiva]);
 

  return (
        <Router>
    <AuthProvider>
      <SeleccionProvider setSesionActiva={setSesionActiva}>
          <Switch>
            <Route  exact path="/login">
            {!sesionActiva ? <Login setSesionActiva={setSesionActiva} sesionActiva={sesionActiva} />:
            <Redirect exact to="/" /> }
              
            </Route>
            <Route exact path="/singin">
              <Registrarse />
            </Route>
            <Route exact path="/">
            {!sesionActiva ?<Redirect exact to="/login" /> : <Main setSesionActiva={setSesionActiva}/> }
            
              
            </Route>
          </Switch>
      </SeleccionProvider>
    </AuthProvider>
        </Router>
  );
}

export default (App);
