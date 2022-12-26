import React from 'react';
import Wrapper from '../wrappers/Wrapper';
import activities from '../../data/activities';
import ActivityCard from '../ui/ActivityCard';

const ActivitySection = () => {
  return (
    <Wrapper>
        <div className='grid grid-cols-3'>

        {activities.map((act,index)=><ActivityCard key={index} {...act}/>)}
        </div>
    </Wrapper>
  )
}

export default ActivitySection