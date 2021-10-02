import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Label from "../Label/Label";
import "../Label/Label.css";
import Tabla from "./Repuestos/Tabla";
import CrearRepuesto from "./Repuestos/CrearRepuesto";

class Menu extends Component {
  state = {
    dolar: [],
  };
  traerValorDolar = async () => {
    const respuesta = await fetch(
      `https://www.dolarsi.com/api/api.php?type=valoresprincipales`
    );

    let respuestaJson = await respuesta.json();
   
    return (
    
      <>
     
        {respuestaJson.map((post) => {
          console.log(post)
          return (
            post
          );
        })}
      
     </>
    );
   /* this.setState({ dolar: respuestaJson });*/
  };

  render() {
    let resultado=this.traerValorDolar();
    return (
      <>
      
        <tabla>
          <tr>
            <td>
              <form>
                <div>
                  <div className="list-content">
                    <div className="list">
                      {console.log("esl; resultado es ",resultado)}
                      {console.dir(resultado)}
                      <Router>
                        <Label text="Automoviles" />
                        <Link to="/tabla">Listado de Repuestos</Link> <br />
                        <Link to="/crearrepuesto"></Link> <br />
                        <Route path="/tabla" component={Tabla} />
                        <Route path="/crearrepuesto" component={CrearRepuesto} />
                      </Router>
                      {this.resultado}
                     { 
                     /*  {this.state.dolar.map((post) => {
                        return (
                          
                          <tr >
                            <>
                            {console.log(post)}
                              
                              
                            </>
                          </tr>
                        );
                      })} */}
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
