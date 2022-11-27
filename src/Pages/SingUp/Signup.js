import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Fade from 'react-reveal/Fade';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
    const navigate = useNavigate();
    const [errorF, setErrorF] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, setUserInfo, login } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const [userImgURL, setUserImgURL] = useState('');


    const handleOnSubmit = data => {

        const image = data.userImg[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    setUserImgURL(imgData.data.url);
                }
            });

        const today = new Date().toDateString();
        //today.toLocaleDateString(); // "6/14/2020"


        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                setErrorF('');
                console.log(user);
                const updateInfo = {
                    displayName: data.name,
                    photoURL: userImgURL
                };
                setUserInfo(updateInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.phone, data.location, data.role, data.userImg[0].name, today);
                    })
                    .catch(err => setErrorF(err))

                toast('User Created Successfully.')
            })
            .catch(err => setErrorF(err.message))
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
        fetch(`http://localhost:5000/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // getUserToken(email)
                toast('User Created Successfully.')
                alert('User Created Successfully.')
                login(data.email, data.password)
                    .then(result => {
                        const user = result.user;
                        setErrorF('');
                        navigate('/');
                    })
                    .catch(err => setErrorF(err.message));

            })
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('access token ', data.accessToken);
    //                 navigate('/');
    //             }
    //         })
    //  }
    return (
        <div className="max-w-[1200px] mx-auto my-2 pb-24 px-3 md:py-8 ">
            <h1 className='text-3xl text-primary text-center font-bold'>Welcome to FiCar</h1>
            <p className="my-3 text-base text-center">Already have an account ?
                <Link to='/login' className="py-1 bg-primary text-white px-3 text-xs ml-3 uppercase rounded-xl">Login</Link>
            </p>
            <div className='md:mt-14 md:flex md:items-center '>
                <div className='md:w-1/2 md:mx-5 text-primary'>
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        <Fade right cascade delay={100}>
                            <input className="mt-3 input input-bordered input-primary w-full " {...register("name", { required: true })} type="text" placeholder="Name" name='name' required />
                            <input className="mt-3 input input-bordered input-primary w-full " {...register("email", { required: true })} type="email" placeholder="Email" name='email' required />
                            <input className="mt-3 input input-bordered input-primary w-full " {...register("password", { required: true })} type="password" placeholder="PassWord" name='password' required />
                            <input className="mt-3 input input-bordered input-primary w-full " {...register("phone", { required: true })} type="text" placeholder="Phone Number" name='phone' required />
                            <div className='flex items-center mb-5 md:mb-0'>
                                <input className="w-1/2 mt-3 input input-bordered input-primary mr-1" {...register("location", { required: true })} type="text" placeholder="Location" name='location' required />
                                <select className="w-1/2 select select-primary mt-3 ml-1" {...register("role", { required: true })} required >
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                            </div>

                            <div className='w-full md:flex md:items-center justify-around'>
                                {/* <label for="inputTag" className='w-full md:w-1/2 mt-3 md:mr-1 rounded-lg text-center px-5 py-2 font-semibold text-base cursor-pointer border border-1 border-primary ' required>
                                    Select Your Image
                                    <input id="inputTag" type="file" {...register("userImg", { required: true })} className='hidden' />
                                </label> */}
                                <div className='w-full md:items-center flex mt-3 md:mr-1 md:w-3/4 bg-primary rounded-lg'>
                                    <p className='w-1/4 text-white ml-3 font-semibold '>Your Picture</p>
                                    <input type="file" {...register("userImg", { required: true })} className="w-3/4 file-input file-input-bordered file-input-primary" required />

                                </div>
                                <button className="md:w-1/4 md:ml-1 btn btn-active btn-primary mt-5 md:mt-3 w-full">Sign Up</button>
                            </div>
                            {errorF && <p className='my-2 text-center'>{errorF}</p>}
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

//  https://i.ibb.co/yBmSPTZ/Group-12.png
// https://i.ibb.co/3y5DXC3/Group-13.png
// https://i.ibb.co/1L5LrYC/unsplash-Pto-Av-YUWn7-I.png