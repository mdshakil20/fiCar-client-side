import { GoogleAuthProvider } from "firebase/auth";
import { Result } from "postcss";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Fade } from "react-reveal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const googleProvider = new GoogleAuthProvider();
    const { login, loginWithGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = data => {
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                setErrorMessage('');
                toast('Welcome to FiCar');
                navigate(from, { replace: true });
            })
            .catch(err => setErrorMessage(err.message));

    }

    const handleGoogleLogin = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;

                if (user) {
                    toast('Welcome to FiCar');
                    navigate('/')
                }

            })
            .catch(err => setErrorMessage(err.message))

    }

    return (
        <div className="max-w-[1200px] mx-auto my-2 pb-24 px-3 md:py-8 ">
            <h1 className='text-3xl text-primary text-center font-bold'>Welcome to FiCar</h1>
            <div className='w-full flex mt-3 mb-2'>
                <label for="Toggle3" className=" mx-auto inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                    <input id="Toggle3" type="checkbox" className="hidden peer" />
                    <Link to='/login' className="px-4 py-2 rounded-l-md bg-primary text-white peer-checked:bg-gray-300">Login</Link>
                    <Link to='/signup' className="px-4 py-2 rounded-r-md bg-gray-300 peer-checked:bg-violet-400">Sign Up</Link>
                </label>
            </div>


            <div className='md:mt-8 md:flex md:items-center '>
                <Fade right duration={1500}>
                    <div className='md:w-1/2 m-3'>
                        <img src='https://i.postimg.cc/vmDM8Zbs/cat-3.png' />
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className='md:w-1/2 md:mx-5 text-primary'>
                        <form onSubmit={handleSubmit(handleOnSubmit)}>
                            <input className="mt-3 input input-bordered input-primary w-full " {...register("email")} type="email" placeholder="Email" name='email' required />
                            <input className="mt-3 input input-bordered input-primary w-full " {...register("password")} type="password" placeholder="Password" name='password' required />
                            {/* <label className="label mt-2 mb-1">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                            <div className="form-control mt-1">
                                {
                                    errorMessage && <p className="text-red-600 text-sm py-2 ">{errorMessage}</p>
                                }
                                <button className="btn btn-active btn-primary mt-3 w-full">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn btn-active btn-primary mt-3 w-full">Login with google</button>
                    </div>
                </Fade>

            </div>
        </div>
    );
}

export default Login;