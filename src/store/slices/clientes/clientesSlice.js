import { createSlice } from '@reduxjs/toolkit';
import {tablaClientes} from '../../../helpers'
import { filterCliente } from '../../../helpers';

export const clientesSlice = createSlice({
    name: 'clientes',
    initialState:{
        clientes:tablaClientes
    }  ,
    reducers: {
        filter: (state, action ) => {
            const {expediente,cliente,proceso} = action.payload
            const resultado = filterCliente(tablaClientes,{expediente,cliente,proceso}) 
            state.clientes = resultado
            console.log('esto' , resultado)
        },
    }
});
export const { filter } = clientesSlice.actions;