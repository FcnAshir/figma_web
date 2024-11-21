import { Heebo } from 'next/font/google'
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import React from 'react'
import Link from 'next/link';
const Hebo=Heebo({subsets:["latin"]})

const footer = () => {
  return (
    <div className='bg-foot h-[243px]  space-y-6 flex items-center flex-col justify-center '>
      <div className='flex space-x-5'>

        <Link href={""}><FaFacebookSquare  className='h-[30px] w-[30px]'/></Link>
        <Link href={""}><FaInstagram  className='h-[30px] w-[30px]'/></Link>
        <Link href={""}> <FaGithub  className='h-[30px] w-[30px]'/></Link>
        <Link href={""}> <FaLinkedin className='h-[30px] w-[30px]'/></Link>
      
      
     
     
      </div>
      <p className={`text-center font-medium ${Hebo} text-[22px]`}>Copyright ©2020 All rights reserved </p></div>
  )
}

export default footer