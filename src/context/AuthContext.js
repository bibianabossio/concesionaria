import React,{ createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext=createContext()

const initialAuth=null


const AuthProvider=({children})=>{
    let history = useHistory()
    let historiAuth= useHistory()
    const [auth, setAuth] = useState(initialAuth)
    
 // const { handleSeleccion, setSeleccion } = useContext(BarraNavegacionContexto);
 
 const handleAuth=async(e)=>{
       
        e.preventDefault();
        
    
     
    }
   

  
 

    const data={auth,handleAuth,setAuth}
    return (<AuthContext.Provider value={data}>{children}</AuthContext.Provider>)
}

export {AuthProvider}

export default AuthContext