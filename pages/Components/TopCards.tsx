import React from 'react';
import TopCard from './TopCard';
import {Itop} from '../../types'

const data:Itop[] = [
  { name: "Students", status: "Total", count: 10 },
  { name: "Students", status: "Registered", count: 5 },
  { name: "Students", status: "Outing", count: 7 },
];

const TopCards: React.FC = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4 lg:overflow-y-hidden'>
      {data.map((d ,key) => (
        <TopCard key={key} data={d} />
      ))}
    </div>
  );
};

export default TopCards;
