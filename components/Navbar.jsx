import Image from 'next/image'
import React from 'react'
import Refined from '@/public/refined_cars.svg'
const Navbar = () => {
  return (
    <div className='h-20 w-full flex '>
        <div className=' my-auto w-1/3 '>
            <Image src={Refined} alt='Refined Cars' className='h-10 mx-auto'  />
        </div>
        <div className=' my-auto w-1/3 flex rounded-full border border-[#707070]'>
          <input className="w-full  bg-transparent placeholder:text-[#707070] placeholder:px-4" placeholder="Search for Cars or Bikes, Eg: XUV700, or BMW" value=""/>
          <svg className="w-10 mr-4" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill='#707070'></path></svg>
        </div>
        <div className='flex text-lightGrey gap-10 justify-center px-10 my-auto w-1/3'>
        <button class="headerBtn gridAc flex caps selectedCity">Kozhikode<span class="headerBtnArrow"></span></button>
        <div className="  flex items-center gap-1">
   <svg className="w-6" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill='#707070'></path>
   </svg>
   <div className="font-semibold">Login</div>
</div>        </div>
    </div>
  )
}

export default Navbar