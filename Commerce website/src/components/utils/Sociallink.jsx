import React from 'react'

const Sociallink= ({icon}) => {
  return (
    <div className='w-8 h-8 opacity-100 flex items-center justify-center bg-slate-900 '>
      <img src={icon} alt='icon' className='w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 flex items-center justify-center hover:scale-150 transition-all duration-300 ease-in-out cursor-pointer'/>
    </div>
  )

}

export default Sociallink