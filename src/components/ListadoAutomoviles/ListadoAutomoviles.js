import React, { Component } from "react";
/*hola */
export default class Auto extends Component {
  state = {
    auto: [],
  };
  async componentDidMount() {
    const res = await fetch(
      "https://api-concesionario-taller6.herokuapp.com/autos"
    );
    const data = await res.json();
    this.setState({ auto: data });
    console.log(data);
  }
  funcionBorrar = async (event) => {
    event.preventDefault();
    console.log(" se hizo click para borara el coso :", event.target.value);

    try {
      let config = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(event.target.value),
      };
      let res = await fetch(
        `https://api-concesionario-taller6.herokuapp.com/autos`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE BORRO! :", resEnJson);
    } catch (error) {
      console.log(" hubo un error :( :", error);
    }
  };
  editarAutomovil = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  render() {
    return (
      <table className="tabla-style3">
        <thead>
          <th>Clave</th>
          <th>Año</th>
          <th>Modelo</th>
          <th>Color</th>
          <th>Precio</th>
          <th>Vendedor</th>
          <th></th>
          <th></th>
        </thead>
        <tbody className="tabla-style3">
          {this.state.auto.map((auto) => {
            return (
              <tr key={auto.id}>
                <>
                  <td>{auto.id}</td>
                  <td>{auto.year}</td>
                  <td>{auto.name}</td>
                  <td>{auto.color}</td>
                  <td>{auto.price}</td>
                  <td>{auto.user_id}</td>
                  <td>
                    <form>
                      <button
                        type="submit"
                        onClick={this.funcionBorrar}
                        value={auto.id}
                        className="submit-button"
                      >
                        Eliminar
                      </button>
                    </form>
                  </td>
                  <td>
                    {/*  <form>                    
                    <button type="submit" onClick={this.editarRepuesto} value={auto.id} className="submit-button">Editar Repuesto</button>                    
                  </form> */}
                    <Router>
                      <Link
                        className="submit-button"
                        to={{
                          pathname: `EditarAutomovil/${auto.id}`,

                          state: {
                            detail: auto,
                            id: auto.id,
                            year: auto.year,
                            name: auto.name,
                            color: auto.color,
                            price: auto.price,
                            user_id: auto.user_id,
                          },
                        }}
                        value={auto.id}
                      >
                        Modificar
                      </Link>
                    </Router>
                  </td>
                </>
              </tr>
            );
          })}
          <tr>
            <td colspan="5">
              <Router>
                <Link className="submit-button" to="/crearautomovil">
                  Crear Automovil
                </Link>
              </Router>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
