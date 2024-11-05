  // import RTK jooks
import { createSlice } from "@reduxjs/toolkit";

  // declare the initaionl value object for redux
let initialState = {
  "cart":[]
}
  // declare the slice to CRUD the init state of redux
const AppReduceSlice = createSlice({
    // slice name
  name:'AppReduceSlice',
    // pass the init state
  initialState,
    // slice reducer actions
  reducers:{
      // add the only product we have to the cart
    AddProductToCart:(state , payload) => {
        // convert state to mutable object
      const newState = JSON.parse(JSON.stringify(state))
        // find the product by prid
      const jak = newState.cart.find((product) => product.productId.toString() === payload.payload.toString())
        // if product exist increase quantity
        // or push new product
      if(jak){
        newState.cart[jak.id].productQuantity += 1
      } else { 
        newState.cart.push({
          "id": newState.cart.length,
          "productId": "053c8a1b",
          "productName": "Echinocactus grusonii",
          "productPrice": 99,
          "productDiscount": 21,
          "productQuantity": 1,
          "productFamily": "Cactaceae Family",
          "productTemperature": "Temperature (10-32°C)"
        })
      }
      return newState
    },
      // Decrease quantitiy for the only product we have 
    DecreaseQuantity: (state , payload) => {
        // convert state to mutable object
      const newState = JSON.parse(JSON.stringify(state))
        // find the product by prid
      const jak = newState.cart.find((product) => product.productId.toString() === payload.payload.toString())
        // if the product exist decrease
      if(jak){
          // to avoid nigative values
        if(newState.cart[jak.id].productQuantity > 1)
          newState.cart[jak.id].productQuantity -= 1
        return newState
      }
    },
      // increase quantitiy for the only product we have 
    IncreaseQuantity: (state , payload)=> {
        // convert state to mutable object
      const newState = JSON.parse(JSON.stringify(state))
        // find the product by prid
      const jak = newState.cart.find((product) => product.productId.toString() === payload.payload.toString())
        // if the product exist increase
      if(jak){
          // to avoid nigative values
        if(newState.cart[jak.id].productQuantity >= 1)
          newState.cart[jak.id].productQuantity += 1
        return newState
      }
    },
      // remove every thing from the cart
    PayForAll: () => {
          // reset
        return {
          cart:[]
        }
    }
      // to pass the product 
  },
})

  // export Data
export const cart = (state) => state.AppUser.cart
export const cartItems = (state) => state.AppUser.cart.length
export const getProductDetails = (state , productId) => state.AppUser.cart.find((product) => product.productId === productId);
export const getProductQuantity = (state, productId) => {
    // avoid undifined property "productQuantity"
    // check if product exist pass the quantity or pass 1 if not
  const product = state.AppUser.cart.find((product) => product.productId === productId);
  return product ? product.productQuantity : 1;
};

  // export the funcitons to CRUD from components
export const { AddProductToCart, DecreaseQuantity, IncreaseQuantity, PayForAll } = AppReduceSlice.actions;

  // export reducer to import in the store.js file
export default AppReduceSlice.reducer