import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: [],
  },
  name: "cart",
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    clearItems:(state,action)=>{
        state.items =[]
    }
  },
});

export default cartSlice.reducer;

export const { addItems ,clearItems} = cartSlice.actions;
