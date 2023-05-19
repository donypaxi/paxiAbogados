import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";

export const TableLayout = () => {
    
    const clientes = useSelector((state) => state.clientes.clientes)

    const [mostrar, setMostrar] = useState([])
    useEffect(() => {
        setMostrar(clientes)
    }, [clientes])

    const btnEditar = (id) => {
        console.log(id)
    }
    const btnEliminar = (id) => {
       
    }
    
  return (
    <>
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
                    {mostrar.map(({id,expediente,cliente,proceso,fecha,materia}) => (
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
                                <button onClick={()=>btnEliminar(index)} className='flex items-center gap-x-2 bg-red-500 p-2 rounded-lg text-white '>
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
