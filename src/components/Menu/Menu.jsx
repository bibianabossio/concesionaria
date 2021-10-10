import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Label from "../Label/Label";
import "../Label/Label.css";
import Tabla from "../Tabla/Tabla";
import CrearRepuesto from "../CrearRepuesto/CrearRepuesto";
import EditarRepuesto from "../EditarRepuesto/EditarRepuesto";
import Dolar from "../Dolar/Dolar";
import Perfil from "../Perfil/Perfil"
import ListadoRepuestos from "../ListadoRepuestos/ListadoRepuestos"

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
