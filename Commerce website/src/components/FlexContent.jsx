import React from 'react'

const FlexContent = ({ifExists,endpoint:{heading,title,text,img,url,btn}}) => {
  return (
    <div className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container gap-8 ${ifExists?'flex-row-reverse':'flex-row'}`}>
        <div className='grid items-center lg:justify-items-center max-w-full lg:max-w-none w-full'>
        <h1 className='text-gradient text-4xl lg:text-3xl md:text-2xl sm:text-xl  font-bold  filter:drop-shadow-lg' >{heading}</h1>
        <h1 className=' font-bold text-5xl lg:text-4xl md:text-3xl sm:text-2xl filter:shadow-slate-704 text-slate-800'>{title}</h1>
        <p className='lg:text-sm text-slate-800 my-4'>{text}</p>
        <a href={url} target='_blank' className='role=button  transitions-theme'>
            <button type='button' className='button-theme  bg-black text-sm text-white'>
            {btn}
            </button>
            </a>
        

        </div>
        <div className='flex items-center justify-center lg:max-w-full md:max-w-none md:w-full relative'>
            <img 
            src={img}
            alt={`img/${heading}`}
            className={`w-auto  transitions-theme object-fill ${ifExists?'h-60 lg:h-56 md:h-52 sm:h-48 xsm:h-44 rotate-45 hover:-rotate-12':'h-72 lg:h-68 md:h-64 sm:h-60 xsm:h-48 rotate-[35deg] hover:rotate-12'}`}
            />
        </div>
    </div>
  )
}

export default FlexContent