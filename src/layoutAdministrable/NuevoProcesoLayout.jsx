import { useState } from "react"
import { tablaClientes } from "../helpers"
import { useDispatch } from "react-redux"
import { addCliente } from "../store/slices/clientes/clientesSlice"

export const NuevoProcesoLayout = () => {

  let nuevoCliente ={
    id:'',
    expediente:'',
    cliente:'',
    proceso:'',
    fecha:'',
    materia:''
  }

  const [id, setId] = useState('')
  const [expediente, setExpediente] = useState('')
  const [cliente, setCliente] = useState('')
  const [proceso, setProceso] = useState('')
  const [fecha, setFecha] = useState('')
  const [materia, setMateria] = useState('')
  const [alerta, setAlerta] = useState(false)

  const dispatch = useDispatch()

    nuevoCliente.id=id;
    nuevoCliente.expediente=expediente;
    nuevoCliente.cliente=cliente
    nuevoCliente.proceso=proceso
    nuevoCliente.fecha=fecha
    nuevoCliente.materia=materia

    const btnCrear = () => {
      const idEncontrado = tablaClientes.filter((item)=>{
        return item.id.toString() === id
      })
      if(idEncontrado.length>0){
        setAlerta(true)
        console.log(`Este Id no se puede utilizar ${id}`)
      }else {
        setId('')
        setExpediente('')
        setCliente('')
        setProceso('')
        setFecha('')
        setMateria('')
        console.log('si se puede utilizar');

        dispatch(addCliente(nuevoCliente))
      }


    }
    

  return (
    <>
      <div className="w-full p-10">
        <label className="pr-2">Ingrese su Id único</label>
        <input value={id} onChange={(e)=>setId(e.target.value)} className="border-2 border-slate-300 px-2 rounded-md" type="text" />
        {alerta? <p>el ID no se puede utilizar </p> : null}
        <br />
        <br />
        <label className="pr-2">Ingrese Numero de expediente</label>
        <input value={expediente} onChange={(e)=>setExpediente(e.target.value)} className="border-2 border-slate-300 px-2 rounded-md" type="text" />
        <br />
        <br />
        <label className="pr-2">Ingrese Nombre</label>
        <input value={cliente} onChange={(e)=>setCliente(e.target.value)} className="border-2 border-slate-300 px-2 rounded-md" type="text" />
        <br />
        <br />
        <label className="pr-2">Seleccione el Proceso</label>
          <select value={proceso} onChange={(e)=>setProceso(e.target.value)} className="bg-slate-200 rounded-lg p-2">
              <option value="">Seleccione Proceso</option>
              <option value="Civiles">Civiles</option>
              <option value="Penales">Penales</option>
              <option value="Laborales">Laborales</option>
              <option value="Municipales">Municipales</option>
              <option value="Regionales">Regionales</option>
              <option value="Sunat">Sunat</option>
              <option value="Procesos Ejecutivos">Procesos Ejecutivos</option>
          </select>
        <br />
        <br />
        <label className="pr-2">Ingrese Materia</label>
        <input value={materia} onChange={(e)=>setMateria(e.target.value)} className="w-96 border-2 border-slate-300 px-2 rounded-md" type="text" />
        <br />
        <br />
        <label className="pr-2">Ingrese fecha ingreso</label>
        <input value={fecha} onChange={(e)=>setFecha(e.target.value)} className="border-2 border-slate-300 px-2 rounded-md" type="text" />
        <br />
        <br />

        <input onClick={()=>btnCrear()} className="cursor-pointer bg-green-700 p-2 rounded-lg text-white font-bold" type="button" value="Crear Proceso" />
        
      </div>
    </>
  )
}
