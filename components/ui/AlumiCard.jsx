import React from 'react'
import Wrapper from '../wrappers/Wrapper';
import Image from 'next/image';

const AlumiCard = ({image,title,description}) => {
  return (
    <Wrapper styles='h-[650px]'>
        <div className='relative'>
            <div className='flex flex-col gap-4 items-start p-6 bg-red absolute top-16 leftt-0 z-  text-white font-[700] font-roboto-700 tracking-[0.2px] w-[50%]'>
            <h1 className='text-[28px] leading-[33.6px]'>{title}</h1>
            <p className='leading-[26px]'>{description}</p>
            <button className='text-white bg-blue-brand px-4 py-5 hover:bg-blue-dark hover:blue-dark'>READ THE ALUMNI STORIES</button>
         </div>
            <div className='absolute top-0 right-0 w-[60%] -z-10'>
         <img alt='' className='object-fill w-full' src={image}/>
            </div>
         
        </div>
    </Wrapper>
  )
}

export default AlumiCard;