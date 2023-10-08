import Image from 'next/image'
import React from 'react'
import car from'@/assets/car.webp'
const CarCard = () => {
  return (
<div className='flex justify-center '>
   <div class="mx-[1px] my-1 max-w-[272px] shadow-2xl transform duration-100 hover:my-0 rounded-2xl" >
      <div class="relative">
         <div class="text-[#c1c1c1] bg-[#26282b] shadow-md rounded-2xl transition duration-300 custom-easing delay-0">
            <div class="relative cursor-pointer">
                <Image src={car} width={272} height={200} alt='Car Image' className='rounded-2xl' />
               {/* <img alt="Used 2016 Maruti Suzuki Wagon R" title="Used 2016 Maruti Suzuki Wagon R" loading="lazy" width="360" height="200" decoding="async" data-nimg="1" class=" ucImage imgRound imgFull" sizes="(max-width: 750px), 50vw" srcset="/_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=3840&amp;q=75 3840w" src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F4325%2F585906%2Fcover_image-20230920115513.jpg&amp;w=3840&amp;q=75" style="color: transparent;" /> */}
           
            </div>
            <div className='px-3'>
                <div className='flex justify-between  text-white font-bold py-4'>
                    <h3>2016 Maruti Suzuki Wagon R</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" fill='white'/></svg>
                </div>
                <div className='flex justify-start font-semibold gap-2 pb-2'>
                <div >68,000 km</div>
                <div class="text-gray-400 px-1">|</div>
                     <div className='' >Petrol</div>
                     <div class="text-gray-400 px-1">|</div>
                     <div >AMT</div>
                </div>

                <div className='flex justify-between pb-4 border-b border-lightGrey'>
                <div className='text-lg font-bold'>₹ 4.54 L</div>
                <div className='flex gap-2'><span>₹ 10,166/month</span> <svg className='' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" fill='#b8c9b1' /></svg></div>
                </div>
              <div className='text-xs text-darkGreen h-12  overflow-hidden '>
              <span>• Airbags</span>
              <span> • Central Locking</span>
              <span> • ABS</span>
              <span> • Child Safty Lock</span>
              <span> • Headlamp Beam Adjuster</span>
              <span> • Electronic Break</span>
              </div>
                  
               <div className='flex justify-center py-3'>
                <button className='px-4 py-2 bg-lime-300 rounded-lg text-slate-600 font-semibold'>Request A Call Back</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default CarCard