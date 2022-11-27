import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { MdVerified } from "react-icons/md";


const CarsByCategory = () => {
    const cars = useLoaderData()[0].cars;
    console.log(cars);
    return (
        <div className=' bg-slate-100'>
            <div className="max-w-[1200px] mx-auto my-3 ">
                <div className=" px-5 py-10 text-base-content flex flex-wrap">
                    <div className='w-1/4 bg-red-400 hidden lg:block'>

                    </div>
                    <div className='w-full lg:w-3/4'>
                        <h3 className='ml-5 font-bold text-lg'>Total Found {cars.length} Cars</h3>
                        {
                            cars.map(car =>
                                <div className='w-full mx-auto my-5 ml-3 block md:flex rounded-xl bg-white'>
                                    <div className='pt-5 md:pt-0'>
                                        <div className='w-[270px] h-[160px] bg-white my-4 mx-auto md:mx-4 rounded-xl'>
                                            <img src={car.carImg} className='w-[230px] mx-auto my-5' />
                                        </div>
                                        <div className='bg-white shadow-lg w-[160px] mx-auto -mt-10 mb-3 rounded flex items-center justify-around'>
                                            <h4 className='text-lg font-bold p-1'>${car.price}</h4>
                                            <p><AiOutlineHeart color='orange' size={25} /></p>
                                            {/* <p><AiFillHeart color='orange' size={25} /></p> */}
                                        </div>
                                    </div>

                                    <div className='px-2 md:flex w-full'>
                                        <div className='md:w-3/4'>
                                            <h1 className='text-xl md:text-2xl font-bold pt-5 pb-2 '>{car.band} {car.model}</h1>
                                            <div className='flex items-center pb-3'>
                                                <h1 className='text-sm font-bold mr-2'>-posted by seller</h1><p><MdVerified size={15} color='blue' /></p>
                                            </div>
                                            <div className='flex'>
                                                <div className='flex items-center'>
                                                    <HiLocationMarker color='gray' size={20} /><span className='ml-2'>Location</span>
                                                </div>
                                                <div className='flex items-center ml-8'>
                                                    <SlCalender color='gray' size={18} /><span className='ml-2'>12 nov 2022</span>
                                                </div>
                                            </div>
                                            <div className='my-2 pb-3 flex flex-wrap'>
                                                <p className='px-4 py-px mr-3 mt-2 bg-gray-100 rounded '>2017</p>
                                                <p className='px-4 py-px mr-3 mt-2 bg-gray-100 rounded '>petrol</p>
                                                <p className='px-4 py-px mr-3 mt-2 bg-gray-100 rounded '>5 yr used</p>
                                                <p className='px-4 py-px mr-3 mt-2 bg-gray-100 rounded '>original price 30000</p>
                                            </div>
                                        </div>
                                        <div className='md:w-1/4 md:relative pb-3 my-2 md:pb-0 '>
                                            <button className='btn btn-sm bg-blue-500 md:absolute md:bottom-3  lg:right-2 mx-auto text-white  border-transparent hover:bg-primary'>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsByCategory;