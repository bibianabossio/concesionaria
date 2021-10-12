import * as React from 'react';
import {useContext} from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Menu from "../Menu/Menu";
import ListadoRepuestos from "../ListadoRepuestos/ListadoRepuestos";
import BarraNavegacion from '../BarraNavegacion/BarraNavegacion';
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import ListadoAutomoviles from "../ListadoAutomoviles/ListadoAutomoviles";

const Main = () => {
  const {seleccion} = useContext(BarraNavegacionContexto)
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
/*hola */
  const seleccionado = () => {
    switch(seleccion) {

      case "login":   return <Login/>;
      case "registrarse":   return <Registrarse/>;
      case "crear repuesto": return <CrearRepuesto/>;
      case "menu":  return <Menu/>;
      case "crear automovil":  return <CrearAutomovil/>;

      default:      return <h1>No project match</h1>
    }
  }

  return (
    
    <>
        <BarraNavegacion/>
      <Grid container spacing={2}>
      
        <Grid item xs={6} md={4}>
          <Item><BarraNavegacion/></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><ListadoRepuestos/></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><ListadoAutomoviles/></Item>
        </Grid>
      </Grid>
    </>
   
  );
};
export default Main