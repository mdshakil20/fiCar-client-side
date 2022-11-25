import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';

const Categories = () => {
    const delay = 200;
    return (
        <div className=' bg-slate-50 mb-20'>
            <div className="max-w-[1200px] mx-auto my-2 pb-24 mt-20 px-3 md:py-14">
                <h2 className='text-3xl text-primary font-bold text-center mt-10'>See Our Categories</h2>
                <div className='my-14  mx-5 grid grid-cols-1 md:grid-cols-3 gap-2'>

                    <Link className="bg-base-100 shadow-xl mx-auto rounded-lg ">
                        <Flip  left delay={delay}>
                            <figure className="px-8 pt-10">
                                <img src='https://i.ibb.co/CVKNgxw/cat-3.png' alt="" className="rounded-xl mx-auto w-[230px] h-[100px]" />
                            </figure>
                        </Flip>

                        <div className="items-center text-center">
                            <h2 className="text-center font-bold text-xl mt-5 mb-2  ">BMW!</h2>
                            <p className='py-2 my-2 mx-3 px-2 max-w-[260px]'>Are you looking BMW car? go and check it out. </p>
                            <div className="">
                                {/* <button className="px-5 py-2 mb-10 rounded-lg btn btn-sm btn-wide btn-primary text-white font-bold mx-auto">See All</button> */}
                            </div>
                        </div>
                    </Link>
                    <Link className="bg-base-100 shadow-xl mx-auto rounded-lg ">
                        <Fade cascade left delay="200">
                            <figure className="px-8 pt-10">
                                <img src='https://i.ibb.co/CVKNgxw/cat-3.png' alt="" className="rounded-xl mx-auto w-[230px] h-[100px]" />
                            </figure>
                        </Fade>

                        <div className="items-center text-center">
                            <h2 className="text-center font-bold text-xl mt-5 mb-2  ">BMW!</h2>
                            <p className='py-2 my-2 mx-3 px-2 max-w-[260px]'>Are you looking BMW car? go and check it out. </p>
                            <div className="">
                                {/* <button className="px-5 py-2 mb-10 rounded-lg btn btn-sm btn-wide btn-primary text-white font-bold mx-auto">See All</button> */}
                            </div>
                        </div>
                    </Link>
                    <Link className="bg-base-100 shadow-xl mx-auto rounded-lg ">
                        <Fade cascade left delay="200">
                            <figure className="px-8 pt-10">
                                <img src='https://i.ibb.co/CVKNgxw/cat-3.png' alt="" className="rounded-xl mx-auto w-[230px] h-[100px]" />
                            </figure>
                        </Fade>

                        <div className="items-center text-center">
                            <h2 className="text-center font-bold text-xl mt-5 mb-2  ">BMW!</h2>
                            <p className='py-2 my-2 mx-3 px-2 max-w-[260px]'>Are you looking BMW car? go and check it out. </p>
                            <div className="">
                                {/* <button className="px-5 py-2 mb-10 rounded-lg btn btn-sm btn-wide btn-primary text-white font-bold mx-auto">See All</button> */}
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex mb-5 justify-center'>
                    <button className='btn btn-primary font-bold text-center'>See All Categories</button>
                </div>
            </div>
        </div>

    );
};

export default Categories;