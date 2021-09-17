import React, {useState} from "react";
import Login from "../../Login";
import Input from "../../components/Input/Input";
import "../../Login.css";
import "../Label/Label.css";

export default function Contrasenia() {

    const classes = useState ();
  
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);

    function handleChange(name, value) {
        if (name === "usuario") {
          setUser(value);
        } else {
          if (value.length < 6) {
            setPasswordError(true);
          } else {
            setPasswordError(false);
            setPassword(value);
          }
        }
      }

      function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
          if (param.user === "bibi" && param.password === "123456") {
            const { user, password } = param;
            let ac = { user, password };
            let account = JSON.stringify(ac);
            localStorage.setItem("account", account);
            setIsLogin(true);
          } else {
            setIsLogin(false);
            setHasError(true);
          }
        } else {
          setIsLogin(false);
          setHasError(true);
        }
      }
      function handleSubmit() {
        let account = { user, password };
        if (account) {
          ifMatch(account);
        }
      }

    return(
        <>
        <div className="login-container">
        <div className="login-content">
        <h2 className= "title-label" > Actualizar Contraseña </h2>
        {hasError && (
          <label className="label-alert">
            {" "}
            Datos incorrectos o No registrados
          </label>
        )}
        <br />
        <form>
        <label className='label'>
           Usuario:
           <br />
        </label>
        
        <input className= "regular-style" 
            atribute={{
                id: "user",
                type:"user",
                name:"title", 
                placeholder:"Ingrese su Usuario",
            }}
            handleChange={handleChange}
        />
         <br /><br /><br />

        <label className='label'>
           Nueva Contraseña:
           <br />
        </label>
       
        <input className= "regular-style" 
            atribute={{
                id: "nueva",
                type:"nueva",
                name:"password", 
                placeholder:"Mínimo 6 caracteres",

            }}
            handleChange={handleChange}    
        />
         <br /><br /><br />

        <label className='label'> 
           Validar Nueva Contraseña:
           <br />

        </label>
         <input className= "regular-style" 
             atribute={{
                id: "valida",
                type:"valida",
                name:"password", 
                placeholder:"Repetir Contraseña",

            }}
            handleChange={handleChange}  
            param={passwordError}
            />
            {passwordError && (
              <label className="label-error">
                Contraseña inválida o incompleta
              </label>
            )}
            <br /><br /><br />
         
         <div className="submit-button-container">
           <button className="submit-button " onClick={{handleSubmit}}>Guardar</button>
           <button className="submit-button "onClick={{handleSubmit}}>Salir</button>
           
         </div>

         <br />
        </form>
        </div>
        </div>
      
        </>
    )
}