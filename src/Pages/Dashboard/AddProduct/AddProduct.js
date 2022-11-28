import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const AddProduct = () => {
    // const navigate = useNavigate();
    const [errorF, setErrorF] = useState('');
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(()=>{
        fetch('http://localhost:5000/allCategory')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])
    const handleOnSubmit = data => {

        const image = data.userImg[0];
        const formData = new FormData();
        formData.append('image', image);
        const today = new Date().toDateString();
    }

    return (
        <div className='mx-4 my-3'>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <h1 className='text-4xl text-white mt-5 font-bold text-center'>Add product</h1>
                <Fade right cascade delay={100}>

                    <input className="mt-3 input input-bordered input-primary w-full " {...register("name", { required: true })} type="text" placeholder="Product Name" name='name' required />
                    <input className="mt-3 input input-bordered input-primary w-full " {...register("email", { required: true })} type="email" placeholder="Email" name='email' required />
                    <input className="mt-3 input input-bordered input-primary w-full " {...register("password", { required: true })} type="password" placeholder="PassWord" name='password' required />
                    <input className="mt-3 input input-bordered input-primary w-full " {...register("phone", { required: true })} type="text" placeholder="Phone Number" name='phone' required />
                    <div className='flex items-center mb-5 md:mb-0'>
                        <input className="w-1/2 mt-3 input input-bordered input-primary mr-1" {...register("location", { required: true })} type="text" placeholder="Location" name='location' required />
                        <div className='w-1/2 flex justify-around border border-1 border-primary px-1 mt-3 py-3 md:ml-1 rounded-lg'>
                            <div className='flex items-center'>
                                <input type="radio" name="radio" {...register("role", { required: true })} value='user' className="radio radio-primary" checked />
                                <label>
                                    <span className="label-text ml-2 text-base">User</span>
                                </label>
                            </div>
                            <div className='flex items-center'>
                                <input type="radio" name="radio" {...register("role", { required: true })} value="seller" className="radio radio-primary" />
                                <label>
                                    <span className="label-text ml-2 text-base">Seller</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className='w-full md:flex md:items-center justify-around'>
                        <div className='w-full md:items-center flex mt-3 md:mr-1 md:w-3/4 bg-primary rounded-lg'>
                            <p className='w-1/4 text-white ml-3 font-semibold '>Your Picture</p>
                            <input type="file" {...register("userImg", { required: true })} className="w-3/4 file-input file-input-bordered file-input-primary " required />

                        </div>
                        <button className="md:w-1/4 md:ml-1 btn btn-active btn-primary mt-5 md:mt-3 w-full">Sign Up</button>
                    </div>
                    {errorF && <p className='my-2 text-center text-red-700 font-semibold'>{errorF}</p>}
                </Fade>
            </form>
        </div>
    );
};

export default AddProduct;