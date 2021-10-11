import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Label from "../Label/Label";
import "../Label/Label.css";
import Tabla from "../Tabla/Tabla";
import CrearRepuesto from "../CrearRepuesto/CrearRepuesto";
import EditarRepuesto from "../EditarRepuesto/EditarRepuesto";
import Dolar from "../Dolar/Dolar";
import Perfil from "../Perfil/Perfil";
import ListadoRepuestos from "../ListadoRepuestos/ListadoRepuestos";
import ListadoAutomoviles from "../ListadoAutomoviles/ListadoAutomoviles";
import CrearAutomovil from "../CrearAutomovil/CrearAutomovil";
import EditarAutomovil from "../EditarAutomovil/EditarAutomovil";


class Menu extends Component {
 

  render() {
   
    return (
      <>
      
        <tabla>
          <tr>
            <td>
             
               
                  <div className="list-content">
                    <div className="list">
                     
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
                     
                    </div>
                  </div>
                
             
            </td>
          </tr>
        </tabla>
       
      </>
    );
  }
}
export default Menu;
