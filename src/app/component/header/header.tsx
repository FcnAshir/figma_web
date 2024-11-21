import React from 'react'
import { Inter } from "next/font/google"
import Link from 'next/link'
//googlefont
const inter = Inter({ subsets: ["latin"] })

const header = () => {

    //dynamic Navbar
    let headitem = [{
        name: 'Works',
        id: ''
    }, {
        name: 'Blog',
        id: ''
    }, {
        name: 'Contact',
        id: '',
    },]
    return (
        <ul className={` ${inter.className}h-[24px] flex justify-end space-x-5 m-[66px] text-black font-medium items-center text-[20px]`}>
            {
                headitem.map((item, i) => (
                    <li key={i}>
                       <Link href={item.id}>
                       {item.name} 
                    
                    </Link>
                    </li>

                ))
            }


            {/* <li>Works</li>
            <li>Blog</li>
            <li>Contact</li> */}
        </ul>
    )
}

export default header