import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Ad = () => {

    const { data: displayAd = [], refetch, isLoading } = useQuery({
        queryKey: ['displayService'],
        queryFn: async () => {
            const res = await fetch(`https://fi-car-server.vercel.app/advertise`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            {
                displayAd.length > 0 &&
                <div className="max-w-[1200px] mx-auto my-3 ">
                    <h1 className='font-bold text-3xl my-3 ml-4 '>Advertise : </h1>
                    <div className='block md:flex'>
                        {
                            displayAd.map((car,i) =>
                                <div key={i} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                    <img src={car.productImg} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-2xl font-semibold tracking-wide">{car.brand} {car.model}</h2>
                                            <p className="dark:text-gray-100 font-bold"> Asking Price {car.askingPrice}</p>
                                        </div>
                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary text-white dark:text-gray-900">Read more</button>
                                    </div>
                                </div>)
                        }

                    </div>
                </div>

            }

        </div>
    );
};

export default Ad;