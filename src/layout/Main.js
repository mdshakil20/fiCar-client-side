import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/Navbar";
import UiLoader from "../Pages/UiLoader/UiLoader";

const Main = () => {
    const { uiloaded } = useContext(AuthContext);

    return (
        <div className="">

            {
                uiloaded ?
                    <>
                        <NavBar></NavBar>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </>
                    :
                    <UiLoader></UiLoader>
            }

        </div>
    );
};

export default Main;