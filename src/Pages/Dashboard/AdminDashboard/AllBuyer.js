import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetch('https://fi-car-server.vercel.app/buyers')
            .then(res => res.json())
            .then(data => setBuyers(data))
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
                        const remainingmyUser = buyers.filter(filtered => filtered._id !== id);
                        setBuyers(remainingmyUser);
                    }
                }
                )
        }

    }

    return (
        <div className=' mx-3 mt-5'>
            <h4 className='text-xl text-white my-3'>All Buyers</h4>
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

                        {
                            buyers.map((buyer, i) =>
                                <tr key={i} >
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={buyer.userImg} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.phone}</td>
                                    <td>{buyer.location}</td>
                                    <td>
                                        <button onClick={() => deletehandle(buyer._id)} className='py-px px-2 bg-red-600 text-white rounded'> Delete</button>
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

export default AllBuyer;