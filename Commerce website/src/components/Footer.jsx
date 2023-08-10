import { map } from 'lodash';
import React from 'react';

const Footer = ({footerAPI:{titles,links}}) => {
  return (
    <>
    <footer className='bg-theme pt-10 pb-20 '>
    <div className='nike-container text-slate-200 grid gap-9 max-w-6xl'>
      <div className='grid items-start grid-cols-3  gap-8 '>
        {titles.map((title,i)=><div key={i} className='text-xl lg:text-base md:text-sm sm:text-xs  grid items-center'><h1 className='font-bold uppercase'>{title.title}</h1></div>)}
        {links.map((list,i)=>(<ul key={i} className='grid items-center gap-1 w-2xl lg:max-w-full sm:max-w-none'>
        {list.map((link,i)=>(<li key={i} className='text-base lg:text-sm md:text-xs' > 
          {link.link}
        </li>))}

      </ul>))}


      </div>
      
      
    <div className='grid items-center justify-center text-center max-w-4xl  lg:max-w-full md:max-w-none'>
      <p className='text-white text-3xl max-w-full'>Copyright <sup>&copy;</sup>All Reserved Rights 2022 <span className='font-bold'>JSStack Developers</span></p>
      </div>
    </div>

    </footer>
    </>
  )
}

export default Footer