import { Heebo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const Hebo = Heebo({subsets:["latin"]})

const hero = () => {
  return (
    <div className='md:h-[308px] md:w-[1030px] w-[92%] my-[66px]  mx-auto flex flex-col-reverse md:flex-row items-center justify-between  '>
        <div className='Text  h-[305px] md:w-[521px]  flex  flex-col md:justify-between items-start justify-evenly' ><h1 className={`${Hebo.className} font-[900] text-[27px] md:text-[48px] text-H`}>Hi, I am John,<br />
        Creative Technologist</h1>
        <p className={`text-H ${Hebo.className} text-[400] text-[16px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className={`bg-button h-[50px] w-[205px] ${Hebo.className} font-normal text-[18px] text-white rounded shadow-black/60 `}>Download Resume</button></div>
        {/* //image */}
        <div className='Image h-[308px] w-[298px]'><Image src={"/img1.svg"} alt='hero' height={308} width={298}/></div>
    </div>
  )
}

export default hero