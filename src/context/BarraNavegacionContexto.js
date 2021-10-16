import React,{createContext,useState}from 'react'

const BarraNavegacionContexto=createContext()

const SeleccionProvider = ({children}) => {
    const [seleccion, setSeleccion] = useState("login")
    const [form, setForm] = useState({
        id:null,
      tipo:null,
      marca:null,
      modelo:null,
      precio:null,
      stock:null,
      })
    const handleSeleccion=(e)=>{
        setSeleccion(e.target.value)
       
        
        //setSeleccion(e.target.value)
        console.dir(seleccion);
    }

    const handleSubmitModificar=(e)=>{
        e.preventDefault()
        setForm({
          ...form,
          id:e.target.idInputModif.value,
          tipo:e.target.tipoInputModif.value,
          marca:e.target.marcaInputModif.value,
          modelo:e.target.modedloInputModif.value,
          precio:e.target.precioInputModif.value,
          stock:e.target.stockInputModif.value,
        })

        setSeleccion(e.target.tipoComponente.value)
        console.log("se hizo clicl  en modificar perro",e.target);
        
        console.log("se hizo click en modificar", form);
        console.log("se Evento", e.target);
      }

    const data={setSeleccion,seleccion,handleSeleccion,handleSubmitModificar,form}
    return <BarraNavegacionContexto.Provider value={data}>{children}</BarraNavegacionContexto.Provider>
    
}


export {SeleccionProvider}

export default BarraNavegacionContexto
