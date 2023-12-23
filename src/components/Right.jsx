import React from 'react'
import img1 from '../assets/images/img1.png'
import sign from '../assets/images/sign.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import Card3 from './Card3'
const block = [
    {
        img:img1
    },
    {
        img:img2
    },
    {
        img:img3
    }
]

const Right = () => {
    const cards1 = block.map((block) => (
        <div className="max-w-[319px] bg-white pt-[9px] pb-[9px] pr-6 pl-[9px] rounded-[18px] mb-3 mx-auto ">
            <div className='flex flex-row flex-wrap'>
                <div className='w-5/12 pr-3'>
                    <img src={block.img} alt="img1" className='rounded-[10px] w-full h-full' />
                </div>
                <div className="w-7/12">
                    <p className='text-[7px] text-[#7C7C7C] font-Inter font-medium leading-[8.12px] pb-2 '>Metroverse Genesis</p>
                    <p className='text-[#474749] font-Inter  text-[14px] font-bold leading-[16.24px] pb-2'>Block #1460</p>
                    <p className='text-[7px] text-[#7C7C7C] font-Inter font-medium  pb-4 leading-[8.12px]'>Owned by <span className='font-bold bg-clip-text text-transparent bg-text-gradient'>BabyKee</span></p>
                    <div className="flex justify-between">
                        <div className="flex gap-[6px]">
                            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Iconly/Light/Heart">
                                    <g id="Heart">
                                        <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M1.9149 7.73221C1.19957 5.49888 2.03557 2.94621 4.38024 2.19088C5.61357 1.79288 6.9749 2.02755 8.00024 2.79888C8.97024 2.04888 10.3816 1.79555 11.6136 2.19088C13.9582 2.94621 14.7996 5.49888 14.0849 7.73221C12.9716 11.2722 8.00024 13.9989 8.00024 13.9989C8.00024 13.9989 3.06557 11.3135 1.9149 7.73221Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path id="Stroke 3" d="M10.667 4.4668C11.3803 4.69746 11.8843 5.33413 11.945 6.08146" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                            </svg>
                            </span>
                            <p className='font-Inter text-[14px] text-[#130F26] font-medium leading-[16.24px] '>1K</p>
                        </div>
                        <div className="flex gap-[6px]">
                            <img src={sign} alt="sign" />
                            <p className='font-Inter text-[14px] text-[#130F26] font-medium leading-[16.24px]'>21</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <div className='w-full  sm:pl-0 mx-auto'>
            <h4 className=' text-base text-[#4F4F4F] font-Inter font-semibold pb-4'>New NFTs</h4>
            {cards1}           
        </div>
       
    )
}

export default Right
