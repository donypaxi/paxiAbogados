import { createSlice } from '@reduxjs/toolkit';
import {tablaClientes} from '../../../helpers'
import { filterCliente } from '../../../helpers';

export const clientesSlice = createSlice({
    name: 'clientes',
    initialState:{
        clientes:tablaClientes,
        mostrar: tablaClientes
    },
    reducers: {
        addCliente:(state,action) => {
            state.clientes.unshift(action.payload)
        }   ,    
        filter: (state, action ) => {
            const {expediente,cliente,proceso} = action.payload
            const resultado = filterCliente(state.clientes,{expediente,cliente,proceso}) 
            state.mostrar = resultado
        }
    }
});
export const { filter, addCliente } = clientesSlice.actions;   