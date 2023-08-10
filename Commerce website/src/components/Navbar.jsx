import React from 'react';
import logo from '../assets/logo.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HeartIcon} from '@heroicons/react/24/outline';
import {ShoppingBagIcon} from '@heroicons/react/24/outline';
import {useDispatch} from 'react-redux';
import {setOpenCart} from '../app/CartSlice.js'



const Navbar = () => {
    const [state,setstate]=React.useState(false)
    const NavScroll=()=>{
        if(window.scrollY>60){
            setstate(true)
        }else{
            setstate(false)
        }
    }
    const dispatch=useDispatch();
    const OnToggle=()=>{
        dispatch(setOpenCart(
            {
                CartState:true
            }
        ))

    }
    React.useEffect(()=>{
        window.addEventListener('scroll',NavScroll);
        return ()=>{window.removeEventListener('scroll',NavScroll);}
    },[]);
  return (
    <>
   <header className={ state?'fixed top-0 left-0 right-0 h-[9vh] blur-effect-theme flex items-center justify-center opacity-100 z-[200]':'absolute  top-7 left-0 right-0 opacity-100 z-50  text-slate-200'}>
    <nav className='flex items-center justify-between nike-container'>
        <div className='flex items-center'>
            <img
            src={logo}
            alt='nike image'
            className={`w-20 h-auto ${state&&"filter brightness-0"}`}


            />

        </div>
            <ul className='flex items-center gap-4 '>
                <li className='grid items-center'><MagnifyingGlassIcon className={`icon-style ${state&&"filter brightness-0"}`} /></li>
                <li className='grid items-center'><HeartIcon className={`icon-style ${state&&"filter brightness-0"}`}/></li>
                <li className='grid items-center'>
                    <button type='button'onClick={OnToggle} className='relative border-none outline-none shadow-lg shadow-slate-800 flex items-center justify-center active:scale-125'>
                    <ShoppingBagIcon className={`icon-style cursor-pointer ${state&&"filter brightness-0 transition-all duration-1000"}`}/><div className={`absolute top-5 right-1 w-4 h-4 rounded-full ${state?'bg-black text-slate-50 shadow shadow-slate-50':'bg-white  text-slate-900 shadow-slate-900'}  text-sm font-medium hover:scale-150 transition-all duration-700 hover:text-[6.5rem]`}>0</div>
                    </button>
                    </li>

            </ul>

    </nav>
   </header>
   </>

    )
}

export default Navbar