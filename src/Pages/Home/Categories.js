import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [dealy, setDelay] = useState(500);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeCategories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    console.log(categories);

    return (
        <div className=' bg-slate-50 mb-20'>
            <div className="max-w-[1200px] mx-auto my-2 pb-24 mt-20 px-3 md:py-14">
                <h2 className='text-3xl text-primary font-bold text-center mt-10'>See Our Categories</h2>
                <div className='my-14  mx-5 grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {
                        categories.map(category =>
                            <Link to={`/category/${category._id}`} key={category._id} className="bg-base-100 shadow-xl hover:shadow-2xl  hover:border-blue-200 border-transparent border-2 hover:border-current mx-auto rounded-lg ">
                                
                                <Fade left delay={dealy}>
                                    <figure className="px-8 pt-10">
                                        <img src={category.img} alt="" className="rounded-xl mx-auto w-[200px] h-[85px]" />
                                    </figure>
                                </Fade>
                                <div className="items-center text-center">
                                    <h2 className="text-center font-bold text-xl mt-5 mb-2">{category.name}</h2>
                                    <p className='py-2 my-2 mx-3 px-2 max-w-[260px]'>{category.title}</p>
                                    <div className="">
                                        {/* <button className="px-5 py-2 mb-10 rounded-lg btn btn-sm btn-wide btn-primary text-white font-bold mx-auto">See All</button> */}
                                    </div>
                                </div>
                            </Link>
                        )
                    }

                </div>
                <div className='flex mb-5 justify-center'>
                    <button className='btn btn-primary font-bold text-center'>See All Categories</button>
                </div>
            </div>
        </div>

    );
};

export default Categories;