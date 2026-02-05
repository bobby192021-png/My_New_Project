
import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'CartPage',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
             return{
                ...state,cart:[...state.cart,action.payload]
            }
        },
        removeToCart:( state,action)=>{
            // return(
                state.cart = state.cart.filter((_,index)=> index!= action.payload)
            // )
        }
    }
})

export const{addToCart , removeToCart} = cartSlice.actions
export default cartSlice.reducer