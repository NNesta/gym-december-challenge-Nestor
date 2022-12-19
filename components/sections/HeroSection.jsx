import React from 'react';
import Image from 'next/image';
import Wrapper from '../wrappers/Wrapper';

const HeroSection = () => {
  return (
    <div className='relative w-full z-0 h-[856px]'>
        <div className='absolute inset-0 top-20 h-[700px]'>
        <video className='w-full h-full object-cover '  muted="muted">
				<source className='w-full h-full' src='https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4' type="video/mp4">
                    </source>
			</video>
        <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent w-1/2 h-full'/>
   
            </div>
    <Wrapper styles='text-white absolute inset-0 top-20 h-[700px] w-full mx-auto'>
        <div className='py-16'>
        <h1 className='font-roboto-700 font-[700] tracking-[0.2px] text-[48px] leading-[52.8px] w-[648px]'>TUM. The Entrepreneurial University</h1>
        <p className='text-[20px] leading-[30px] tracking-[0.2px] py-6 font-roboto-regular'>Innovation through talent, excellence and responsibility</p>
        </div>
        <div className='absolute bottom-20 right-20 '>
        <button className="w-full h-full bg-blue-brand p-2" type="button" aria-pressed="true">
					<Image alt='' src='/assets/images/pause.svg' width={24} height={24}/>
				</button>
        </div>
    </Wrapper>
    </div>
        

  )
}

export default HeroSection