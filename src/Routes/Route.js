import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CarsByCategory from "../Pages/CarsByCategory/CarsByCategory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/Signup";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/category/:id',
                element: <CarsByCategory></CarsByCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    }
])