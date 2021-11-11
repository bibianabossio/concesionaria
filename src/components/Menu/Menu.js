import{ useState } from "react";
import * as React from 'react';

import "../Label/Label.css";
import ListadoRepuestos from "../ListadoRepuestos/ListadoRepuestos";
import ListadoAutomoviles from "../ListadoAutomoviles/ListadoAutomoviles";
import Dolar from "../Dolar/Dolar";
import Login from "../Login/Login";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Perfil from "../Perfil/Perfil";
/*hola */
/* aca es prueba de recuperoa */
const Menu =()=> {
  
  const [Seleccion2, setseleccion2] = useState('dolar')
    
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    
   /*  const funcionSeleccionarMenu=(e)=>{
      e.preventDefault()
      console.log("hice click en ",e.target.value);
     } */
    
    return (
      <>     
      <Grid container spacing={2}>
      
      <Grid item xs={6} md={4}>
      <Item>
       
       <button onClick={(e)=>{
         e.preventDefault()
         setseleccion2('dolar')
       }} value='dolar'>Dolar</button>
     </Item>

         
        <Item>
       <button  onClick={(e)=>{
         e.preventDefault()
         setseleccion2('repuestos')
       }}  value='repuestos'>Listado de Repuestos</button>
          
        </Item>
        <Item>
       
       <button  onClick={(e)=>{
         e.preventDefault()
         setseleccion2('autos')
       }}   value='autos'>Listado de Autos</button>
        </Item>

        <Item>
       <button  onClick={(e)=>{
         e.preventDefault()
         setseleccion2('cerrar')
         
         }}  value='cerrar'>Cerrar Sesión</button>
          
        </Item>
      </Grid>
      <Grid  item xs={6} md={8}>
        <Item>
        

        {Seleccion2==='dolar'?<Dolar/>:null}
        {Seleccion2==='repuestos'?<ListadoRepuestos/>:null}
        {Seleccion2==='autos'?<ListadoAutomoviles/>:null}
        {Seleccion2==='cerrar'?<Login/>:null}
        </Item>
      </Grid>
      
    </Grid> 
       
       
      </>
    );
  }

export default Menu;