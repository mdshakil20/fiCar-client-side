import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';


const Banner = () => {
    return (
        <div className="max-w-[1200px] mx-auto my-2 px-3 md:py-14 block md:flex md:items-center">
                    <>
                        <div className='md:w-1/2  p-2'>
                            <Fade right delay={800}>
                                <h1 className='text-4xl md:text-5xl md:leading-normal font-bold'><span className='text-primary' >Easy</span> Way To Buy And Sell Car On <span className='text-primary' >FiCar </span></h1>
                                <p className='my-3 md:w-11/12 text-justify'>We try to help you sell or buy your dream car here easily, quickly, and in a reliable way. Here You can search cars and find your favorite under your budget; if it's found, don't be late.</p>
                            </Fade>
                            <Fade top delay={1500}>
                                <button className='my-4 btn px-10 rounded-lg font-bold  text-white py-2 hover:bg-blue-600 bg-primary'>Search Car</button>
                            </Fade>
                        </div>
                        <div className='md:w-1/2 '>
                            <Fade left delay={300} className="mx-auto ">

                                <img
                                    className=' mx-auto mt-6 -mb-2 z-0 '
                                    src={'https://i.ibb.co/5shFvnT/Group-9-1.png'}
                                />
                            </Fade>
                        </div>
                    </>
                    

            

        </div>
    );
};

export default Banner;