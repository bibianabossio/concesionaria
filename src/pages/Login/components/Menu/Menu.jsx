import React, { Component } from "react";
import Label from "../Label/Label";
import "../Label/Label.css";
import Tabla from "./Repuestos/Tabla";

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
                      <Label text="Automoviles" />
                      <Label text="Repuestos" />
                    </div>
                  </div>
                </div>
              </form>
            </td>

            <td>
              <Tabla />
            </td>
          </tr>
        </tabla>
      </>
    );
  }
};
export default Menu;
