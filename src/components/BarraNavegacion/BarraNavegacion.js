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
import CrearAutomovil from "../CrearAutomovil/CrearAutomovil";

import Typography from "@mui/material/Typography";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import { Button } from "@mui/material";
import EditarRepuesto from "../EditarRepuesto/EditarRepuesto";
import EditarAutomovil from "../EditarAutomovil/EditarAutomovil";

const BarraNavegacion = () => {

  const {handleSeleccion} = useContext(BarraNavegacionContexto)
  return (
    <>
      
        <Box className="barraNavegacion">
          <Button onClick={handleSeleccion} style={{color:'white'}} value="login" >Login</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}   value="registrarse" >Registrarse</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}  value="menu" >Inicio</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}  value="crear repuesto" >Crear Repuesto</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}  value="crear automovil" >Crear Automovil</Button>
       
        </Box>
     /*kjdnskd*/
    </>
  );
};
/* skdsdk 
  <Router>
                        <Label text="Automoviles" />
                        <Link to="/tabla">Listado de Repuestos</Link> <br />
                        <Route path="/perfil" component={Perfil} />
                        <Route path="/tabla" component={ListadoRepuestos} />
                        <Route path="/crearrepuesto" component={CrearRepuesto} />
                        <Route path="/EditarRepuesto/:id" component={EditarRepuesto} />
                        <Route path="/tabla3" component={ListadoAutomoviles} />
                        <Route path="/crearautomovil" component={CrearAutomovil} />
                        <Route path="/EditarAutomovil/:id" component={EditarAutomovil} />
                      </Router>
*/
export default BarraNavegacion;
