import React from "react";
import Slider from "react-slick";
import slider1 from '../assets/images/slider1.png'
import right from "../assets/images/Arrow - Right Square.svg";
import left from "../assets/images/Arrow - Left Square.svg";
import ellipse from "../assets/images/ellipse.png"

const Box = () => {
    const slider = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className="box w-full bg-white rounded-[18px] pb-11 relative px-2">
            <img src={ellipse} alt="ellipse" className="absolute bottom-0" />
            <div className="flex flex-wrap flex-row">
                <div className="sm:w-1/2 w-full pl-3 lg:pl-10">
                    <h3 className="font-Inter font-medium text-base bg-clip-text text-transparent bg-text-gradient pt-[79px] pb-[30px]">
                        Create MetroVerse Genesis
                    </h3>
                    <p className="font-Inter font-medium text-[12px] text-[#7C7C7C] max-w-[283px] pb-[30px] ">
                        physical claim for issue #1 now live. please check that the token is
                        available for claim via website
                    </p>
                    <button className="font-Inter font-medium text-[14px] text-white bg-text-gradient rounded-[22px] py-2.5 px-[25px] shadow-[6px_4px_25px_0px_#E59C3E57] mb-[18px]">
                        Explorer Now
                    </button>
                    <div className="bg-text-gradient p-[1px] rounded-[7px]">
                        <div className="flex flex-wrap flex-row bg-white rounded-[7px]">
                            <div className="sm:w-1/4 w-1/2 ">
                                <div className=" bg-text-gradient lg:pr-[1px] rounded-tl-[7px] rounded-bl-[7px] ">
                                    <div className="bg-white rounded-tl-[7px] rounded-bl-[7px] py-3">
                                        <h4 className="font-Inter font-bold text-[12px] bg-clip-text text-transparent bg-text-gradient text-center">
                                            24.8K
                                        </h4>
                                        <p className="font-Inter font-medium text-[10px] text-[#828282] text-center">
                                            Items
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/4 w-1/2">
                                <div className="bg-text-gradient lg:pr-[1px] rounded-tr-[7px] sm:rounded-none ">
                                    <div className="bg-white py-3 rounded-tr-[7px] sm:rounded-none">
                                        <h4 className="font-Inter font-bold text-[12px] bg-clip-text text-transparent bg-text-gradient text-center">
                                            4,1K
                                        </h4>
                                        <p className="font-Inter font-medium text-[10px] text-[#828282] text-center">
                                            Owners
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/4 w-1/2 ">
                                <div className="bg-text-gradient lg:pr-[1px] rounded-bl-[7px] sm:rounded-none">
                                    <div className="bg-white py-3 rounded-bl-[7px] sm:rounded-none">
                                        <h4 className="font-Inter font-bold text-[12px] bg-clip-text text-transparent bg-text-gradient text-center">
                                            0.221
                                        </h4>
                                        <p className="font-Inter font-medium text-[10px] text-[#828282] text-center">
                                            Floor Price
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/4 w-1/2">
                                <div className="bg-white rounded-tr-[7px] rounded-br-[7px] py-3">
                                    <h4 className="font-Inter font-bold text-[12px] bg-clip-text text-transparent bg-text-gradient text-center">
                                        43.1K
                                    </h4>
                                    <p className="font-Inter font-medium text-[10px] text-[#828282] text-center">
                                        Volume Traded
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full relative">
                    <button onClick={() => slider?.current?.slickPrev()}>
                        <img className='right-[35%] top-[5.5%] absolute cursor-pointer' src={left} alt="prev" />
                    </button>
                    <button onClick={() => slider?.current?.slickNext()}>
                        <img className=' absolute right-[15%] top-[5%] cursor-pointer' src={right} alt="next" />
                    </button>
                    <Slider ref={slider} {...settings} className='translate-y-[22%]  px-1 md:pl-6 md:pr-[26px]'>
                        <img class="w-[327px] h-[307px] rounded-[18px] shadow pl-1" src={slider1} />
                        <img class="w-[327px] h-[307px] rounded-[18px] shadow pl-1" src={slider1} />
                        <img class="w-[327px] h-[307px] rounded-[18px] shadow pl-1" src={slider1} />
                        <img class="w-[327px] h-[307px] rounded-[18px] shadow pl-1" src={slider1} />
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Box;
