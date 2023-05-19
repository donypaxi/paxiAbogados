import { useEffect, useState } from "react"
import { filterCliente } from "../helpers/filterCliente"
import { TableLayout } from "../layoutAdministrable/TableLayout"
export const Search = () => {
    let datos ={
        expediente:'',
        cliente:'',
        proceso:'',
        fecha:'',
        materia:''
    }
    const [expediente, setExpediente] = useState('')
    const [cliente, setCliente] = useState('')
    const [proceso, setProceso] = useState('')
    const [datosFiltrados, setDatosFiltrados] = useState([''])
    datos.expediente=expediente;
    datos.cliente=cliente
    datos.proceso=proceso
    useEffect(() => {
       const filtroExpediente = filterCliente(datos)
        setDatosFiltrados(filtroExpediente)
        // console.log(datosFiltrados)
    }, [expediente,cliente])
    

  return (
    <>
        <div className="flex justify-center flex-wrap gap-5">
            
            <div>
                <label>Ingrese el Expediente</label>
                <input
                    // onWheel={(e) => e.target.blur()}
                    onChange={(e)=>setExpediente(e.target.value)} className="border-2 bg-slate-100 text-black px-2 border-slate-200 placeholder-slate-400 " type="number"/>
            </div>
            <div>
                <label>Ingrese el Cliente</label>
                <input
                    onChange={(e)=>setCliente(e.target.value)}
                    className="border-2 bg-slate-100 text-black px-2 border-slate-200 placeholder-slate-400 " type="text"/>
            </div>

            <div>
                <label>Seleccione el Proceso</label>
                <select onChange={(e)=>setProceso(e.target.value)}>
                    <option value="">Seleccione Proceso</option>
                    <option value="Civiles">Civiles</option>
                    <option value="Penales">Penales</option>
                    <option value="Laborales">Laborales</option>
                    <option value="Municipales">Municipales</option>
                    <option value="Regionales">Regionales</option>
                    <option value="Sunat">Sunat</option>
                    <option value="Procesos Ejecutivos">Procesos Ejecutivos</option>
                </select>
            </div>

            <div>
                <label>Ingrese la fecha inicio</label>
                <input
                    className="border-2 bg-slate-100 text-black px-2 border-slate-200 placeholder-slate-400 " type="number"/>
            </div>
            <div>
                <label>Ingrese la fecha fin</label>
                <input
                    className="border-2 bg-slate-100 text-black px-2 border-slate-200 placeholder-slate-400 " type="number"/>
            </div>
        </div>
        <TableLayout datosFiltrados ={datosFiltrados}/>
    </>
  )
}
