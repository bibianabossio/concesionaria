import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./dolar.css"

let dolarOficial = {};
let dolarBlue = {};

fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
  .then((resnponde) => resnponde.json())
  .then((data) => {
    data.map((item, index) => {
      dolarOficial =        item["casa"].nombre === "Dolar Oficial" ? item["casa"] :dolarOficial ;
      dolarBlue = item["casa"].nombre === "Dolar Blue" ? item["casa"] : dolarBlue;
      console.log(" este es el console oficial;:", index, "del ", item);
      console.log(" este es el console del blue :", index, "del ", dolarBlue);
      console.log(typeof datos);
    });
  })
  .catch((err) => console.log(err));
export default class Dolar extends Component {
  render() {
    return (
      <TableContainer id="tabla" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Cotizacion</TableCell>
              <TableCell align="right">Compra</TableCell>
              <TableCell align="right">venta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dolarOficial.nombre}
              </TableCell>
              <TableCell align="right">{dolarOficial.compra}</TableCell>
              <TableCell align="right">{dolarOficial.venta}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {dolarBlue.nombre}
              </TableCell>
              <TableCell align="right">{dolarBlue.compra}</TableCell>
              <TableCell align="right">{dolarBlue.venta}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
