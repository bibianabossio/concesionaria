import React,{createContext,useState}from 'react'

const BarraNavegacionContexto=createContext()

const SeleccionProvider = ({children}) => {
    const [seleccion, setSeleccion] = useState("login")
    const handleSeleccion=(e)=>{
        setSeleccion(e.target.value)
        //console.log(e.target.value)
        
        //setSeleccion(e.target.value)
        console.dir(seleccion);
    }
    const data={seleccion,handleSeleccion}
    return <BarraNavegacionContexto.Provider value={data}>{children}</BarraNavegacionContexto.Provider>
    
}

export {SeleccionProvider}

export default BarraNavegacionContexto
