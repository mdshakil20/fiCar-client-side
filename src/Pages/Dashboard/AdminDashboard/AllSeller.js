import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

    const [sellers, setSeller] = useState([]);
    useEffect(() => {
        fetch('https://fi-car-server.vercel.app/seller')
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [])

    const deletehandle = (id) => {
        const agree = window.confirm('Are you sure to delete this user?');
        if (agree) {
            fetch(`https://fi-car-server.vercel.app/user/delete?id=${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully.');
                        const remainingmyUser = sellers.filter(filtered => filtered._id !== id);
                        setSeller(remainingmyUser);
                    }
                }
                )
        }
    }

    const makeVarify =( id, email) => {
        fetch(`https://fi-car-server.vercel.app/verifyInProduct?email=${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Verify in Product Successfully'); 
                }
            }
            )
            
        //update in user collection 
        fetch(`https://fi-car-server.vercel.app/seller/verify?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Verify Successfully');


                    fetch('https://fi-car-server.vercel.app/seller')
                        .then(res => res.json())
                        .then(data => setSeller(data))
                }
            }
            )

    }

    return (
        <div className=' mx-3 mt-5'>
            <h4 className='text-xl text-white my-3'>All Selllers</h4>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* --------- get seller info ----------- */}
                        {
                            sellers.map((seller, i) =>
                                <tr key={i} >
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={seller.userImg} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.phone}</td>
                                    <td>{seller.location}</td>
                                    <td>
                                        <>
                                            <button onClick={() => deletehandle(seller._id)} className='py-px px-2 bg-red-600 text-white rounded'> Delete</button>
                                            {
                                                seller.isVerify != 'verified' ?
                                                    <button onClick={() => makeVarify(seller._id, seller.email)} className="ml-2 py-px px-2 bg-green-600 text-white rounded">Make verified</button> :
                                                    <button className="ml-2 py-px px-2 bg-gray-400 text-white rounded" disabled>Verified</button>
                                            }
                                        </>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;