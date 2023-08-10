import React from 'react';
import Cartcount from './Cart/Cartcount';
import CartItems from './Cart/CartItems';
import Emptycart from './Cart/Emptycart';
import {useDispatch,useSelector} from 'react-redux';
import {CartSelector,setCloseCart} from '../app/CartSlice.js';

const Cart = () => {
  const dispatch=useDispatch();
  const ifCartState=useSelector(CartSelector)
    const OnToggle=()=>{
        dispatch(setCloseCart(
            {
                CartState:false 
            }
        ))

    }
  return (
    <>
    <div  className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen blur-effect-theme opacity-100 z-[250] ${ifCartState?'opacity-100 visible translate-x-0':'opacity-0 invisible translate-x-8'}`}>
        <div className='absolute   right-0  max-w-xl w-full h-screen blur-effect-theme opacity-100'>
            <Cartcount  Togglehandler={OnToggle}/>
            <CartItems />
            <Emptycart />
            
        </div>
    </div>
    </>
  )
}

export default Cart;