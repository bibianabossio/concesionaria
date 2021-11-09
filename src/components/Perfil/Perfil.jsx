import React, { useContext, useState,useEffect } from "react";
import "./Perfil.css";
import Title from "../Title/Title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";

const Perfil = () => {
  const [objeto, setObjeto] = useState([])
  const { setSeleccion } = useContext(
    BarraNavegacionContexto
  );
  /* state = {
    user: [], 
  }; */


  let datos=localStorage.getItem("sesion")
  let localStorageEnArray=JSON.parse(datos)
  useEffect ( async () => {
   

     console.log(localStorageEnArray);
    console.log(localStorageEnArray.bearer); 
    //console.log(enArray[0]);
    try {
    let config = {
      method: "GET",
      headers: {
        Authorization: localStorageEnArray.bearer +" " +localStorageEnArray.token,
        Accept: "application/json",
        "content-type": "application/json",
      }
    };
    const res = await fetch(
       "https://concesionario-crud.herokuapp.com/me",
       config
       );
    const data = await res.json();
    setObjeto(data);
    console.log(data);
      
    } catch (error) {
      
    }
   
  },[])
  /* const cargarUsuario = async () => {
    const res = await fetch (
      "https://concesionario-crud.herokuapp.com/auth/consultarUsuario/nombreUsuario");
   const data = await res.json();
   setObjeto(data);
   console.log(objeto);
    }
   
    let config = {
      method: "GET",
      headers: {
        Authorization: sesion.bearer +" " +sesion.token,
        Accept: "application/json",
        "content-type": "application/json",
      }
    }; */
      
      /* let res = await fetch(
          `https://concesionario-crud.herokuapp.com/auth/consultarUsuario/${resNombreUsuario}`,
          config
        );
      
        let resEnJson = res;
       
          cargarUsuario(resEnJson)
        } */
      
   
  



  const editarUsuario = async (event) => {
    event.preventDefault();
    console.log(event.target.parentElement[1]);
  /*  console.log(usuarioModificar); */
    let resNombreUsuario = event.target.parentElement[0].value;
    let resApellido = event.target.parentElement[1].value
      ? event.target.parentElement[1].value
      : event.target.parentElement[1].placeholder;
    let resNombre = event.target.parentElement[2].value
      ? event.target.parentElement[2].value
      : event.target.parentElement[2].placeholder;
    let resDNI = event.target.parentElement[3].value
      ? event.target.parentElement[3].value
      : event.target.parentElement[3].placeholder;
    let resEmail = event.target.parentElement[4].value
      ? event.target.parentElement[4].value
      : event.target.parentElement[4].placeholder;
    /* let resPassword = event.target.parentElement[5].value
      ? event.target.parentElement[5].value
      : event.target.parentElement[5].placeholder;  */
      console.log(resNombreUsuario,resApellido,resNombre, resDNI,resEmail);

     try {
      console.log(localStorageEnArray.token);
      console.log(localStorageEnArray.bearer); 
      let config = {
        method: "PUT",
        headers: {
          Authorization: localStorageEnArray.bearer + " " + localStorageEnArray.token,
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nombreUsuario: resNombreUsuario,
          apellido: resApellido,
          nombre: resNombre,
          dni: resDNI,
          email: resEmail,
        /*   password: resPassword, */
        }),
      };
      let res = await fetch(
        `https://concesionario-crud.herokuapp.com/auth/actualizarUsuario/`,
        config
      );
      let resEnJson = await res.json();
      console.dir(resEnJson);
      if (resEnJson.resNombreUsuario !== null || res.status === 200) {
        console.log(" SE ACTUALIZO USUARIO :", resEnJson);
        toast("Usuario Actualizado", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progreso: undefined,
        });
        setTimeout(() => {
          setSeleccion("login");
        }, 5000);
      } else {
        toast(resEnJson.mensaje, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progreso: undefined,
        });
      }
    } catch (error) {
      console.log(" hubo un error :( ", error);
    } 
  };

  const eliminarUsuario = async (event) => {
    event.preventDefault();
    console.log(" se hizo click para borrar al usuario :", event.target.value);

    try {
       let sesion = JSON.parse(localStorage.getItem("sesion")); 
      let config = {
        method: "DELETE",
        headers: {
          Authorization: sesion.bearer +" " +sesion.token, 
          Accept: "application/json",
          "content-type": "application/json",
        },
        /* body: JSON.stringify(event.target.value), */
      };
      let res = await fetch(
        `https://concesionario-crud.herokuapp.com/auth/borrarUsuario/${event.target.value}`,
        config
      );
      let resEnJson = res;
      if (res.status === 204) {
        /* console.log(" SE BORRO! :", resEnJson); */
        toast("Usuario Eliminado", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progreso: undefined,
        });
        setTimeout(() => {
          setSeleccion("menu");
        }, 5000);
      } else {
        toast(resEnJson.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progreso: undefined,
        });
      }
    } catch (error) {
      console.log(" hubo un error :( ", error);
    }
  };

  return (
    <div className="perfil-container">
      <div className="perfil-content">
        {" "}
        <Title className="title-label" text="Mi Perfil" /> <br />
        <form onSubmit={editarUsuario} id="usuarioModificar">
          Usuario 
          <br />
          <input
            className="perfil-style"
            type="text"
            name="Usuario"
            disabled
            value={objeto.usuario}
          />
          <br />
          Apellido
          <br />
          <input
            className="perfil-style"
            type="text"
            name="Apellido"
            placeholder={objeto.apellido}
          />
          <br />
          Nombre
          <br />
          <input
            className="perfil-style"
            type="text"
            name="Nombre"
            placeholder={objeto.nombre}
          />
          <br />
          DNI
          <br />
          <input
            className="perfil-style"
            type="text"
            name="Número de DNI"
            placeholder={objeto.dni}
          />
          <br />
          Dirección de mail
          <br />
       {/*    <input
            className="perfil-style"
            type="text"
            name="Dirección de mail"
            placeholder={objeto.email}
          />
          <br />
          Password
          <br />
          <input
            className="perfil-style"
            type="text"
            name="Password"
            placeholder={objeto.password}
          /> */}
          <br />
          <br />
          <br />
          <button
            /*type="submit"*/
            onClick={editarUsuario}
            className="submit-button"
          >
            Editar Usuario
          </button>
          <button
            onClick={eliminarUsuario}
            /* type="submit" */ className="submit-button"
          >
            Eliminar Usuario
          </button>
          <ToastContainer> </ToastContainer>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
