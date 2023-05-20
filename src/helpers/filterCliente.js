
export const filterCliente = (tablaClientes,{expediente,cliente,proceso}) => {
    return tablaClientes.filter((clienteItem)=>{
        const clienteExpediente = clienteItem.expediente.toString();
        const clienteNombre = clienteItem.cliente.toLowerCase();
        const clienteProceso = clienteItem.proceso.toLowerCase();
        return clienteExpediente.includes(expediente) 
            && clienteNombre.includes(cliente.toLowerCase()) 
            && clienteProceso.includes(proceso.toLowerCase())
    })
}