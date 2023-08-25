import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  RxDashboard, RxPerson } from 'react-icons/rx';
import {TbListDetails} from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
import NITHLogo from '../public/images/nit-logo15954991401255.jpg'

interface SidebarProps{
    children:ReactElement
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
                <Image width={50} height={50} src={NITHLogo} alt='nith-logo' className='blend-multiply'/>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-300 hover:bg-gray-400 cursor-pointer my-4 p-3 shadow-lg rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/Students'>
            <div className='bg-gray-300 hover:bg-gray-400 cursor-pointer shadow-lg my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/orders'>
            <div className='bg-gray-300 hover:bg-gray-400 cursor-pointer my-4 p-3 shadow-lg rounded-lg inline-block'>
              <TbListDetails size={20} />
            </div>
          </Link>
         
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
