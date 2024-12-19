import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/CartSlice"
import totalPriceReducer from "./slices/TotalPriceSlice"


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    price:totalPriceReducer
  }
})