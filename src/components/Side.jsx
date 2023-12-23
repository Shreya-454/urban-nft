import React from 'react'
import line1 from '../assets/images/lines1.png'
import { Link } from 'react-router-dom'
const Side = () => {
    return (
        <div className=' bg-[#EDF1F2]'>
            <sidebar className='relative'>
                <div className="container  lg:px-6 px-3 xl:max-w-[305px] lg:max-w-[180px] max-w-[100px] h-full overflow-y-scroll pt-8  bg-white fixed">
                    <img src={line1} alt="line1" className='absolute top-0 left-0 w-full' />
                    <div className='flex justify-center pb-5'>
                        <svg className='w-full' width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2154 3.66228L26.3434 3.07526C27.1805 -0.765009 32.5261 -1.10443 33.8422 2.59911C33.9902 3.01564 34.0665 3.45427 34.0678 3.89632L34.1694 39.6313C37.7405 40.6312 38.0823 45.5775 34.6638 47.0518C34.1704 47.2645 33.6388 47.3743 33.1015 47.3743H4.00419C-0.480245 47.3743 -1.56881 41.1266 2.65138 39.61C3.0019 39.484 3.36789 39.4077 3.73868 39.3831C2.80176 37.5415 2.3333 35.4523 2.3333 33.1157V8.55607H10.329V32.4325C10.329 33.8728 10.643 35.1531 11.2708 36.2734C11.911 37.3937 12.8096 38.2739 13.9668 38.914C14.289 39.0922 14.6259 39.2457 14.9777 39.3743H21.0515C21.4017 39.2457 21.7362 39.0922 22.0549 38.914C23.2121 38.2739 24.1046 37.3937 24.7325 36.2734C25.3726 35.1531 25.6927 33.8728 25.6927 32.4325V8.55607H26.1333L26.1219 4.54257C26.121 4.24661 26.1524 3.95144 26.2154 3.66228Z" fill="url(#paint0_linear_33_517)" />
                            <defs>
                                <linearGradient id="paint0_linear_33_517" x1="-2.68457" y1="-12.1552" x2="40.857" y2="51.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFC881" />
                                    <stop offset="1" stop-color="#DA8517" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h3 className='lg:block hidden text-base font-Inter bg-clip-text text-transparent bg-text-gradient font-bold text-center pb-[68px]'>URBAN NFT</h3>
                    <h5 className='text-[12px] font-Inter font-medium text-black mb-4 pl-[13px] lg:block hidden'>MARKETPLACE</h5>
                    <Link to={"/"} className='flex items-center justify-center lg:justify-normal gap-4 p-[13px] rounded-[22.5px] bg-transparent hover:bg-orange-white group duration-300'>
                        <svg width="16" height="16" viewBox="0 0 16 16"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M11.0562 0.5H13.5957C14.6474 0.5 15.4996 1.35939 15.4996 2.41997V4.98089C15.4996 6.04148 14.6474 6.90087 13.5957 6.90087H11.0562C10.0045 6.90087 9.15234 6.04148 9.15234 4.98089V2.41997C9.15234 1.35939 10.0045 0.5 11.0562 0.5Z" className='group-hover:fill-[url(#paint0_linear_33_463)] duration-300' fill="#A8A8A8" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40389 0.5H4.94337C5.99507 0.5 6.84726 1.35939 6.84726 2.41997V4.98089C6.84726 6.04148 5.99507 6.90087 4.94337 6.90087H2.40389C1.35219 6.90087 0.5 6.04148 0.5 4.98089V2.41997C0.5 1.35939 1.35219 0.5 2.40389 0.5ZM2.40389 9.09913H4.94337C5.99507 9.09913 6.84726 9.95852 6.84726 11.0191V13.58C6.84726 14.6399 5.99507 15.5 4.94337 15.5H2.40389C1.35219 15.5 0.5 14.6399 0.5 13.58V11.0191C0.5 9.95852 1.35219 9.09913 2.40389 9.09913ZM13.5961 9.09913H11.0566C10.0049 9.09913 9.15274 9.95852 9.15274 11.0191V13.58C9.15274 14.6399 10.0049 15.5 11.0566 15.5H13.5961C14.6478 15.5 15.5 14.6399 15.5 13.58V11.0191C15.5 9.95852 14.6478 9.09913 13.5961 9.09913Z" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' fill="#A8A8A8" />
                            <defs>
                                <linearGradient id="paint0_linear_33_463" x1="8.6924" y1="-1.14233" x2="13.9603" y2="8.69608" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFC881" />
                                    <stop offset="1" stop-color="#DA8517" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_33_463" x1="-0.586956" y1="-3.34868" x2="11.7002" y2="19.793" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFC881" />
                                    <stop offset="1" stop-color="#DA8517" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className='font-inter text-[14px] font-semibold duration-300 text-[#7C7C7C] lg:block hidden group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-text-gradient'>Dashboard</p>
                    </Link>
                    <Link to={"/market"} className='flex items-center  justify-center lg:justify-normal gap-4 p-[13px] rounded-[22.5px] bg-transparent hover:bg-orange-white group'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M3.43262 14.4413C3.43262 13.8113 3.94262 13.3013 4.57262 13.3013C5.19512 13.3013 5.70512 13.8113 5.70512 14.4413C5.70512 15.0638 5.19512 15.5738 4.57262 15.5738C3.94262 15.5738 3.43262 15.0638 3.43262 14.4413ZM11.8701 14.4413C11.8701 13.8113 12.3801 13.3013 13.0101 13.3013C13.6326 13.3013 14.1426 13.8113 14.1426 14.4413C14.1426 15.0638 13.6326 15.5738 13.0101 15.5738C12.3801 15.5738 11.8701 15.0638 11.8701 14.4413Z" className='group-hover:fill-[url(#paint1_linear_33_463)]' fill="#A8A8A8" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1431 3.76151C14.6006 3.76151 14.9006 3.91901 15.2006 4.26401C15.5006 4.60901 15.5531 5.10401 15.4856 5.55326L14.7731 10.4733C14.6381 11.419 13.8281 12.1158 12.8756 12.1158H4.69306C3.69556 12.1158 2.87056 11.3508 2.78806 10.3615L2.09806 2.18576L0.965557 1.99076C0.665557 1.93826 0.455557 1.64576 0.508057 1.34576C0.560557 1.03826 0.853057 0.83576 1.16056 0.88076L2.94931 1.15076C3.20431 1.19651 3.39181 1.40576 3.41431 1.66076L3.55681 3.34076C3.57931 3.58151 3.77431 3.76151 4.01431 3.76151H14.1431ZM9.59806 7.66076H11.6756C11.9906 7.66076 12.2381 7.40576 12.2381 7.09826C12.2381 6.78326 11.9906 6.53576 11.6756 6.53576H9.59806C9.28306 6.53576 9.03556 6.78326 9.03556 7.09826C9.03556 7.40576 9.28306 7.66076 9.59806 7.66076Z" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' fill="#A8A8A8" />
                        </svg>
                        <p className='font-inter lg:block hidden text-[14px] font-semibold text-[#7C7C7C] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-text-gradient duration-300 '>Market</p>
                    </Link>
                    <Link to={"/favorites"} className='flex items-center justify-center lg:justify-normal gap-4 p-[13px] rounded-[22.5px] bg-transparent hover:bg-orange-white group mb-[90px] duration-300'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M8.73223 1.33521L10.4021 4.69092C10.5251 4.93404 10.7599 5.10288 11.0307 5.1404L14.7815 5.68667C15.0006 5.71744 15.1994 5.833 15.3336 6.00934C15.4664 6.18343 15.5234 6.40404 15.4912 6.6209C15.4649 6.80099 15.3802 6.96757 15.2504 7.09514L12.5325 9.72973C12.3337 9.91357 12.2437 10.186 12.2917 10.4523L12.9609 14.1562C13.0321 14.6035 12.7358 15.0252 12.2917 15.11C12.1087 15.1392 11.9212 15.1085 11.7561 15.0244L8.41041 13.2813C8.1621 13.156 7.86879 13.156 7.62049 13.2813L4.27477 15.0244C3.86368 15.2428 3.35432 15.0942 3.12552 14.689C3.04075 14.5277 3.01075 14.3438 3.0385 14.1645L3.70765 10.4599C3.75566 10.1942 3.66489 9.92033 3.46685 9.73648L0.749013 7.10339C0.425693 6.79123 0.415941 6.27722 0.727258 5.95381C0.734009 5.94706 0.741511 5.93955 0.749013 5.93205C0.87804 5.80073 1.04758 5.71744 1.23062 5.69568L4.98142 5.14865C5.25148 5.11038 5.48628 4.94305 5.61006 4.69842L7.2199 1.33521C7.36318 1.04706 7.66025 0.867723 7.98282 0.875227H8.08334C8.36315 0.908994 8.60695 1.08233 8.73223 1.33521Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint0_linear_33_463)] duration-300' />
                            <path d="M7.99401 13.1878C7.84873 13.1923 7.7072 13.2314 7.5799 13.3012L4.25054 15.0404C3.84317 15.2348 3.35567 15.0839 3.12728 14.6943C3.04266 14.5352 3.01195 14.3528 3.04041 14.1741L3.70538 10.4774C3.75031 10.2086 3.66045 9.93542 3.465 9.74627L0.745953 7.11386C0.423201 6.79785 0.417211 6.27917 0.733223 5.95566C0.737716 5.95115 0.74146 5.9474 0.745953 5.94365C0.874754 5.81604 1.041 5.73197 1.21997 5.7057L4.97392 5.15325C5.24575 5.11872 5.48164 4.94908 5.60145 4.70288L7.23318 1.29734C7.3882 1.02261 7.68549 0.858979 8 0.876243C7.99401 1.09918 7.99401 13.0362 7.99401 13.1878Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                        </svg>
                        <p className='font-inter text-[14px] lg:block hidden font-semibold text-[#7C7C7C] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-text-gradient duration-300'>Favorites</p>
                  </Link>
                    <h5 className='font-Inter lg:block hidden  text-[12px] font-medium text-black mb-4 pl-[13px]'>MY PROFILE</h5>
                    <Link to={"/Insight"} className='flex gap-4 items-center justify-center lg:justify-normal p-[13px] rounded-[22.5px] bg-transparent hover:bg-orange-white group duration-300'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Iconly/Bulk/Activity">
                                    <g id="Activity">
                                        <path id="Path_34168" fill-rule="evenodd" clip-rule="evenodd" d="M11.4321 3.55317C11.4321 5.21892 12.7844 6.56927 14.4526 6.56927C14.6363 6.56836 14.8195 6.55073 15 6.51659V12.4961C15 15.0117 13.5161 16.5 10.9968 16.5H5.50977C2.98388 16.5 1.5 15.0117 1.5 12.4961V7.01707C1.5 4.50146 2.98388 3 5.50977 3H11.4849C11.4494 3.18225 11.4317 3.36751 11.4321 3.55317ZM9.86248 11.1724L12.0059 8.40659V8.39341C12.1894 8.14685 12.1425 7.79917 11.9003 7.60976C11.7831 7.51926 11.6342 7.48009 11.4875 7.50119C11.3408 7.52229 11.209 7.60185 11.1221 7.72171L9.3151 10.0463L7.25745 8.42634C7.13997 8.33482 6.99053 8.29441 6.84286 8.31424C6.69519 8.33406 6.56174 8.41245 6.47264 8.53171L4.25672 11.3898C4.17883 11.4868 4.13689 11.6078 4.13801 11.7322C4.12515 11.9836 4.2839 12.212 4.52428 12.2879C4.76466 12.3637 5.02603 12.268 5.16023 12.0549L7.01343 9.6578L9.07108 11.2712C9.18811 11.3656 9.33854 11.4083 9.4878 11.3897C9.63705 11.3711 9.77231 11.2927 9.86248 11.1724Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                                        <circle id="Ellipse_742" opacity="0.4" cx="14.625" cy="3.375" r="1.875" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                                    </g>
                                </g>
                            </svg>
                            <p className='font-Inter lg:block hidden text-[14px] font-semibold text-[#7C7C7C] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-text-gradient duration-300'>Insight</p>
                    </Link>
                    <Link to={"/Wallet"} className='flex gap-4 items-center justify-center lg:justify-normal  p-[13px] rounded-[22.5px] bg-transparent hover:bg-orange-white group duration-300'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Iconly/Bulk/Wallet">
                                    <g id="Wallet">
                                        <path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd" d="M16.4973 6.28134H13.3213C11.8433 6.28394 10.646 7.45136 10.6433 8.89242C10.6413 10.3367 11.84 11.5094 13.3213 11.5113H16.5V11.7408C16.5 14.2602 14.9727 15.75 12.388 15.75H5.61267C3.02733 15.75 1.5 14.2602 1.5 11.7408V6.25339C1.5 3.73397 3.02733 2.25 5.61267 2.25H12.3853C14.97 2.25 16.4973 3.73397 16.4973 6.25339V6.28134ZM5.05467 6.2755H9.28467H9.28733H9.29267C9.60933 6.27419 9.86533 6.02264 9.864 5.71324C9.86267 5.40448 9.604 5.15488 9.28733 5.15618H5.05467C4.74 5.15748 4.48467 5.40644 4.48333 5.71389C4.482 6.02264 4.738 6.27419 5.05467 6.2755Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                                        <path id="Fill 4" opacity="0.4" d="M12.0281 9.22231C12.1849 9.93569 12.8104 10.4376 13.5244 10.4246H15.9619C16.259 10.4246 16.5 10.1785 16.5 9.87434V7.97567C16.4994 7.67217 16.259 7.42546 15.9619 7.4248H13.4671C12.6548 7.42742 11.9987 8.10164 12 8.93251C12 9.02976 12.0096 9.12701 12.0281 9.22231Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                                        <circle id="Oval" cx="13.5" cy="8.9248" r="0.75" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                                    </g>
                                </g>
                            </svg>
                            <p className='font-Inter lg:block hidden text-[14px] font-semibold text-[#7C7C7C] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-text-gradient duration-300'>Wallet</p>
                    </Link>
                    <Link to={"/Profile"} className='flex gap-4 items-center p-[13px] rounded-[22.5px] justify-center lg:justify-normal bg-transparent hover:bg-orange-white group duration-300'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Iconly/Bulk/Profile">
                                    <g id="Profile">
                                        <path id="Fill 1" d="M8.99775 11.3813C5.763 11.3813 3 11.8913 3 13.9313C3 15.9721 5.74575 16.5001 8.99775 16.5001C12.2325 16.5001 14.9955 15.9908 14.9955 13.9501C14.9955 11.9093 12.2505 11.3813 8.99775 11.3813Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                                        <path id="Fill 4" opacity="0.4" d="M8.99732 9.438C11.2008 9.438 12.9663 7.67175 12.9663 5.469C12.9663 3.26625 11.2008 1.5 8.99732 1.5C6.79457 1.5 5.02832 3.26625 5.02832 5.469C5.02832 7.67175 6.79457 9.438 8.99732 9.438Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                                    </g>
                                </g>
                            </svg>
                            <p className='font-Inter lg:block hidden font-semibold text-[14px] text-[#7C7C7C] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-text-gradient duration-300'>Profile</p>
                    </Link>
                    <Link to={"/settings"} className='flex gap-4 items-center p-[13px] rounded-[22.5px] justify-center lg:justify-normal bg-transparent hover:bg-orange-white group mb-[115px]'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.0088 10.1223C6.80545 10.1223 5.83203 9.18477 5.83203 8.00727C5.83203 6.82977 6.80545 5.88477 8.0088 5.88477C9.21216 5.88477 10.1626 6.82977 10.1626 8.00727C10.1626 9.18477 9.21216 10.1223 8.0088 10.1223Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                                <path opacity="0.4" d="M14.9226 9.7775C14.777 9.5525 14.57 9.3275 14.3018 9.185C14.0871 9.08 13.9492 8.9075 13.8265 8.705C13.4356 8.06 13.6656 7.2125 14.3171 6.83C15.0836 6.4025 15.3288 5.45 14.8843 4.7075L14.3707 3.8225C13.9339 3.08 12.9758 2.8175 12.217 3.2525C11.5425 3.6125 10.6764 3.3725 10.2855 2.735C10.1628 2.525 10.0938 2.3 10.1092 2.075C10.1322 1.7825 10.0402 1.505 9.90223 1.28C9.61864 0.815 9.10511 0.5 8.53792 0.5H7.4572C6.89768 0.515 6.38414 0.815 6.10055 1.28C5.95492 1.505 5.87061 1.7825 5.88594 2.075C5.90127 2.3 5.83229 2.525 5.70965 2.735C5.31875 3.3725 4.45264 3.6125 3.78582 3.2525C3.01935 2.8175 2.06893 3.08 1.62438 3.8225L1.11084 4.7075C0.673957 5.45 0.919227 6.4025 1.67803 6.83C2.32953 7.2125 2.55947 8.06 2.17623 8.705C2.04594 8.9075 1.90797 9.08 1.69336 9.185C1.43276 9.3275 1.20282 9.5525 1.08019 9.7775C0.796592 10.2425 0.811922 10.8275 1.09551 11.315L1.62438 12.215C1.90797 12.695 2.43683 12.995 2.98869 12.995C3.24929 12.995 3.55588 12.92 3.80115 12.77C3.99276 12.6425 4.2227 12.5975 4.47564 12.5975C5.23444 12.5975 5.87061 13.22 5.88594 13.9625C5.88594 14.825 6.59109 15.5 7.48019 15.5H8.52259C9.40403 15.5 10.1092 14.825 10.1092 13.9625C10.1322 13.22 10.7683 12.5975 11.5271 12.5975C11.7724 12.5975 12.0024 12.6425 12.2016 12.77C12.4469 12.92 12.7458 12.995 13.0141 12.995C13.5583 12.995 14.0871 12.695 14.3707 12.215L14.9073 11.315C15.1832 10.8125 15.2062 10.2425 14.9226 9.7775Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                            </svg>
                            <p className='font-Inter lg:block hidden font-semibold text-[14px] text-[#7C7C7C]  group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-text-gradient duration-300'>Setting</p>

                    </Link>
                    <a href="" className='flex gap-4 items-center p-[13px] rounded-[22.5px] justify-center lg:justify-normal bg-transparent hover:bg-orange-white group duration-300'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M0.5 3.83525C0.5 1.997 2.02268 0.5 3.8934 0.5H7.61423C9.48114 0.5 11 1.9925 11 3.82775V12.1648C11 14.0037 9.47732 15.5 7.60584 15.5H3.88653C2.01886 15.5 0.5 14.0075 0.5 12.1722V11.4672V3.83525Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300' />
                            <path d="M15.3339 7.59104L13.1996 5.40929C12.979 5.18429 12.624 5.18429 12.4041 5.41079C12.185 5.63729 12.1857 6.00254 12.4056 6.22754L13.575 7.42229H12.4538H6.16107C5.85063 7.42229 5.59863 7.68104 5.59863 7.99979C5.59863 8.31929 5.85063 8.57729 6.16107 8.57729H13.575L12.4056 9.77204C12.1857 9.99704 12.185 10.3623 12.4041 10.5888C12.5144 10.702 12.6583 10.759 12.803 10.759C12.9461 10.759 13.09 10.702 13.1996 10.5903L15.3339 8.40929C15.4398 8.30054 15.4997 8.15354 15.4997 7.99979C15.4997 7.84679 15.4398 7.69979 15.3339 7.59104Z" fill="#A8A8A8" className='group-hover:fill-[url(#paint1_linear_33_463)] duration-300'/>
                        </svg>
                        <p className='font-Inter lg:block hidden font-semibold text-[14px] text-[#7C7C7C]  group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-text-gradient duration-300 '>Log out</p>
                    </a>
                </div>
            </sidebar>
        </div>
    )
}

export default Side
