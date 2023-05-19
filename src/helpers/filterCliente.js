import { clientes } from "./tablaClientes"

export const filterCliente = (datos) => {
    const {expediente} = datos
    const resultado = clientes.filter ((cliente => {
        const clienteExpediente = cliente.expediente.toString();
        return clienteExpediente.includes(expediente)
    } ))

    return resultado
}
