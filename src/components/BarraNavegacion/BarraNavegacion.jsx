import * as React from "react";
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

const BarraNavegacion = () => {
  return (
    <>
      <Router>
        <Box className="barraNavegacion">
          <Typography sx={{ minWidth: 100 }}>
            <Link sx={{ margin: 100 }} to="/">
              Login
            </Link>
          </Typography>
          <Typography sx={{ minWidth: 100 }}>
            <Link sx={{ minWidth: 100 }} to="/registrarse">
              Registrarse
            </Link>
          </Typography>
          <Typography sx={{ minWidth: 100 }}>
            <Link to="/menu">Inicio</Link>
          </Typography>
          <Typography sx={{ minWidth: 100 }}>
            <Link to="/perfil">Perfil</Link>
          </Typography>
          <Typography sx={{ minWidth: 170 }}>
            <Link to="/contraseña">Recuperar Contraseña</Link>
          </Typography>
          <Typography sx={{ minWidth: 140 }}>
            <Link to="/crearrepuesto">Crear Repuesto</Link>
          </Typography>
        </Box>

        <Route exact path="/" component={Login} />
        <Route path="/registrarse" component={Registrarse} />
        <Route path="/contraseña" component={Contrasenia} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/menu" component={Menu} />
        <Route path="/crearrepuesto" component={CrearRepuesto} />
      </Router>
    </>
  );
};
/* skdsdk */
export default BarraNavegacion;
