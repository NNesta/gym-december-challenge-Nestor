import React from 'react';
import Wrapper from '../wrappers/Wrapper';
import Card from '../ui/Card';
import OrganizationCard from '../ui/OrganizationCard';
import AlumiCard from '../ui/AlumiCard';

const TumNumber = () => {
  return (
    <Wrapper>
        <Card image='/assets/images/president.webp' title='What drives us: President Thomas F. Hofmann about TUM' description='Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.' />
        <div className='flex flex-col h-[400px]'>
      <h1 className='font-roboto-700 font-[700] text-[32px] leading-[38.4px] text-blue-dark tracking-[0.2px]'>TUM in numbers</h1>
      <div className='grid grid-cols-5 grid-rows-2 gap-4'>
    <div className='col-span-3 row-span-2 bg-blue-brand text-white font-roboto-700 font-[700] tracking-[0.2px] flex flex-col justify-center px-8'>
        <h1 className='leading-[99.5px] text-[130px]'>50,000</h1>
        <p className='my-5 text-[34px] leading-[44.2px]'>students</p>
    </div>
     <div className='flex gap-4 text-center text-blue-dark bg-yellow font-roboto-700 font-[700] items-center p-4 col-span-2'>
        <h1 className='leading-[68.8px] text-[90px]'>176</h1>
        <p className='text-[22px] leading-[28.6px] my-4'>ERC Grants for cutting-edge research</p>
     </div>
     <div className='flex gap-4 text-center text-blue-dark bg-pink font-roboto-700 font-[700] items-center p-4 col-span-2'>
        <h1 className='leading-[68.8px] text-[90px]'>18</h1>
        <p className='text-[22px] leading-[28.6px] my-4'>ERC Grants for cutting-edge research
18
Nobel laureates
</p>
     </div>
      </div>
        </div>
        <OrganizationCard image='/assets/images/stairs.webp' title='Schools and Research Centers' description='They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation.' />
     <AlumiCard image='/assets/images/phillip.webp' title='"Here I have met a lot of people who are breaking new ground"' description='Philip Häusser, alumnus'/>
    </Wrapper>
  )
}

export default TumNumber