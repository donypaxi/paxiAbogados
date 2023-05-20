import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { VentanaEditar } from "../componentsAdministrable/VentanaEditar";

export const TableLayout = () => {
    
    const clientes = useSelector((state) => state.clientes.mostrar)
    // const [mostrar, setMostrar] = useState(clientes)
    const [ventana, setVentana] = useState(false)
    // useEffect(() => {
    //     setMostrar(clientes)
    // }, [clientes])

    
    const btnEditar = (id) => {
        setVentana(!ventana)
        
    }
    const btnEliminar = (id) => {
        console.log(id)
    }
    
    
  return (
    <>
        {ventana ? <VentanaEditar/> : null}
        <div className="flex  items-center border-2 w-full mt-20">
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="text-start">Número</th>
                        <th>Cliente</th>
                        <th>Procesos</th>
                        <th>Fecha</th>
                        <th>Materia</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(({id,expediente,cliente,proceso,fecha,materia}) => (
                        <tr key={id}>
                            <th className='px-4'>{expediente}</th>
                            <th className='px-4'>{cliente}</th>
                            <th className='px-4'>{proceso}</th>
                            <th className='px-4'>{fecha}</th>
                            <th className='px-4'>{materia}</th>
                            <th className='px-4'>
                                <button onClick={()=>btnEditar(id)} className='flex items-center gap-x-2 bg-orange-400 p-2 rounded-lg text-white '>
                                    <HiOutlinePencil/>
                                    <p>Editar</p>
                                </button>
                            </th>
                            <th className='px-4'>
                                <button onClick={()=>btnEliminar(id)} className='flex items-center gap-x-2 bg-red-500 p-2 rounded-lg text-white '>
                                    <HiOutlineTrash/>
                                    <p>Eliminar</p>
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}
