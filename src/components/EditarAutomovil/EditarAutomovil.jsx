import React, { useContext } from "react";
import "../EditarRepuesto/EditarRepuesto.css";
import Title from "../Title/Title";
import BarraNavegacionContexto from "../../context/BarraNavegacionContexto";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* import { useParams } from "react-router-dom"; */

const EditarAutomovil = () => {
  const { setSeleccion, autoModificar } = useContext(BarraNavegacionContexto);

  const funcionEditarAuto = async (event) => {
    event.preventDefault();
    console.log(event.target);
    let resId = autoModificar.id;
    let resYear = event.target.year.value
      ? event.target.year.value
      : autoModificar.year;
    let resName = event.target.name.value
      ? event.target.name.value
      : autoModificar.name;
    let resColor = event.target.color.value
      ? event.target.color.value
      : autoModificar.color;
    let resPrice = event.target.precio.value
      ? event.target.precio.value
      : autoModificar.precio;
 /*    let resUser_id = event.target.user_id.value
      ? event.target.user_id.value
      : autoModificar.user_id; */

    try {
      let sesion = JSON.parse(localStorage.getItem("sesion"));
      let config = {
        method: "PUT",
        headers: {
          Authorization: sesion.bearer + " " + sesion.token,
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          year: parseFloat(resYear),
          name: resName,
          color: resColor,
          price: parseFloat(resPrice),
          /* user_id: parseFloat(resUser_id), */
        }),
      };
      let res = await fetch(
        `https://api-concesionario-taller6.herokuapp.com/auto/${resId}`,
        config
      );
      let resEnJson = await res.json();
        if (res.status===200){
          console.log(" SE ACTUALIZO! :", resEnJson);
          toast("Automóvil Actualizado", {
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
          toast(resEnJson.message.color, {
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
      console.log(" hubo un error :( EN LA ACTUALIZACION :", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <Title className="title-label" text="Editar Automovil" /> <br />
        <tbody>
          <tr>
            <>
              <td>
                <form onSubmit={funcionEditarAuto} id="autoModificarEditAuto">
                  id
                  <input
                    className="regular-style"
                    type="text"
                    name="id"
                    disabled
                    value={autoModificar.id}
                  />
                  <br />
                  Año
                  <input
                    className="regular-style"
                    type="text"
                    name="year"
                    placeholder={autoModificar.year}
                  />
                  <br />
                  Modelo
                  <input
                    className="regular-style"
                    type="text"
                    name="name"
                    placeholder={autoModificar.name}
                  />
                  <br />
                  Color
                  <input
                    className="regular-style"
                    type="text"
                    name="color"
                    placeholder={autoModificar.color}
                  />
                  <br />
                  Precio
                  <input
                    className="regular-style"
                    type="text"
                    name="precio"
                    placeholder={autoModificar.price}
                  />
                  <br />
                  {/*  Vendedor
                  <input
                    className="regular-style"
                    type="text"
                    name="user_id"
                    placeholder={autoModificar.user_id}
                  /> */}
                  <br />
                  <button
                    value={setSeleccion}
                    type="submit"
                    className="submit-button"
                  >
                    Confirmar
                  </button>
                  <ToastContainer> </ToastContainer>
                </form>
              </td>
              <td></td>
            </>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default EditarAutomovil;
