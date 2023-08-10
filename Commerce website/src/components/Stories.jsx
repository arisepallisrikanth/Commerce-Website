import React from 'react';
import Title from './utils/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { HeartIcon } from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/outline';
import { HashtagIcon } from '@heroicons/react/24/outline';
import { truncate } from 'lodash';


const Stories = ({story:{title,news}}) => {
  // const splideOptions = {
  //   perPage: 4,
  //   perMove: 1,
  //   type: 'loop',
  //   rewind: true,
  //   keyboard: 'global',
  //   gap: '1rem',
  //   pagination: false,
  //   padding: '2rem',
  //   breakpoints: {
  //     1200: { perPage: 3},
  //     991: { perPage: 2.3},
  //     768: { perPage: 2},
  //     500: { perPage: 1.3},
  //     425: { perPage: 1},
  //   },
  // };
  return (
    <div>
      <div className='nike-container mb-11'>
        <Title title={title} />
      </div>
      <Splide >
        {news.map((val,i)=>(
          <SplideSlide className='mb-0.5'key={i}  >
            <div className='relative grid items-center justify-items-center gap-4 pb-2  w-full  rounded-xl shadow-lg shadow-slate-900 ring-1 ring-red-900  '  >
              <div className='grid items-center justify-center '>
                <img src={val.img} alt={`img-${i}`} className='w-full h-auto rounded-tl-lg rounded-tr-lg  shadow-lg shadow-slate-900 object-cover '/>
              </div>
              <div className='grid items-center justify-center'>
                <div className='flex  items-center justify-between w-full '>
                <div className='flex items-center gap-2'><HeartIcon className='icon-style text-red-500 w-5 h-5'/><span className='text-slate-600 text-xsm font-bold'>{val.like}</span></div>
                <div className='flex  items-center gap-2'><ClockIcon className='icon-style text-slate-300 w-6 h-6'/><span className='text-sm font-bold text-slate-400'>{val.time  }</span></div>
                <div className='flex items-center gap-2'><HashtagIcon className='icon-style text-blue-400 w-5 h-5'/><span className='text-sm font-normal text-blue-600'>{val.by  }</span></div>
                </div>
                <div grid items-center justify-center >
                  <h1 className='text-base lg:text-sm text-slate-900'>{val.title}</h1>
                  <p className='text-sm lg:text-xsm text-slate-700'>{(val.text)}</p>
               
                  <a href={val.url} target={'_blank'} role='button' className='grid items-center justify-center'>
                    <button  type='button' className='bg-gradient-to-b from-red-500 to-slate-800 w-auto button-theme my-4  shadow-xl shadow-slate-500  text-white text-base'>{val.btn}</button>
                  </a>
              </div>
              </div>

            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div>
        
      </div>
    </div>
  )
}

export default Stories