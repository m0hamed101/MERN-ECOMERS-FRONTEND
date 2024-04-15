import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchcart = createAsyncThunk("cartSlice/fetchcart", async (tokken) => {
    const res = await fetch("https://ecomersbackendapi.onrender.com/cart", {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${tokken}`
        }
    });
    return res.json()
})

export const cartSlice = createSlice({

    initialState: {
        load: true
    },
    name: "cartSlice",
    reducers: {
        loding:(state)=>{
            state.load=true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchcart.fulfilled, (state, action) => {
            return action.payload;
        })
    }

})
export const {loding } = cartSlice.actions;
export default cartSlice.reducer;
