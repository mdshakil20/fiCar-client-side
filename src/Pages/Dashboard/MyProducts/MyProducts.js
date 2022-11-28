import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { RiDeleteBin5Line } from "react-icons/ri";
import toast from 'react-hot-toast';

const MyProducts = () => {
    const [myProducts, setMyProducts] = useState([]);
    const [deleteId, setDeleteId] = useState([]);
    // console.log(myProducts);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/products?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, []);

    const deletehandle = (did) => {
        const agree = window.confirm('are you sure to delete it?');
        if (agree) {
            fetch(`http://localhost:5000/products/delete?id=${did}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('deleted successfully.');
                        const remainingmyProducts = myProducts.filter(myPdct => myPdct._id !== did);
                        setMyProducts(remainingmyProducts);
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
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((myproduct, i) =>
                                <tr key={i} >
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myproduct.productImg} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{myproduct.brand}</td>
                                    <td>{myproduct.model}</td>
                                    <td>{myproduct.askingPrice}</td>
                                    <td>{myproduct.status}</td>
                                    <td>
                                        {
                                            <>
                                                <button onClick={() => deletehandle(myproduct._id)} className='py-px px-2 bg-red-600 text-white rounded'> Delete</button>
                                                {
                                                    myproduct.status == 'unsold' && <button className='ml-2 py-px px-2 bg-green-600 text-white rounded'>Make Ad</button>
                                                }

                                            </>
                                        }
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

export default MyProducts;