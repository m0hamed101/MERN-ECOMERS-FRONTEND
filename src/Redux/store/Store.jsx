import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../Slice'
import CartSlice from '../Cart_Slice'
export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: CartSlice,
    },
})