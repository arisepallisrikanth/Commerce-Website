import React from 'react';
import Title from './utils/Title';
import Items from './utils/Items';

const Sales = ({endpoint:{title,items},ifExists}) => {
  
  return (
    <div className='grid items-center  justify-centre my-11'>
    <Title title={title} className='my-1'/>
    <div className={ `grid items-center justify-center my-1 ${ifExists?'grid-cols-3 lg:grid-cols-2 md:grid-cols-1':'grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'} `}>
    {items?.map((item,i)=>(<Items {...item} key={item.id} ifExists={ifExists} />))}  
    </div>
    </div>
  )
}

export default Sales