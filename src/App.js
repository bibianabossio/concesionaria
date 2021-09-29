import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Contrasenia from "./pages/Login/components/Contrasenia/Contrasenia";
import Menu from "./pages/Login/components/Menu/Menu";
import Tabla from "./pages/Login/components/Menu/Repuestos/Tabla";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link> <br />
        <Link to="/contraseña">Actualizar Usuario</Link> <br />
        <Link to="/menu">Inicio</Link> <br />
        <Link to="/tabla">Listado de Repuestos</Link> <br />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <Login />
              </div>
            );
          }}
        ></Route>
        <Route path="/contraseña" component={Contrasenia} />
        <Route path="/menu" component={Menu} />
        <Route path="/tabla" component={Tabla} />
      </Router>
    </div>
  );
}

export default App;
