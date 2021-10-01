import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Label from "../Label/Label";
import "../Label/Label.css";
import Tabla from "./Repuestos/Tabla";
import CrearRepuesto from "./Repuestos/CrearRepuesto";

class Menu extends Component {
  render() {
    return (
      <>
        <tabla>
          <tr>
            <td>
              <form>
                <div>
                  <div className="list-content">
                    <div className="list">
                      <Router>
                        <Label text="Automoviles" />
                        <Link to="/tabla">Listado de Repuestos</Link> <br />
                        <Link to="/crearrepuesto"></Link> <br />
                        <Route path="/tabla" component={Tabla} />
                        <Route path="/crearrepuesto" component={CrearRepuesto} />
                      </Router>
                    </div>
                  </div>
                </div>
              </form>
            </td>
          </tr>
        </tabla>
      </>
    );
  }
}
export default Menu;
