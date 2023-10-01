import Image from 'next/image'
import React from 'react'
import Refined from '@/public/refined_cars.svg'
const Navbar = () => {
  return (
    <div className='h-20 w-full flex bg-gray-500'>
        <div className=' my-auto'>
            <Image src={Refined} alt='Refined Cars' className='h-14'  />
        </div>
    </div>
  )
}

export default Navbar