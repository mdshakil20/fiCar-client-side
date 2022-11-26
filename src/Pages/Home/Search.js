import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade'

const Search = () => {

    const [band, setBand] = useState([]);
    
    return (
        <div className='md:w-3/4 mx-auto mb-20 '>
            <Fade top delay={100}>
                <div className='w-full p-2 border border-1 shadow-2xl rounded-md  '>
                    <div className='my-3 mx-2'>
                        <h1 className='text-xl text-center md:text-2xl font-bold '>Search the Car You Want, <span className='text-primary'>At Your Price</span></h1>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 my-8'>
                            <select className="min-w-[80px] outline outline-slate-200 rounded-md outline-offset-2 outline-1 py-2 border-r-4 border-white px-3 mx-1 mt-3 md:mt-0 select-bordered">
                                <option disabled selected>Band</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                            <select className="min-w-[80px] outline outline-slate-200 rounded-md outline-offset-2 outline-1 py-2 border-r-4 border-white px-3 mx-1 mt-3 md:mt-0 select-bordered">
                                <option disabled selected>Model</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                            <select className="min-w-[80px] outline outline-slate-200 rounded-md outline-offset-2 outline-1 py-2 border-r-4 border-white px-3 mx-1 mt-3 md:mt-0 select-bordered">
                                <option disabled selected>Year</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                            <button className="btn bg-primary hover:bg-blue-800  min-w-[80px] outline outline-primary rounded-md outline-offset-2 outline-1 py-2 border-r-4 mt-3 md:mt-0  border-primary px-3 mx-1">Search</button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Search;