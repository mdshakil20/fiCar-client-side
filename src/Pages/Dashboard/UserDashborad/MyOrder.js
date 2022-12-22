import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { RiDeleteBin5Line } from "react-icons/ri";
import toast from 'react-hot-toast';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    // const [deleteId, setDeleteId] = useState([]);
    // console.log(myOrders);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://fi-car-server.vercel.app/booked?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);

    // const deletehandle = (did) => {
    //     const agree = window.confirm('are you sure to delete it?');
    //     if (agree) {
    //         fetch(`https://fi-car-server.vercel.app/products/delete?id=${did}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     toast('deleted successfully.');
    //                     const remainingmyOrders = myOrders.filter(myPdct => myPdct._id !== did);
    //                     setMyOrders(remainingmyOrders);
    //                 }
    //             }
    //             )
    //     }
    // }


    return (
        <div className=' mx-3 mt-5'>
            <h4 className='text-xl text-white my-3'>Your All Products</h4>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders.map((myOrder, i) =>
                                <tr key={i} >
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myOrder.carImgURL} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{myOrder.productName}</td>
                                    <td>{myOrder.productPrice}</td>
                                    <td>
                                        <button className='ml-2 py-px px-2 bg-green-600 text-white rounded'>Make Payment</button>
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

export default MyOrder;