import React from 'react'
import Clips from './utils/Clip';
import Sociallink from './utils/Sociallink';

const Hero = ({heroapi:{title,subtitle,img,btntext,videos,sociallinks}}) => {
  // console.log(heroapi)
  return (
    <>
    
   
    <div className='relative h-auto w-auto flex flex-col bottom-5'>
      <div className='absolute top-0 left-0 right-0 clip-path bg-theme h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] xsm:h-[45vh] w-auto z-10 opacity-100'></div>
      <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
        <div className='grid items-center justify-items-centre mt-28 md:mt-24'>
        <h1 className=' font-bold  text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl filter:drop-shadow-md text-slate-200'>{title}</h1>
        <h1 className=' font-bold  text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl filter drop-shadow  text-slate-200'>{subtitle}</h1>
        <button type='button' className='button-theme bg-slate-200 shadow-black rounded-2xl my-5 h-[8vh] lg:h-[7vh] md:h-[6vh] sm:h-[5vh] xsm:h-[4vh]'>{btntext}</button>
        <div className='grid items-center gap-5 md:gap-3 absolute top-[35vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto opacity-100'>
          {videos?.map((i,value)=>(<Clips key={value} cover={i.imgsrc} play={i.clip}/>))}</div>
        <div className='absolute top-[35vh] lg:top-[27vh] right-0 lg:right-[11%] grid items-center  justify-center gap-5 md:gap-3'>
          {sociallinks?.map((val,i)=>(<Sociallink  key={i} icon={val.icon}/>))}
        </div>

        </div>
      <div className=' flex items-center'>
        <img src={img} alt='hero_img' className=' w-auto h-[45vh] lg:h-[35vh] md:h-[32vh] sm:h-[25vh] xsm:h-[20vh] transitions-theme -rotate-[25deg] hover:rotate-[0] cursor-crosshair object-fill'/>
      </div>
      </div>  
      
    </div>
    </>
  )
}

export default Hero