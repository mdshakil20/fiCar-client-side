import { GoogleAuthProvider } from "firebase/auth";
import { Result } from "postcss";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const googleProvider = new GoogleAuthProvider();
    const { login, loginWithGoogle} = useContext(AuthContext);
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
                navigate(from, {replace: true});
            })
            .catch(err => setErrorMessage(err.message));

    }

    const handleGoogleLogin =()=>{
        loginWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            if(user){
                navigate('/')
            }
            
        } )
        .catch(err => setErrorMessage(err.message))

    }

    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content md:w-40%">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="mx-8 mt-4">
                            <p className="my-3 text-xs text-right">Don't have an account ?
                                <Link to='/singup' className="py-1 bg-primary text-white px-3 text-xs ml-3  uppercase rounded-full">Sign Up</Link> </p>
                            <h1 className="text-primary text-3xl font-bold pt-4">Welcome to DentalCare</h1>
                            <p className="pt-2 pb-3">Login your account.</p>
                        </div>
                        <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body py-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register("password")} placeholder="Password" className="input input-bordered" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                {
                                    errorMessage && <p className="text-red-600 text-sm py-2 ">{errorMessage}</p>
                                }
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                         <button onClick={handleGoogleLogin} className="btn btn-primary mx-8 mb-5">Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;