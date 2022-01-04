import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slices/productSlice'

export const store = configureStore({
    reducer: {
        items: productSlice,
  },
})