import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { MdVerified } from "react-icons/md";
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from "react-hot-toast";
import { buildQueries } from '@testing-library/react';


const CarsByCategory = () => {
    const { user } = useContext(AuthContext);
    const cars = useLoaderData();
    console.log("cars by category ", cars);

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [sellerMail, setSellerMail] = useState('');
    const [spinner, setSpinner] = useState(false);
    const [postId, setPostId] = useState(null);
    const [carImgURL, setcarImgURL] = useState('');
    // console.log(cars);
    const find = (product) => {

        const name = product.brand + " " + product.model;
        setProductName(name);
        setProductPrice(product.askingPrice);
        setSellerMail(product.sellerEmail);
        setPostId(product._id);
        setcarImgURL(product.setcarImgURL);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        setSpinner(true);
        const form = event.target;
        console.log(form.productName.value);

        const bookingInfo = {
            meetLocation: form.meetLocation.value,
            productName: form.productName.value,
            productPrice: form.productPrice.value,
            buyerEmail: form.buyerEmail.value,
            buyerPhone: form.buyerPhone.value,
            sellerEmail: sellerMail,
            postId: postId,
            carImgURL: carImgURL
        }

        fetch(`https://fi-car-server.vercel.app/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpinner(false);
                toast('Booked successfully');
                // navigate('/myproducts');
            })
            .catch(err => console.log(err))
    }

    const addToWishList = (productInfo) => {
        const name = productInfo.brand + ' '+ productInfo.model;

        const wishItemInfo = {
            productName: name,
            productPrice: productInfo.askingPrice,
            sellerMail: productInfo.sellerEmail,
            postId: productInfo._id,
            carImgURL: productInfo.productImg,
            userEmail : user?.email
        }

        fetch(`https://fi-car-server.vercel.app/wishList`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishItemInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpinner(false);
                toast('Added in WishList successfully');
                // navigate('/myproducts');
            })
            .catch(err => console.log(err))

    }


    return (
        <div className=' bg-slate-100'>
            {
                spinner &&
                <div className='absolute flex w-full mt-10'>
                    <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin border-primary"></div>
                </div>
            }
            <div className="max-w-[1200px] mx-auto my-3 ">
                <div className=" px-5 py-10 text-base-content flex flex-wrap">
                    <div className='w-1/4 bg-gray-50 hidden lg:block'>

                    </div>
                    <div className='w-full lg:w-3/4'>
                        <h3 className='ml-5 font-bold text-lg'>Total Found {cars.length} Cars</h3>
                        {
                            cars.map(car =>
                                <div className='w-full mx-auto my-5 ml-3 block md:flex rounded-xl bg-white'>
                                    <div className='pt-5 md:pt-0'>
                                        <div className='w-[200px] h-[160px] bg-white my-4 mx-auto md:mx-4 rounded-xl'>
                                            <img src={car.productImg} className='w-[150px] h-[100px] mx-auto my-5' />
                                        </div>
                                        <div className='bg-white shadow-lg w-[180px] mx-auto -mt-10 mb-3 rounded flex items-center justify-around'>
                                            <h4 className='text-lg font-bold p-1'>${car.askingPrice}</h4>
                                            {/* <button  onClick={()=>addToWishList(car)} className='' id='adWishBorder'><AiOutlineHeart color='orange' size={25} /></button> */}
                                            <button onClick={() => addToWishList(car)} className=' p-px bg-slate-300 rounded'> Add to Wish</button>
                                            {/* <button className='hidden' id='adWishFill'><AiFillHeart color='orange' size={25} /></button> */}
                                        </div>
                                    </div>

                                    <div className='px-2 md:flex w-full'>
                                        <div className='md:w-3/4'>
                                            <h1 className='text-xl md:text-2xl font-bold pt-5 pb-2 '>{car.brand} {car.model}</h1>

                                            <div className='flex items-center pb-3'>
                                                <h1 className='text-sm font-bold mr-2'>-posted by {car.sellerName}</h1>{car.isVerify == 'verified' && <p><MdVerified size={15} color='blue' /></p>}
                                            </div>

                                            <div className='flex'>
                                                <div className='flex items-center'>
                                                    <HiLocationMarker color='gray' size={20} /><span className='ml-2'>{car.location}</span>
                                                </div>
                                                <div className='flex items-center ml-8'>
                                                    <SlCalender color='gray' size={18} /><span className='ml-2'>{car.postDate}</span>
                                                </div>
                                            </div>
                                            <div className='my-2 pb-3 flex flex-wrap'>
                                                <p className='px-4 py-px mr-3 mt-2 bg-gray-100 rounded '>{car.manufactureYear}</p>
                                                <p className='px-4 py-px mr-3 mt-2 bg-gray-100 rounded '>{car.fuelType}</p>
                                                <p className='px-4 py-px mr-3 mt-2 bg-gray-100 rounded '>{car.useYear} yr used</p>
                                                <p className='px-4 py-px mr-3 mt-2 bg-gray-100 rounded '>original price {car.originalPrice}</p>
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
                                                                    <span className="label-text">Product Price</span>
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
                                                            <input type="text" name="meetLocation" placeholder="Enter Location" className="-mt-2 input input-bordered" required />
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