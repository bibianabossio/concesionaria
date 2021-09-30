import React, { Component } from "react";


export default class Post extends Component {
    state = {
        dolar: [],
      };
      traerValorDolar = async () => {
        const respuesta = await fetch(
          `https://www.dolarsi.com/api/api.php?type=valoresprincipales`
        );
    
        let respuestaJson = await respuesta.json();
        console.log(respuestaJson)
        return respuestaJson
        /*this.setState({ dolar: respuestaJson });*/
      };
    
  
  render() {
    return (
    
      <tbody>
     
        {this.state.dolar.map((post) => {
          return (
            <tr key={post.casa}>
              <>
                <td>{post.compra}</td>
               
              </>
            </tr>
          );
        })}
      
      </tbody>
    );
  }
}
