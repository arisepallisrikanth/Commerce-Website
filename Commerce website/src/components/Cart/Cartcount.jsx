import React from 'react';
import {ChevronDoubleLeftIcon}  from '@heroicons/react/24/outline';
import {XMarkIcon}  from '@heroicons/react/24/outline';

const Cartcount = ({Togglehandler}) => {
  return (
    <div className='sticky top-0 right-0 left-0 w-full h-auto px-1 py-2 bg-white flex items-center justify-between'>
        <div className=' rounded-2xl px-1 py-1 flex items-center gap-4 '>
            <div className='grid items-center' type='button' onClick={Togglehandler}><ChevronDoubleLeftIcon className=' icon-style w-5 h-5 text-slate-900 cursor-pointer hover:text-orange-500 hover:scale-150 stroke-2 hover:stroke-3 transition-all duration-1000'/></div>
            <div className='grid items-center'>
                <h1 className='text-slate-900 text-base font-medium'>Your Cart <span className='w-full h-auto rounded-xl px-0.5 py-0.5 bg-theme-cart text-slate-100 font-normal text-sm'>(Items)</span></h1>
            </div>
        </div>
        <div className='grid items-center'>
            <button type='button' className='w-full h-auto rounded-sm p-0.5  bg-theme-cart cursor-pointer active:scale-150 transition-all duration-75'>
                <XMarkIcon className=' w-5 h-5 text-slate-50 font-bold text-6xl stroke-1 hover:stroke-2'/>

            </button>
        </div>
    </div>
  )
}

export default Cartcount