import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate();
    const [errorF, setErrorF] = useState('');
    const {user} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('http://localhost:5000/allCategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleOnSubmit = data => {

        const image = data.productImg[0];
        const formData = new FormData();
        formData.append('image', image);
        const today = new Date().toDateString();

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                //check img url ready or not
                if (imgData.success) {
                    // console.log(imgData.data.url);

                    //after image url ready 
                    adPostDb(
                        imgData.data.url, 
                        data.brandName,
                        data.model, 
                        data.manufactureYear,
                        data.useYear, 
                        data.originalPrice,
                        data.askingPrice, 
                        data.description,
                        data.color, 
                        data.category,
                        data.fuelType, 
                        data.location, 
                        data.phone, 
                        data.condition);
                }
            });
    }
    const adPostDb =(productImg,brand,model,manufactureYear,useYear,originalPrice,askingPrice,description,color,category,fuelType,location,phone,condition)=>{
        const productInfo =
        {
            productImg : productImg,
            brand :  brand,
            model : model,
            manufactureYear : manufactureYear,
            useYear : useYear,
            originalPrice : originalPrice,
            askingPrice : askingPrice,
            description : description,
            color : color,
            category : category,
            fuelType : fuelType,
            location : location,
            phone : phone,
            condition : condition,
            status:'unsold',
            sellerName: user?.displayName,
            sellerEmail: user?.email
        }
        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            toast('Products add successfully');
            navigate('/myproducts');
        })

    }

    return (
        <div className='mx-4 my-3'>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <h1 className='text-4xl text-white mt-5 font-bold text-center'>Add product</h1>
                <Fade right cascade delay={100}>

                    <div className='w-full md:flex'>
                        <input {...register("brandName", { required: true })} type="text" placeholder="brand Name" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:mr-1 " />
                        <input {...register("model", { required: true })} type="text" placeholder="Car Model" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:ml-1 " />
                    </div>
                    <div className='w-full md:flex'>
                        <input {...register("manufactureYear", { required: true })} type="number" placeholder="Manufacture Year" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:mr-1 " />
                        <input {...register("useYear", { required: true })} type="number" placeholder="Year of Use" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:ml-1 " />
                    </div>
                    <div className='w-full md:flex'>
                        <input {...register("originalPrice", { required: true })} type="number" placeholder="Original Price" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:mr-1 " />
                        <input {...register("askingPrice", { required: true })} type="number" placeholder="Asking Price" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:ml-1 " />
                    </div>
                    <div className='w-full md:flex'>
                        <input {...register("description", { required: true })} type="text" placeholder="Description" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:mr-1 " />
                        <input {...register("color", { required: true })} type="text" placeholder="Color" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:ml-1 " />
                    </div>
                    <div className='w-full md:flex'>
                        <div className='w-full md:w-1/2 mr-1'>
                            <select className=" w-full select select-primary mt-3" {...register("category", { required: true })} required >
                                <option selected disabled >Category</option>
                                {
                                    categories.map((category, i) => <option key={i} >{category.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='w-full md:w-1/2 ml-1'>
                            <select className="w-full select select-primary mt-3" {...register("fuelType", { required: true })} required >
                                <option selected disabled >Fuel Type</option>
                                <option value='diesel'>Diesel</option>
                                <option value='octen'>Octen</option>
                                <option value='petrol'>Petrol</option>
                                <option value='electric'>Electric</option>
                                <option value='cng'>CNG</option>
                                <option value='lpg'>LPG</option>
                                <option value='hybrid'>Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full md:flex'>
                        <input {...register("location", { required: true })} type="text" placeholder="Location" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:mr-1 " />
                        <input {...register("phone", { required: true })} type="text" placeholder="Phone" className="mt-3 input input-bordered input-primary w-full md:w-1/2 md:ml-1 " />
                    </div>
                    <div className=' bg-white flex flex-wrap justify-around border border-1 border-primary px-1 mt-3 py-3 md:ml-1 rounded-lg'>
                        <p className=''>Condition:</p>
                        <div className='flex items-center'>
                            <input type="radio" name="radio" {...register("condition", { required: true })} value='excellent' className="radio radio-primary" checked />
                            <label>
                                <span className="label-text ml-2 text-base  ">Excellent</span>
                            </label>
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" name="radio" {...register("condition", { required: true })} value="Good" className="radio radio-primary" />
                            <label>
                                <span className="label-text ml-2 text-base  ">Good</span>
                            </label>
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" name="radio" {...register("condition", { required: true })} value="Fair" className="radio radio-primary" />
                            <label>
                                <span className="label-text ml-2 text-base  ">Fair</span>
                            </label>
                        </div>
                    </div>

                    <div className='w-full md:flex md:items-center justify-around'>
                        <div className='w-full md:items-center flex mt-3 md:mr-1 md:w-3/4 bg-primary rounded-lg'>
                            <p className='w-1/4 text-white ml-3 font-semibold '>Select Picture</p>
                            <input type="file" {...register("productImg", { required: true })} className="w-3/4 file-input file-input-bordered file-input-primary " required />
                        </div>
                        <button className="md:w-1/4 md:ml-1 btn btn-active btn-primary mt-5 md:mt-3 w-full">Post Ad</button>
                    </div>
                    {errorF && <p className='my-2 text-center text-red-700 font-semibold'>{errorF}</p>}
                </Fade>
            </form>
        </div>
    );
};

export default AddProduct;