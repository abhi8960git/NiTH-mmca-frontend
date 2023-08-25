import React, { useState } from 'react'
import LoginCard from '../components/LoginCard'
import logo from '../public/images/20824344_6343823.svg'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className='flex items-center lg:justify-evenly justify-center  w-full h-full min-h-screen bg-gray-200'>
           <div className='flex items-center justify-center lg:flex-2 bg-black rounded-2xl shadow'>
           <Image className='hidden lg:flex'  width={700} height={700} src={logo} alt='logo'></Image>
           </div>
      <div className='flex items-center justify-center '>
        <LoginCard></LoginCard>
      </div>
     
    </div>
  )
}

export default LoginPage