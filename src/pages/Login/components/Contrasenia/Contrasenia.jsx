import React, {useState} from "react";
import Login from "../../Login";
import Input from "../../components/Input/Input";
import Title from "../Title/Title";
import Label from "../Label/Label"
import "../../Login.css";
import "../Label/Label.css";

export default function Contrasenia() {

    const classes = useState ();
  
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
  

    function handleChange(name, value) {
        if (name === "usuario") {
          setUser(value);
        } else {
          if (value === "contraseña") {
            setPassword(value);
          } 
        }
      }

     
       return(
        <>
        <div className="login-container">
        <div className="login-content">
        <h2 className= "title-label" > Modificar Contraseña </h2>
        <br />
        <div className="label">
        <Label  text="Usuario" />
        <Input
          attribute={{
            id: "usuario",
            name: "usuario",
            type: "text",
            placeholder: "",
          }}
          handleChange={handleChange}
        />
      </div>
         <br /><br />

      
         <div className="label">
        <Label text="Contraseña Anterior" />
        <Input
          attribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "",
          }}
          handleChange={handleChange}
        />
        </div>
         <br /><br />

         <div className="label">
        <Label text="Contraseña Nueva" />
        <Input
          attribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "",
          }}
          handleChange={handleChange}
        />
        </div>
           <br /><br />
         
         <div className="submit-button-container">
           <button className="submit-button " onClick={{}}>Guardar</button>
                  
         </div>

         <br />
     
        </div>
        </div>
      
        </>
    )
} 