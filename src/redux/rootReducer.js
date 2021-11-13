import { combineReducers} from "redux"
import productdSlice from "../slice/productdSlice"
import cartSlice from "../slice/addCartSlice";

export const rootReducer = combineReducers({
   product:productdSlice,
   cart:cartSlice
})