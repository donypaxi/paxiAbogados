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
            // console.log(action.payload)
            // const {expediente,cliente,proceso} = action.payload
            const resultado = filterClient(state.clientes,action.payload) 
            state.mostrar = resultado
        },
        addClient:(state,action) => {
            state.clientes.unshift(action.payload)
        },    
        
        editModal:(state,action)=>{
            state.modal= action.payload
        },
        updateCliente:(state,action) => {
            const user = action.payload
            const buscarItem = state.clientes.findIndex(cliente=>cliente.id === user)
            
            console.log(buscarItem)
            // state.clientes.splice(user,1)
        }
        

    }
});
export const { filter, addClient,editModal,updateCliente } = clientesSlice.actions;   