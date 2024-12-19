import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice = createSlice({
    name: 'total',
    initialState: { subTotal: "00", discount: "00" },
    reducers: {
        getSubTotalAndDiscount(state, action) {
            state.subTotal = action.payload.subTotal
            state.discount = action.payload.discount
        }
    }
})

export default totalPriceSlice.reducer
export const { getSubTotalAndDiscount } = totalPriceSlice.actions