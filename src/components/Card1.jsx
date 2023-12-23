import { useState } from 'react'
import bg4 from '../assets/images/bg4.png'
import innerimg4 from '../assets/images/innerimg4.png'
import bg5 from '../assets/images/bg5.png'
import innerimg5 from '../assets/images/innerimg5.png'
import bg6 from '../assets/images/bg6.png'
import innerimg6 from '../assets/images/innerimg6.png'
const myArray2 = [
    {
        background: bg4,
        heading: "Jozo Gators",
        innerimg: innerimg4,
        para: "1.1K"
    },
    {
        background: bg5,
        heading: "PXN: Ghost Division",
        innerimg: innerimg5,
        para: "10K"

    },
    {
        background: bg6,
        heading: "Ragnarok Meta",
        innerimg: innerimg6,
        para: "7.8K"
    }
]
const Card1 = () => {
    const [data, setdata] = useState(false);
    function card() {
        setdata(!data);
    }

    const myown = myArray2.map((myArray2) => (
        <div
            className="md:w-4/12 sm:w-6/12 w-full px-3 sm:mt-4 mt-3 h-[165px]"
            key={myArray2.id}
        >
            <div
                style={{ backgroundImage: `url(${myArray2.background})` }}
                className={`shadow-carditems w-full h-full pt-[62px] pb-2 flex flex-col justify-end items-center rounded-[18px] relative z-[1] overflow-hidden  bg-no-repeat bg-cover object-cover`}
            >
                <img
                    src={myArray2.innerimg}
                    alt="dragon"
                    className=" border-[2px] rounded-md"
                />
                <p className="text-white text-center font-Inter text-base font-semibold">
                    {myArray2.heading}
                </p>
                <p className="text-[11px] font-Inter font-normal text-center text-white">
                    {myArray2.para}
                </p>
                <div className="w-full h-[69px] absolute bottom-0 left-0 -z-[1]  backdrop-blur-sm bg-[#6A6A6A] bg-opacity-70"></div>
            </div>
        </div>
    ));
    return (
        <div className="  w-full">
            <div className="flex justify-between pt-10 items-center w-full">
                <p className="text-[#4f4f4f] pb-[17px] font-inter text-base font-semibold pl-[23px]">
                    Top Collections
                </p>
                <button
                    onClick={card}
                    className="text-[#4f4f4f] flex font-inter text-xs font-semibold"
                >
                    View All{" "}
                    <span className="pl-2">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.167 7.81706L3.16699 7.81706"
                                stroke="#130F26"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335"
                                stroke="#130F26"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </button>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
                {myown}
            </div>
            {data ? (<div className="flex flex-row flex-wrap -mx-3">{myown}</div>) : (<div></div>)}
        </div>
    )
}

export default Card1