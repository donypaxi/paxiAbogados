import { createSlice } from '@reduxjs/toolkit';
import {tablaClientes} from '../../../helpers'
import { filterClient } from '../../../helpers';

export const clientesSlice = createSlice({
    name: 'clientes',
    initialState:{
        clientes:tablaClientes,
        mostrar: tablaClientes,
        modal:false,
        itemEditar:null
    },
    reducers: {
        filter: (state, action ) => {
            const resultado = filterClient(state.clientes,action.payload) 
            state.mostrar = resultado
        },
        addClient:(state,action) => {
            state.clientes.unshift(action.payload)
        },    
        
        editModal:(state,action)=>{
            state.modal= action.payload
        },
        foundItem:(state,action) => {
            const item = state.clientes.find((cliente) => cliente.id === action.payload )
            state.itemEditar = item

        },
        saveClient:(state,action) => {
            const {expediente,cliente,proceso} = action.payload
            const item = state.clientes.findIndex(cliente=>cliente.id === state.itemEditar.id)
            state.clientes[item].expediente = expediente
            state.clientes[item].cliente = cliente
            state.clientes[item].proceso = proceso
            state.mostrar = state.clientes
        },
        deleteClient:(state,action) => {
            const index = state.clientes.findIndex(cliente =>cliente.id === action.payload)
            state.clientes.splice(index,1)
            state.mostrar = state.clientes
        }
        

    }
});
export const { filter, addClient,editModal,foundItem,saveClient,deleteClient } = clientesSlice.actions;   