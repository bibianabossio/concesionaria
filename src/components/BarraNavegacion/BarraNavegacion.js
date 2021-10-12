import * as React  from "react";
import {useContext} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./BarraNavegacion.css";

import Box from "@mui/material/Box";
import CrearAutomovil from "../CrearAutomovil/CrearAutomovil";

import Typography from "@mui/material/Typography";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import { Button } from "@mui/material";

/*hola */
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
     
    </>
  );
};
/*
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
