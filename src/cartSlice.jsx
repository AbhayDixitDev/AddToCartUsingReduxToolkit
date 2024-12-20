import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart2:[]
    },
    reducers:{
        addTocart:(state,action)=>{
            console.log(action.payload)
            state.cart2.push(action.payload)
        },
        removeFromCart:(state,actions)=>{
            state.cart2 = state.cart2.filter(item=>{
                return item.id!= actions.payload
            })
        },
        increment:(state,actions)=>{
            state.cart2.map(item=>{
                if(item.id == actions.payload){
                    item.quantity++
                }
            })
        },
        decrement:(state,actions)=>{
            state.cart2.map(item=>{
                if(item.id == actions.payload){
                    item.quantity--
                }
            })
        }
    }
})

export default cartSlice.reducer
export const {addTocart, removeFromCart, increment, decrement} = cartSlice.actions