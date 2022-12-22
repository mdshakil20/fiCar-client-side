import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { RiDeleteBin5Line } from "react-icons/ri";
import toast from 'react-hot-toast';

const MyWishList = () => {
    const [myWishItems, setMyWishItems] = useState([]);
    const [deleteId, setDeleteId] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://fi-car-server.vercel.app/wishList?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyWishItems(data))
            .catch(err=>console.log(err))
    }, []);

    console.log(myWishItems);

    const deletehandle = (did) => {
        const agree = window.confirm('are you sure to delete it?');
        if (agree) {
            fetch(`https://fi-car-server.vercel.app/products/delete?id=${did}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('deleted successfully.');
                        const remainingmyWishItems = myWishItems.filter(myPdct => myPdct._id !== did);
                        setMyWishItems(remainingmyWishItems);
                    }
                }
                )
        }
    }

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
                            myWishItems.map((myproduct, i) =>
                                <tr key={i} >
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myproduct.carImgURL} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{myproduct.productName}</td>
                                    <td>{myproduct.productPrice}</td>
                                    <td>
                                        <button onClick={() => deletehandle(myproduct._id)} className='py-px px-2 bg-green-600 text-white rounded'> Make Paid </button>

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

export default MyWishList;