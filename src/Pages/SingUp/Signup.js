import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Signup = () => {
    const formHandler = event => {
        event.preventDefault();
        console.log(event.target.type.value);
        console.log(event.target.type2.value);
    }
    return (
        <div className="max-w-[1200px] mx-auto my-2 pb-24 px-3 md:py-8 ">
            <h1 className='text-3xl text-primary text-center font-bold'>Welcome to FiCar</h1>
            <p className="my-3 text-base text-center">Already have an account ?
                <Link to='/login' className="py-1 bg-primary text-white px-3 text-xs ml-3 uppercase rounded-xl">Login</Link>
            </p>
            <div className='md:mt-14 md:flex md:items-center '>
                <div className='md:w-1/2 md:mx-5 text-primary'>
                    <form onSubmit={formHandler}>
                        <Fade right cascade delay={100}>
                            <input className="mt-3 input input-bordered input-primary w-full " type="text" placeholder="Name" name='name' required />
                            <input className="mt-3 input input-bordered input-primary w-full " type="email" placeholder="Email" name='email' required />
                            <input className="mt-3 input input-bordered input-primary w-full " type="password" placeholder="PassWord" name='password' required />
                            <input className="mt-3 input input-bordered input-primary w-full " type="text" placeholder="Phone Number" name='phone' required />
                            <div className='flex items-center'>
                                <input className="w-1/2 mt-3 input input-bordered input-primary mr-1" type="text" placeholder="Location" name='location' required />
                                <select className="w-1/2 select select-primary mt-3 ml-1" required>
                                    <option disabled selected>Register as a</option>
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                            </div>
                            <div className='w-full md:flex justify-around'>
                                <input className="md:w-1/2 md:mr-1 mt-3 file-input file-input-bordered file-input-primary w-full " type="file" required />
                                <button className="md:w-1/2 md:ml-1 btn btn-active btn-primary mt-3 w-full">Register</button>
                            </div>
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