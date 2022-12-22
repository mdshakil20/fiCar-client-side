import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from "react-hot-toast";
import useTitle from '../UseTitle/UseTitle';

const Signup = () => {
    useTitle("SignUp");
    const navigate = useNavigate();
    const [errorF, setErrorF] = useState('');
    const [spinner, setSpinner] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, setUserInfo, login } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const handleOnSubmit = data => {
        setSpinner(true);
        const image = data.userImg[0];
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
                    console.log(imgData.data.url);

                    //after image url ready 
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            setErrorF('');

                            //update user info obj
                            const updateInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url
                            };

                            //update user name and photoURL
                            setUserInfo(updateInfo)
                                .then(() => {
                                    saveUser(data.name, data.email, data.phone, data.location, data.role, imgData.data.url, today);
                                })
                                .catch(err => {
                                    setSpinner(false);
                                    setErrorF(err.message)
                                })
                        })
                        .catch(err => {
                            setSpinner(false);
                            setErrorF(err.message)
                        })
                }
            })
            .catch(err => console.log(err.message))
    }

    const saveUser = (name, email, phone, location, role, userImg, userCreatedDate) => {
        const user = {
            name: name,
            email: email,
            phone: phone,
            location: location,
            role: role,
            userImg: userImg,
            userCreatedDate: userCreatedDate,
            isVerify: null,
            notification: []
        };
        fetch(`https://fi-car-server.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // getUserToken(email)
                setSpinner(false);
                toast('User Created Successfully.')
                login(data.email, data.password)
                    .then(result => {
                        const user = result.user;
                        setErrorF('');
                        if (user) {
                            navigate('/');
                            toast('Welcome to FiCar');
                           
                        }
                    })
                    .catch(err => setErrorF(err.message));

            })
    }

    // const getUserToken = email => {
    //     fetch(`https://fi-car-server.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('access token ', data.accessToken);
    //                 navigate('/');
    //             }
    //         })
    //  }
    return (
        <div className="max-w-[1200px] relative mx-auto my-2 pb-24 px-3 md:py-8 ">
            {
                spinner &&
                <div className='absolute flex w-full mt-10'>
                    <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin border-primary"></div>
                </div>
            }

            <h1 className='text-3xl text-primary text-center font-bold'>Welcome to FiCar</h1>
            <div className='w-full flex mt-3 mb-2'>
                <label for="Toggle3" className=" mx-auto inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                    <input id="Toggle3" type="checkbox" className="hidden peer" />
                    <Link to='/login' className="px-4 py-2 rounded-l-md  bg-gray-300 peer-checked:bg-gray-300">Login</Link>
                    <Link to='/signup' className="px-4 py-2 rounded-r-md bg-primary text-white peer-checked:bg-violet-400">Sign Up</Link>
                </label>
            </div>

            <div className='md:mt-8 md:flex md:items-center '>
                <div className='md:w-1/2 md:mx-5 text-primary'>
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        <Fade right cascade delay={100}>
                            <input className="mt-3 input input-bordered input-primary w-full " {...register("name", { required: true })} type="text" placeholder="Name" name='name' required />
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
                <Fade left duration={1500}>
                    <div className='md:w-1/2 m-3'>
                        <img src='https://i.postimg.cc/vmDM8Zbs/cat-3.png' />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Signup;
