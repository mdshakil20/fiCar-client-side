import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar";

const Main = () =>{
    return(
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;