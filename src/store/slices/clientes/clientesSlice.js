import { createSlice } from '@reduxjs/toolkit';
import {tablaClientes} from '../../../helpers'
import { filterCliente } from '../../../helpers';

export const clientesSlice = createSlice({
    name: 'clientes',
    initialState:{
        clientes:tablaClientes,
        mostrar: tablaClientes,
        ventana:false
    },
    reducers: {
        addCliente:(state,action) => {
            state.clientes.unshift(action.payload)
        },    
        filter: (state, action ) => {
            const {expediente,cliente,proceso} = action.payload
            const resultado = filterCliente(state.clientes,{expediente,cliente,proceso}) 
            state.mostrar = resultado
        },
        verVentana:(state,action)=>{
            state.ventana= action.payload
        }

    }
});
export const { filter, addCliente,verVentana } = clientesSlice.actions;   