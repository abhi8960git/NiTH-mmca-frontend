import React from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { AiOutlineCheck, AiOutlineEye } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';


const order = {
    status: "Rejected"
}


const RequestCard = () => {
    return (

        <li className='bg-gray-200 hover:bg-gray-300 shadow-lg rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer '>
            <div className='flex items-center'>
                <div className='bg-blue-100 p-3 rounded-lg sm:flex hidden'>
                    <BsPersonFill className='text-blue-800' />
                </div>
                <p className='pl-4 sm:flex hidden'>21bcs116</p>
            </div>
            <p className='hidden md:flex'>Abhishek Kumar</p>

            <p className='text-gray-600 sm:text-left text-right'>resaon</p>
            <div className=' justify-between items-center'>
                <p className='text-gray-600 sm:text-left text-right flex gap-2'>
                    <span className='bg-green-200 p-2 rounded-md cursor-pointer shadow hover:bg-green-300' > <AiOutlineCheck /></span>
                    <span className='bg-red-200 p-2 rounded-md cursor-pointer shadow hover:bg-red-300' ><RxCross1 /></span>
                    <span className='bg-blue-200 p-2 rounded-md cursor-pointer shadow hover:bg-blue-300' > <AiOutlineEye /></span>

                </p>
            </div>
        </li>

    )
}

export default RequestCard