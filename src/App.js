import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import "./App.css";
import Login from "./components/Login/Login";
import Contrasenia from "./components/Contrasenia/Contrasenia";
import Menu from "./components/Menu/Menu";
import CrearRepuesto from "./components/CrearRepuesto/CrearRepuesto";
import Registrarse from "./components/Registrarse/Registrarse";
import Perfil from "./components/Perfil/Perfil";
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
