import { configureStore } from '@reduxjs/toolkit'
import { clientesSlice } from './slices/clientes/clientesSlice'

export const store = configureStore({
  reducer: {
    clientes: clientesSlice.reducer
  },
})