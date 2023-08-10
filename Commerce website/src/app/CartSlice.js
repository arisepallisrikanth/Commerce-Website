import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
const initialState={
    CartState:false,
    CartItems:[],
};
const CartSlice=createSlice({
    initialState,
    name:"cart",
    reducers:{
        setOpenCart:(state,action)=>{
            state.CartState=action.payload.CartState;

        },
        setCloseCart:(state,action)=>{
            state.CartState=action.payload.CartState;

        },
        AddItemsToCart:(state,action)=>{

            const itemIndex = state.CartItems.findIndex(
                (item) => item.id === action.payload.id
              );
        
              if (itemIndex >= 0) {
                state.CartItems[itemIndex].cartQuantity += 1;
                toast.success(`Item quantity increased`)
        
              } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.CartItems.push(temp);
                toast.success(`${action.payload.title} added to cart `);
        
              }

        },  
    }  
});
export const {setOpenCart,setCloseCart,AddItemsToCart} = CartSlice.actions;
export const CartSelector=(state)=>state.cart.CartState;
export default CartSlice.reducer;