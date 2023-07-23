import React from 'react'
import { BsPersonFill } from 'react-icons/bs';

const order={
    status:"Rejected"
}


const StudentInfoCard = () => {
  return (
   
         <li  className='bg-gray-200 hover:bg-gray-300 shadow-lg rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer shdow-lg'>
                    <div className='flex items-center'>
                        <div className='bg-blue-100 p-3 rounded-lg'>
                            <BsPersonFill className='text-blue-800' />
                        </div>
                        <p className='pl-4'>Abhishek Kumar</p>
                    </div>
                    <p className='text-gray-600 sm:text-left text-right'>21bcs116@gmail.com</p>
                    <p className='hidden md:flex'>7</p>
                    <div className='sm:flex hidden justify-between items-center'>
                    <p className='text-gray-600 sm:text-left text-right '>
                  <span
                    className={
                      order.status == 'Processing'
                        ? 'bg-green-200 p-2 rounded-lg'
                        : order.status == 'Completed'
                        ? 'bg-blue-200 p-2 rounded-lg'
                        : 'bg-red-200 p-2 rounded-lg'
                    }
                  >
                    {order.status}
                  </span>
                </p>
                    </div>
                </li>
   
  )
}

export default StudentInfoCard