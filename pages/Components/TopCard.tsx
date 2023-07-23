import React from 'react';
import { Itop } from '../../types';

interface TopCardProps {
  data: Itop;
}

const TopCard: React.FC<TopCardProps> = ({ data }) => {
  return (
    <div className=' lg:mt-8 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow-lg'>
      <div className='flex flex-col w-full pb-4'>
        <p className='text-2xl font-bold'>{data.status}</p>
        <p className='text-gray-600'>{data.name}</p>
      </div>
      <p className='bg-[#3b82f680] flex justify-center items-center p-1 px-3 rounded-lg'>
        <span className='text-black text-2xl w-[4em] '>{data.count}</span>
      </p>
    </div>
  );
};

export default TopCard;
