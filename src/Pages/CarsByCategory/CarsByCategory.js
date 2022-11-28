import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { MdVerified } from "react-icons/md";
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from "react-hot-toast";


const CarsByCategory = () => {
    const { user } = useContext(AuthContext);
    const cars = useLoaderData()[0].cars;

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    // console.log(cars);
    const find = (product) => {

        const name = product.brand + " " + product.model;
        setProductName(name);
        setProductPrice(product.price);

    }

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form.productName.value);
        toast(`${productName} is booked.`);
    }


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
                                            <h1 className='text-xl md:text-2xl font-bold pt-5 pb-2 '>{car.brand} {car.model}</h1>

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
                                            <label htmlFor="my-modal" onClick={() => find(car)} className='btn btn-sm bg-blue-500 md:absolute md:bottom-3  lg:right-2 mx-auto
                                             text-white  border-transparent hover:bg-primary'>Book Now</label>

                                            {/* Modal Part */}

                                            <input type="checkbox" id="my-modal" className="modal-toggle" />


                                            <div className="modal">
                                                <div className="modal-box">
                                                    <form onSubmit={handleOnSubmit}>
                                                        <div className='w-full md:flex '>
                                                            <div className="md:flex md:w-1/2 w-full md:mr-1 form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Product Name</span>
                                                                </label>
                                                                <input type="text" name="productName" defaultValue={productName} className="-mt-2 input input-bordered" disabled />
                                                            </div>
                                                            <div className="md:flex md:w-1/2 w-full md:ml-1 form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Prosuct Price</span>
                                                                </label>
                                                                <input type="text" name="productPrice" defaultValue={productPrice} className="-mt-2 input input-bordered" disabled />
                                                            </div>
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Your Name</span>
                                                            </label>
                                                            <input type="text" name="buyerName" defaultValue={user?.displayName} className="-mt-2 input input-bordered" disabled />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Your Email</span>
                                                            </label>
                                                            <input type="text" name="buyerEmail" defaultValue={user?.email} className="-mt-2 input input-bordered" disabled />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Your Phone Number</span>
                                                            </label>
                                                            <input type="text" name="buyerPhone" placeholder="Enter your phone number" className="-mt-2 input input-bordered" required />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Meeting Location</span>
                                                            </label>
                                                            <input type="text" name="MeetLocation" placeholder="Enter Location" className="-mt-2 input input-bordered" required />
                                                        </div>

                                                        <div className="modal-action">
                                                            <button className="btn btn-primary">Submit</button>
                                                            <label htmlFor="my-modal" className="btn">Close</label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CarsByCategory;