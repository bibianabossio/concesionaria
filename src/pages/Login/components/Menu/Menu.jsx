import React, { Component } from "react";
import Label from "../Label/Label";
import "../Label/Label.css";
import Tabla from "./Repuestos/Tabla";

class Menu extends Component {
  render() {
    return (
      <>
        <form>
          <br />
          <div className="list-container">
            <div className="list-content">
              <div className="list">
                <Label text="Automoviles" />
                <Label text="Repuestos" />
              </div>
            </div>
          </div>
        </form>
        <Tabla />
      </>
    );
  }
}

export default Menu;
