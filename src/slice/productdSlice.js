import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mockData/data";
const initialState = {
    products: [],
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        updateList(state, action) {
            state.products = action.payload
        }
    }
})
export default productSlice.reducer
export const singleProduct = (id) => {
    return async (dispatch) => {
        try {
            const product = data.find((item => item.id === parseInt(id)));
            if (product) {
                dispatch(productSlice.actions.updateList(product))
            }
        }
        catch (e) {
            return console.error(e.message)
        }
    }
}