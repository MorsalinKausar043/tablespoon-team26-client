import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allItems: [],
    addedItem: [],
    removeItem: [],
    
}

export const productSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
      allProducts: (state, action) => {
          state.allItems.find(action.payload)
    },
      addProduct: (state, {payload}) => {
          state.addedItem.push(payload)
    },
    removeProduct: (state, {payload}) => {
      state.removeItem.filter(item => item.id !== payload)
    },
  },
})


export const { allProducts, addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer