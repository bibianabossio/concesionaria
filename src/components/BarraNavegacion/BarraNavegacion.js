import * as React  from "react";
import {useContext} from "react";
import "./BarraNavegacion.css";

import Box from "@mui/material/Box";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import { Button } from "@mui/material";

/*hola */
const BarraNavegacion = ({setSesionActiva}) => {

  const {handleSeleccion} = useContext(BarraNavegacionContexto)
  return (
    <>
      
        <Box className="barraNavegacion">
          {/* <Button onClick={handleSeleccion} style={{color:'white'}} value="login" >Login</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}   value="registrarse" >Registrarse</Button> */}
          <Button onClick={handleSeleccion} style={{color:'white'}}  value="menu" >Inicio</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}  value="perfil" >Perfil</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}  value="crear repuesto" >Crear Repuesto</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}  value="crear automovil" >Crear Automovil</Button>
          <Button onClick={handleSeleccion} style={{color:'white'}}  value="cerrar sesion" >Cerrar Sesion</Button>
       
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