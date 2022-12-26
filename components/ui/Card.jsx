import React from 'react'
import Wrapper from '../wrappers/Wrapper';
import Image from 'next/image';

const Card = ({image,title,description}) => {
  return (
    <Wrapper styles='h-[650px]'>
        <div className='relative'>
            <div className='absolute top-0 w-[60%]'>
         <img alt='' className='object-fill w-full' src={image}/>
            </div>
         <div className='flex flex-col gap-4 items-start p-6 bg-blue-brand absolute top-16 right-0  text-white font-[700] font-roboto-700 tracking-[0.2px] w-[50%]'>
            <h1 className='text-[28px] leading-[33.6px]'>{title}</h1>
            <p className='leading-[26px]'>{description}</p>
            <button className='bg-white text-blue-brand px-4 py-5 hover:bg-blue-dark hover:text-white'>READ MORE</button>
         </div>
        </div>
    </Wrapper>
  )
}

export default Card