import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchproducts= createAsyncThunk("productsSlice/fetchproducts",async()=>{
    const res = await fetch("https://ecomersbackendapi.onrender.com/products");
    const data = await res.json()
    return data
})

export const productsSlice = createSlice({

    initialState: [],
    name: "productsSlice",
    reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(fetchproducts.fulfilled,(state,action)=>{
            return action.payload;
        })
    }

})
export const { } = productsSlice.actions;
export default productsSlice.reducer;
