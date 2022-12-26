import React from 'react';
import Wrapper from '../wrappers/Wrapper';
import Button from '../ui/Button';
import NewsCard from '../ui/NewsCard';
import news from '../../data/news';

const NewsSection = () => {
  return (
    <Wrapper>
        <div className='flex '>
         <div className='flex flex-col text-blue-dark items-start'>
            <h1 className='font-[700] font-roboto-700 text-[32px] leading-[38.4px] tracking-[0.2px]'>News from TUM</h1>
            <p className='font-roboto-regular tracking-[0.2px] leading-[32.5px] text-[20px] py-6'>News, research results and events: everything that enthuses people at our university.</p>
           <Button styles='uppercase bg- leading-[26px] tracking-[0.2px text-[32px] py-4 px-5 text-center inline-block bg-blue-dark-4 text-white' >see all</Button>
         </div>
     <div className='flex gap-8'>
   {news.slice(0,2).map((news,index)=><NewsCard key={index} {...news}/>)}
     </div>
        </div>
        <div className='flex justify-center gap-8 my-8'>
            {news.slice(2).map((news, index)=><NewsCard key={index} {...news}/>)}
        </div>
    </Wrapper>
  )
}

export default NewsSection