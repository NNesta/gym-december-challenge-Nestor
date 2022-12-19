import React from 'react';
import Image from 'next/image';
import Wrapper from '../wrappers/Wrapper';
import Button from '../ui/Button';
import Link from 'next/link';

const DiscoverSection = () => {
  return (
    <Wrapper styles='font-roboto-700 font-[700] tracking-[0.2px] text-blue-dark'>
        <div className=' flex flex-col'>
            <p className='leading-[26px]'>Customized navigation</p>
        <h1 className='leading-[38.4px] text-[32px] my-0.5'>Discover what TUM has to offer</h1> 
        </div>
        <div className='flex gap-8 items-center relative'>
           <div className='relative px-[129px] py-[111px] my-12 bg-yellow ml-48'>
            <div className='relative'>
        <Image src='/assets/images/kid.jpeg' alt='kid' width={320*1.5} height={166*1.5}/>
           <div className='bg-yellow h-full w-8 absolute top-8 bottom-0'/>
           <div className='bg-yellow h-full w-8 absolute top-8 bottom-0 left-[84px]'/>
           <div className='bg-yellow h-[80%] w-8 absolute top-0 bottom-8 left-[170px]'/>
           <div className='bg-yellow h-full w-8 absolute top-8 bottom-0 right-[120px]'/>
           <div className='bg-yellow h-full w-8 absolute top-8 bottom-0 right-12'/>
            </div>
      </div>
          <ul className='absolute top-24 left-0 w-72 bg-white border-gray-400 flex flex-col gap-6 font-roboto-700 font-[700] py-8 leading-[26px]'>
          <li>For:</li>
          <li> Prospective Students</li>
          <li className='text-blue-brand'>Founders</li>
          <li className='text-blue-brand border-b border-gray-400 pb-8'>Employees</li>
          <li className='text-blue-brand'>Show all</li>
          </ul>
      <div> 
   <div className='flex flex-col gap-8 items-start px-6'>
    <h1 className='leading-[46.8px] text-[42px] my-0.5'>Prospective Students</h1>
    <p className='leading-[30px] text-[20px] font-roboto-regular font-normal'>Learn to bring ideas to life, discover new possibilities, work in teams and build networks.</p>
    <Button styles='font-roboto-500 font-medium px-5 py-4 text-center leading-[26px] text-blue-brand border-2 border-blue-brand'>Learn more</Button>
   </div>
        
        </div>
        </div>
       <div className='w-full'>
        <select className='w-full py-[20px] font-roboto-700 font-[700]  leading-[39px] text-[24px] text-blue-dark bg-gray-200 px-4'>
        <option value="Select degree program or enter keyword">
          Select degree program or enter keyword
        </option>
        <option value="apple"></option>
        <option value="banana"></option>
        <option value="kiwi"></option>
            
        </select>
        <div className='flex justify-end text-blue-brand'>
<Link href={''}>Degree programs</Link>
        </div>
       </div>
    </Wrapper>
  )
}

export default DiscoverSection