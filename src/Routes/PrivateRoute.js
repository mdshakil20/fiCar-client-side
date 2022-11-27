import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoute = ({children})=>{
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        console.log('loading');
        return <div className="w-full py-5 "><div className="w-16 h-16 mx-auto border-4 border-dashed border-primary rounded-full animate-spin dark:border-violet-400"></div></div>
    }
    if(user){
        
        return children;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
}

export default PrivateRoute;