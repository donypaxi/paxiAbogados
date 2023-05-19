import { clientes } from "./tablaClientes"

export const filterCliente = (datos) => {
    const {expediente,cliente} = datos
    const resultado = clientes.filter ((clienteItem) => {
        const clienteExpediente = clienteItem.expediente.toString();
        const clienteNombre = clienteItem.cliente.toLowerCase();
        return clienteExpediente.includes(expediente) && clienteNombre.includes(cliente.toLowerCase())
    });
    return resultado
}
