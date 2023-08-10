import React from 'react'
import {PlayIcon} from "@heroicons/react/24/solid";


const Clips = ({cover,play}) => {
    console.log({cover})
  return (
    <>
    <div  className= 'relative w-32 h-28 rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 lg:w-28 md:w-25 sm:w-21 xsm:w-19 '>
        <img src={cover} alt='image' className=' inset-0 w-full h-full opacity-500 flex object-cover absolute z-10 rounded-xl transition-opacity duration-200' />
        <div className='bg-slate-200 blur-effect-theme absolute top-11 left-11 lg:top-9 lg:left-9 sm:top-10 sm:left-10 opacity-100  z-[100] w-8 h-8 lg:w-5 lg:h-5 rounded-full flex items-center justify-center'> 
          <PlayIcon className='icon-style text-slate-600' md:w-3 md:h-3/>
        </div>
        <video autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className=' inset-0 w-full h-full object-cover absolute flex z-0 group-hover:z-20  transition-opacity opacity-0 duration-300 ease-in-out group-hover:opacity-100 '

        
        >
            <source src={play}  alt='video' type='video/mp4'  />
        </video>
    </div>
    </>
  )
}

export default Clips