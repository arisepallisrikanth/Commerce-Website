import React from 'react';
import {ArrowLeftIcon}  from '@heroicons/react/24/outline';
import bagImg from '../../assets/emptybag.png';

const Emptycart = () => {
  return (
    <div className=' w-full h-screen flex flex-col gap-8 items-center justify-center'>
        <div className='flex items-center justify-center'>
            <img
            src={bagImg}
            alt='EmptyBag'
            className='w-40 h-auto object-fill hover:scale-110 transition-all duration-100'/>
        </div>
        <div className='flex items-center justify-center' >
            <button className=' w-full h-auto flex items-center justify-center gap-2 button-theme bg-gradient-to-b from-orange-500 to-orange-900 shadow-lg shadow-slate-950 px-4 py-2'> 
                <ArrowLeftIcon className='w-5 h-auto text-slate-900'/>
                <span className='text-slate-950 font-medium text-base '>Back to Nike Store</span>
            </button>
        </div>
    </div>
  )
}

export default Emptycart