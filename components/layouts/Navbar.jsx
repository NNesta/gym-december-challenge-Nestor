import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '../wrappers/Wrapper';


const Navbar = () => {
  return (
    <div className='w-screen bg-blue-dark z-[500] fixed inset-x-0'>
        <Wrapper styles='w-full  '>
        <div className='flex mx-auto text-white  font-roboto-700 font-[700] justify-between items-center'>
         <div className='flex items-center gap-x-3 font-roboto-500 font-medium py-5'>
            <Image alt='' src='/assets/images/tab.svg' width={33} height={33}/>
            <Image alt='' src='/assets/images/tum-logo.svg' width={73} height={38} />
            <div className='hidden lg:block w-[60px] h-[42px] text-xs tracking-[0.2px] leading-[14px]'>
                Technical University of Munich
            </div>
         </div>
         <ul className='hidden lg:flex gap-8 items-center text-[14px] leading-[16px]'>
            <li>NEWS AND EVENTS</li>
            <li>STUDIES</li>
            <li>LIFELONG LEARNING</li>
            <li>RESEARCH</li>
            <li>INNOVATION</li>
            <li>COMMUNITY</li>
            <li>ABOUT TUM</li>
         </ul>
         <div className='flex items-center'>

         <ul className='flex divide-x-2 h-[26px] items-center'>
            <li className='px-2'>DE</li>
            <li className='px-2'>EN</li>
         </ul>
         <Image alt='' src='/assets/images/search.svg' className='w-6 stroke-white' width={24} height={24}/>
         </div>
        </div>
    </Wrapper>
    </div>
    
  )
}

export default Navbar