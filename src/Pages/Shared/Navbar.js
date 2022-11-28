import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { AiFillCaretDown } from "react-icons/ai";
import { useRadioGroup } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const NavBar = () => {
    const { user, userinfo, logOut } = useContext(AuthContext);
    const userRole = userinfo[0]?.role;
    console.log(userinfo);

    const handleLogOut = () => {
        const agree = window.confirm('Are you sure to log out? ');
        if (agree) {
            logOut()
                .then(() => { })
                .catch(err => console.log(err))
        }
    }


    return (
        <div className="max-w-[1200px] mx-auto my-3 ">
            {
                //   user?.email &&  userinfo.length == 0 &&<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                //   user?.email == null && <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
            }

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' >Home</Link></li>
                            <li><Link to='/' >Categories</Link></li>
                            <li><Link to='/' >About Us</Link></li>
                            {
                                user?.email && (
                                    userRole == 'seller' ? <li><Link to='/sellerDashboard' >Dashborad</Link></li> :
                                        userRole == 'user' ? <li><Link to='/userDashboard' >Dashborad</Link></li> :
                                            userRole == 'admin' ? <li><Link to='/adminDashboard' >Dashborad</Link></li> :
                                                <li><Link to='/userDashboard' >Dashborad</Link></li>
                                )
                            }
                            <li><Link to='/' >Contact Us</Link></li>
                            {
                                user?.email && <li><Link onClick={handleLogOut} >Logout</Link></li>
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-primary font-bold text-xl">FiCar</Link>
                </div>
                <div className="ml-0 navbar-center hidden lg:flex">
                    <ul className="menu font-semibold menu-horizontal p-0">
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/' >Categories</Link></li>
                        <li><Link to='/blogs' >Blogs</Link></li>
                        <li><Link to='/' >About Us</Link></li>
                        {
                            user?.email && (
                                userRole == 'seller' ? <li><Link to='/sellerDashboard' >Dashborad</Link></li> :
                                    userRole == 'user' ? <li><Link to='/userDashboard' >Dashborad</Link></li> :
                                        userRole == 'admin' ? <li><Link to='/adminDashboard' >Dashborad</Link></li> :
                                            <li><Link to='/userDashboard' >Dashborad</Link></li>
                            )
                        }
                        <li><Link to='/' >Contact Us</Link></li>
                        {
                            user?.email && <li><Link onClick={handleLogOut} >Logout</Link></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <>
                                <div className="dropdown dropdown-end flex items-center">
                                    <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
                                        <div className="w-10 border border-1 border-primary rounded-full">
                                            <img src={user?.photoURL} />

                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>
                                        <li><Link>Settings</Link></li>
                                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                                    </ul>
                                    <div>
                                        <AiFillCaretDown />
                                    </div>
                                </div>
                            </> :
                            <Link to='/login' className="drop-shadow font-semibold hover:bg-primary hover:text-white rounded-md bg-white px-4 py-2">Login</Link>
                    }

                </div>

            </div>

        </div>
    );
};

export default NavBar;
