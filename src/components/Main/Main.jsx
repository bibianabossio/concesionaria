import * as React from 'react';
import {useContext} from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
/* import Grid from "@mui/material/Grid"; */
import Menu from "../Menu/Menu";
import './Main.css'
import BarraNavegacion from '../BarraNavegacion/BarraNavegacion';
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import Login from '../Login/Login';
import Registrarse from '../Registrarse/Registrarse';
import CrearRepuesto from '../CrearRepuesto/CrearRepuesto';
import CrearAutomovil from '../CrearAutomovil/CrearAutomovil';
import EditarAutomovil from '../EditarAutomovil/EditarAutomovil';
import EditarRepuesto from '../EditarRepuesto/EditarRepuesto';
import Perfil from '../Perfil/Perfil';

const Main = () => {
  const {seleccion,form} = useContext(BarraNavegacionContexto)
/*   const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  })); */
/*hola */
  const seleccionado = () => {
    
    switch(seleccion) {

      case "login":   return <Login/>;
      case "registrarse":   return <Registrarse/>;
      case "crear repuesto": return <CrearRepuesto/>;
      case "menu":  return <Menu/>;
      case "perfil":  return <Perfil/>;
      case "crear automovil":  return <CrearAutomovil/>;
      case "editar automovil":  return <EditarAutomovil/>;
      case "editar repuesto": {
        
        return <EditarRepuesto data={form}/>;
      }

      default:      return <h1>No project match {seleccion}</h1>
    }
  }

  return (
    
    <>
        <BarraNavegacion/>
        {seleccionado()}
      {/* <Grid container spacing={2}>
      
        <Grid item xs={6} md={4}>
          <Item><BarraNavegacion/></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><ListadoRepuestos/></Item>
        </Grid>
        
      </Grid> */}
    </>
   
  );
};
export default Main
