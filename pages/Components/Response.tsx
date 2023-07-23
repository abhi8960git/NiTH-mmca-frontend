import React, { useState } from 'react';
import RequestCard from './RequestCard';
import {AiOutlineSearch} from 'react-icons/ai'

const Response = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event:any) => {
        event.preventDefault();
        // Perform search logic here
        console.log(`Searching for ${searchTerm}`);
    };

    const handleInputChange = (event:any) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <div className='md:col-span-2'>
                <div className='w-full m-[-1px] border flex justify-evenly gap-9 p-3 items-center bg-white shadow-lg rounded-lg mb-2 '>
                   
                        <span className='text-lg font-[700]'>Search , Students By Name</span>

                        <span className=''>
                             <form onSubmit={handleSearch} className='flex gap-3'>
                            <input
                                type="text"
                                placeholder="Student name.."
                                value={searchTerm}
                                onChange={handleInputChange}
                                className='search'
                            />
                            <button className="bg-[#3b82f680] p-2 hover:bg-blue-500 rounded-lg" type="submit"><AiOutlineSearch/></button>
                        </form>
                        </span>

                   
                </div>

                <div className='w-full m-[-1px] border bg-white shadow-lg rounded-t-lg '>
                    <div className='my-3 p-1 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer font-[700] sticky top-0'>
                        <span className='pl-[75px] sticky left-0'>Roll no</span>
                        <span className='sm:text-left text-right pl-3'>Name</span>
                        <span className='hidden md:grid sticky left-[75px]'>Reason</span>
                        <span className='hidden sm:grid'>Application Status</span>
                    </div>
                </div>
                <div className='w-full m-[-1px] relative lg:h-[55vh] h-[50vh] shadow-lg  p-4 border bg-white overflow-y-scroll style-2 rounded-b-lg'>
                    <div className='sticky top-14'>
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                        <RequestCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Response;
