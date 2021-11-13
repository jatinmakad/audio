import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
  cartTotal: "",
  grandTotal: "",
  isCheckoutModalOpen: false,
  isModalOpen: false,
  isSidebarOpen: false
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const { id, quantity, price } = action.payload;
      const updatedState = JSON.parse(JSON.stringify(state.carts))
      const tempItem = updatedState.findIndex((item) => item.id === id);
      if (tempItem >= 0) {
        updatedState.map((item) => {
          item.quantity = quantity;
          state.carts[tempItem].quantity = quantity + state.carts[tempItem].quantity;
          state.carts[tempItem].total = item.quantity * item.price;
        })
      } else {
        const temp = { ...action.payload, total: quantity * price, quantity: quantity }
        state.carts.push(temp)
      }
    },
    cartTotalReducer(state, action) {
      let { total } = state.carts.reduce(
        (cartTotal, carts) => {
          const { total } = carts;
          cartTotal.total += total
          return cartTotal;
        },
        {
          total: 0,
        }
      );
      state.cartTotal = total
    },
    clearCart(state, action) {
      state.carts = [];
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    toggleAmount(state, action) {
      let { id, value } = action.payload;
      const tempCart = state.carts.map((cartItem) => {
        if (cartItem.id === id) {
          if (value === "inc") {
            const newAmount = cartItem.quantity + 1
            const newTotal = newAmount * cartItem.price
            return { ...cartItem, quantity: newAmount, total: newTotal };
          }
          if (value === "dec") {
            const newAmount = cartItem.quantity - 1
            const newTotal = newAmount * cartItem.price
            return { ...cartItem, quantity: newAmount, total: newTotal };
          }
        }
        return cartItem;
      })
        .filter((cartItem) => cartItem.quantity !== 0);
      return { ...state, carts: tempCart }
    },
    cartGrandTotal(state, action) {
      const grand_Total = state.cartTotal + 200;
      return { ...state, grandTotal: grand_Total };
    },
    toggleCheckOutModal(state, action) {
      return { ...state, isCheckoutModalOpen: !state.isCheckoutModalOpen };
    },
    toggleModal(state, action) {
      return { ...state, isModalOpen: !state.isModalOpen };
    },
    toggleSidebarModal(state, action) {
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    }
  }
})
export const { addCart, clearCart, cartTotalReducer, toggleAmount, cartGrandTotal, cartVAT, toggleCheckOutModal, toggleModal, toggleSidebarModal } = cartSlice.actions;

export default cartSlice.reducer