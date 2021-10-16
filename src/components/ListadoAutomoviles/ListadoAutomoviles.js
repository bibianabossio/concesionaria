import { AvTimer } from "@mui/icons-material";
import  { Component } from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Loading from "../Loading/Loading";


export default class Auto extends Component {
  constructor(props) {
    super(props);
    this.state = { objeto: [] };
   
    
  }
  
  async componentDidMount() {
    const res = await fetch(
      "https://api-concesionario-taller6.herokuapp.com/auto"
    );
    const data = await res.json();
    this.setState({ objeto: data });
    console.log(this.state.objeto);
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
        `https://api-concesionario-taller6.herokuapp.com/auto`,
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
      <>
      <h2 style={{ height: 25, width: '100%' }}>Listado de Automoviles</h2>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>clave</TableCell>
            <TableCell align="right">anio</TableCell>
            <TableCell align="right">Modelo</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Vendedor</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.objeto.autos?this.state.objeto.autos.map((auto)=> (
            <TableRow
              key={auto.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {auto.id}
              </TableCell>
              <TableCell align="right">{auto.year}</TableCell>
              <TableCell align="right">{auto.name}</TableCell>
              <TableCell align="right">{auto.color}</TableCell>
              <TableCell align="right">{auto.price}</TableCell>
              <TableCell align="right">{auto.user_id}</TableCell>
              <TableCell align="right">
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
              </TableCell>
              <TableCell align="right">
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
              </TableCell>
            </TableRow>
          )):<Loading/> }
        </TableBody>
      </Table>
    </TableContainer>
      </>
    );
  }
}
