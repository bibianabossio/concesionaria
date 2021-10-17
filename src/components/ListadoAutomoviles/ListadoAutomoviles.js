import { AvTimer } from "@mui/icons-material";
import { Component,useContext,useState,useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loading from "../Loading/Loading";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";

const  Auto =()=> {
  const [objeto, setObjeto] = useState([])
  const { handleSeleccion, handleSubmitModificar } = useContext(BarraNavegacionContexto);
 

  useEffect(async() => {
    
    const res = await fetch("https://api-concesionario-taller6.herokuapp.com/auto");
   const data = await res.json();
   setObjeto(data);
   console.log(objeto);
   
  }, [])
  const funcionBorrar = async (event) => {
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
        `https://api-concesionario-taller6.herokuapp.com/auto/${event.target.value}`,
        config
      );
      let resEnJson = await res.json();
      console.log(" SE BORRO! :", resEnJson);
     
    } catch (error) {
      console.log(" hubo un error :( :", error);
    }
  };
 /*olsd*/

  
    return (
      <>
        <h2 style={{ height: 25, width: "100%" }}>Listado de Automoviles</h2>
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
              {objeto ? (
                objeto.map((auto) => (
                  <TableRow
                    key={auto.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                      <form onSubmit={handleSubmitModificar}>
                        <input
                          type="text"
                          hidden
                          name="idInputModif"
                          value={auto.id}
                          onChange={(e) => {
                            console.log(
                              "se hizo clicl  en modificar perro",
                              e.target.idInputModif
                            );
                          }}
                        />
                         
                        <input
                          type="text"
                          hidden
                          name="yearInputModif"
                          value={auto.year}
                          onChange={(e) => {}}
                        />
                        <input
                          type="text"
                          hidden
                          name="nameInputModif"
                          value={auto.name}
                          onChange={(e) => {}}
                        />
                        <input
                          type="text"
                          hidden
                          name="colorInputModif"
                          value={auto.color}
                          onChange={(e) => {}}
                        />
                        <input
                          type="text"
                          hidden
                          name="precioInputModif"
                          value={auto.price}
                          onChange={(e) => {}}
                        />
                        <input
                          type="text"
                          hidden
                          name="userIdInputModif"
                          value={auto.user_id}
                          onChange={(e) => {}}
                        />
                        <button
                          type="submit"
                          name="tipoComponente"
                          value={"editar automovil"}
                          className="submit-button"
                        >
                          Modificar
                        </button>
                      </form>
                     
                    </TableCell>
                    <TableCell align="right">
                      <form>
                        <button
                          type="submit"
                          onClick={funcionBorrar}
                          value={auto.id}
                          className="submit-button"
                        >
                          Eliminar
                        </button>
                      </form>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Loading />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }


export default Auto