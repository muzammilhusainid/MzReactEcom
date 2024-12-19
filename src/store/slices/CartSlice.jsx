import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart2',
    initialState: [],
    reducers: {

        //Add Product//////////////
        addToCart(state, action) {
            const isProductExist = state.find((findItem) => findItem.id === action.payload.id)

            if (isProductExist) {
                state = { ...isProductExist.quantity++ }
            } else {
              state.push({ ...action.payload, quantity: 1, price:Math.round(action.payload.price) })
            }
        },

        //Increase Product////////////
        increaseCartItem(state, action) {
            const increaseItem = state.find((findItem) => findItem.id === action.payload.id)

            if (increaseItem) {
                state = { ...increaseItem.quantity++ }
            }
        },

        //Decrease Product/////////////
        decreaseCartItem(state, action) {
            const decreaseItem = state.find((findItem) => findItem.id === action.payload.id)

            if (decreaseItem && decreaseItem.quantity > 1) {
                state = { ...decreaseItem.quantity-- }
            }
        },
        
        //Delete Cart Item/////////////
        deleteCartItem(state, action) {

            return state.filter((filterItem) => filterItem.id !== action.payload.id)
        },

        //Clear Cart//////////////////
        clearCartItem() {
            return [];
        }
    }
});
export default cartSlice.reducer
export const { addToCart, increaseCartItem, decreaseCartItem, deleteCartItem, clearCartItem } = cartSlice.actions;