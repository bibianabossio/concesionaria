import * as React  from "react";
import {useContext} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./BarraNavegacion.css";
import Login from "../Login/Login";
import Contrasenia from "../Contrasenia/Contrasenia";
import Menu from "../Menu/Menu";
import CrearRepuesto from "../CrearRepuesto/CrearRepuesto";
import Registrarse from "../Registrarse/Registrarse";
import Perfil from "../Perfil/Perfil";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import { Button } from "@mui/material";
import EditarRepuesto from "../EditarRepuesto/EditarRepuesto";

const BarraNavegacion = () => {

  const {handleSeleccion} = useContext(BarraNavegacionContexto)
  return (
    <>
      
        <Box className="barraNavegacion">
          <Button onClick={handleSeleccion} value="login" >Login</Button>
          <Button onClick={handleSeleccion} value="registrarse" >Registrarse</Button>
          <Button onClick={handleSeleccion} value="menu" >Inicio</Button>
          <Button onClick={handleSeleccion} value="crear repuesto" >crear Repuesto</Button>
          
       
        </Box>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/contraseña" component={Contrasenia} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/menu" component={Menu} />
        <Route path="/crearrepuesto" component={CrearRepuesto} />
        <Route path="/EditarRepuesto/:id" component={EditarRepuesto} />
      </Router>
    </>
  );
};
/* skdsdk */
export default BarraNavegacion;
