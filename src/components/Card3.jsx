import React from 'react'
import cardimg1 from '../assets/images/cardimg1.png'
import sign from '../assets/images/sign.png'
import cardimg2 from '../assets/images/cardimg2.png'
import cardimg3 from '../assets/images/cardimg3.png'
const imgcard = [
    {
        img: cardimg1,
        title: "Cet #6882",
        dis: "Cets on Creck",
        no: "250",
    },
    {
        img: cardimg2,
        title: "Bored Ape #981",
        dis: "Bored Ape Solana Club",
        no: "38",
    },
    {
        img: cardimg3,
        title: "SolPunk #7803",
        dis: "SolPunks",
        no: "15"
    }
]
const Card3 = () => {
    const cardinfo = imgcard.map((imgcard) => (
        <div className="flex flex-wrap flex-row mb-3 px-2">
            <div className="w-1/3">
                <img src={imgcard.img} alt="cardimg1" className='rounded-full' />
            </div>
            <div className='w-2/3 flex justify-between items-center'>
                <div>
                    <h5 className='font-Inter text-[14px] text-[#474749] leading-[16.24px] font-bold pb-[6px] '>{imgcard.title}</h5>
                    <p className='font-inter text-[12px] leading-[13.92px] text-[#474749] '>{imgcard.dis}</p>
                </div>
                <div className="flex items-center">
                    <img src={sign} alt="sign" />
                    <p className='text-[12px] text-[#474749] font-Inter leading-[13.92px] '>{imgcard.no}</p>
                </div>
            </div>

        </div>
    ))
    return (
        <div className='bg-white max-w-[320px] rounded-[18px] pt-5 px-4 pb-7 mt-9 lg:mt-[68px] mx-auto'>
            <div className="flex justify-between mb-8 px-2">
                <h5 className='text-base font-Inter font-medium text-[#4F4F4F]'>History</h5>
                <select className='w-[98px] border border-[#A8A8A8] border-solid rounded-[4px] text-[12px] font-Inter text-[#4F4F4F] outline-none'>
                    <option >Last Month</option>
                    <option >october</option>
                    <option >september</option>
                    <option >august</option>
                    <option>july</option>
                    <option>june</option>
                    <option>april</option>
                    <option>march</option>
                    <option>february</option>
                    <option>january</option>
                </select>
            </div>
            {cardinfo}
            <button className='bg-text-gradient text-white text-[14px] w-full py-4 rounded-[22px] mt-[73px] font-medium shadow-[6px_4px_25px_0px_#E59C3E57]
'>Show All</button>
        </div>
    )
}

export default Card3
