import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const tableSpoonItems = createAsyncThunk(
    'items/tableSpoon',
    async () => {
      const products = await fetch('https://stark-basin-43355.herokuapp.com/products').then(res => res.json())
      return products
    }
  )

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
    extraReducers: (builder) => {
    builder.addCase(tableSpoonItems.fulfilled, (state, action) => {
      state.allItems = action.payload
    //   state.allItems.push(action.payload)
    })
  },

})


export const { allProducts, addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer