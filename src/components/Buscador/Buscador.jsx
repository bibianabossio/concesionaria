import React from 'react'

const Buscador=async(campoBusqueda,textoAbuscar)=> {

    try {
       
        let config = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          }
        };
        let res = await fetch(
          `https://api-taller-mecanico.herokuapp.com/repuestos/?${campoBusqueda}=${textoAbuscar}`,
          config
        );
        let resEnJson = await res.json();
        console.log(" SE encontro esto:", resEnJson);
        return resEnJson
      } catch (error) {
          console.log(" hubo un error :( En busqueda :", error);
        return error
      }
   
}

export default Buscador
