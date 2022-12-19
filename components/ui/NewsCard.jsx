import React from 'react';
import Image from 'next/image';

const NewsCard = ({image,tag,subTitle,title,description,date,time}) => {
  return (
    <div className='w-[321px] text-blue-dark hover:text-blue-brand  tracking-[0.2px] font-roboto-700 font-[700]'>
        <div className='relative w-full'>
     <Image alt='' src={image} width={321} height={190}/>
      <p className='absolute left-0 bg-grey-8 p-1 top-[170px] font-roboto-500 font-medium  text-[13.333px] leading-[21.666px] py-0.5 px-2'>{tag}</p>
      <div className='flex flex-col gap-4'>
    <p className='leading-[26px]'>{subTitle}</p>
    <h1 className='leading-[26px] text-[20px]'>{title}</h1>
    <p className='leading-[21px] text-[14px] font-roboto-500 font-medium'>{description}</p>
    <div className='flex justify-between leading-[21.666px] text-[13.333px]'>
        <p className=''>{date}</p>
        <p className=''>Reading time {time}</p>
    </div>
      </div>
        </div>
    </div>
  )
}

export default NewsCard