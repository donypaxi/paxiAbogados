import { configureStore } from '@reduxjs/toolkit'
import { clientesSlice } from './slices/clientes/clientesSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    clientes: clientesSlice.reducer,
    auth: authSlice.reducer
  },
})