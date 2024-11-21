import { Heebo } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
const Hebo =Heebo({subsets:["latin"]})

const recent = () => {
  return (
    <div className='h-[502px] py-[66px] mx-auto w-[1440px] bg-recent p-6 flex justify-between '>
        <div>
        <h2 className={`${Hebo.className} text-black text-[22px] font-[500]`}>Recent post</h2>
        <Link href={""} className={`${Hebo.className} font-[500] text-[22px] text-button`}>View all</Link>
        </div>
{/* <div className='w-[483px] h-[356px] bg-white' >1</div>
<div className='w-[483px] h-[356px] bg-white'>2</div> */}

    </div>
  )
}

export default recent