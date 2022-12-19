import React from 'react';
import Image from 'next/image';

const ActivityCard = ({image,title,description, button, short}) => {
  return (
    <div className={`flex flex-col ${!short&&'col-span-2'} items-start hover:text-blue-brand text-blue-dark tracking-[0.2px] font-roboto-700 font-700`}>
     <Image src={image} width={short?309:762} height={256}/>
     <h1 className='text-[24px] leading-[30px]'>{title}</h1>
     <p className='py-4 font-roboto-500 font-medium leading-[26px]'>{description}</p>
     <button className='px-4 py-5 my-6 leading-[26px] font-roboto-500 font-medium border-[1px] border-blue-dark hover:border-blue-brand'>{button}</button>
    </div>
  )
}

export default ActivityCard