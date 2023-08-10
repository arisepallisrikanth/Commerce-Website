import React from 'react';

const Title = ({title}) => {
  return (
    <div className=' grid items-center ' >
    <h1 className='font-extrabold  text-slate-950 text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl filter:drop-shadow-md'>{title}</h1>
    </div>

    )
}

export default Title