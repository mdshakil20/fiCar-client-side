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
        fetch(`https://fi-car-server.vercel.app/products?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, []);

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
                        const remainingmyProducts = myProducts.filter(myPdct => myPdct._id !== did);
                        setMyProducts(remainingmyProducts);
                    }
                }
                )
        }
    }

    const makeAdd = id => {
        fetch(`https://fi-car-server.vercel.app/makeAd?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Added in Advertisment Successfully');
                    fetch(`https://fi-car-server.vercel.app/products?email=${user.email}`)
                        .then(res => res.json())
                        .then(data => setMyProducts(data))
                }
            }
            )

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
                                                    // ------------checking item unsolde or not ---------------
                                                    myproduct.status == 'unsold' &&
                                                    <> {
                                                        myproduct.isAdd =='yes' ? 
                                                        <button onClick={() => makeAdd(myproduct._id)} className='ml-2 py-px px-2 bg-green-600 text-white rounded'>Make Ad</button>
                                                        :
                                                        <button  className='ml-2 py-px px-2 bg-green-600 text-white rounded'>Already in Ad</button>
                                                    }
                                                        

                                                    </>
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