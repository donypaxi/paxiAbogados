import {clientes} from '../helpers/tablaClientes.js'
export const TableLayout = ({datosFiltrados}) => {
    
    
    
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
                    {datosFiltrados.map(({expediente,cliente,proceso,fecha,materia},i) => (
                        <tr key={i}>
                            <th className='px-4'>{expediente}</th>
                            <th className='px-4'>{cliente}</th>
                            <th className='px-4'>{proceso}</th>
                            <th className='px-4'>{fecha}</th>
                            <th className='px-4'>{materia}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}
