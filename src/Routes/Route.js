import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import CarsByCategory from "../Pages/CarsByCategory/CarsByCategory";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import SellerDashborad from "../Pages/Dashboard/SellerDashborad/SellerDashborad";
import UserDashborad from "../Pages/Dashboard/UserDashborad/UserDashborad";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/Signup";
import PrivateRoute from "./PrivateRoute";

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
                path:'/dashboard',
                element: <UserDashborad></UserDashborad>
            },
            {
                path:'/category/:id',
                element: <PrivateRoute><CarsByCategory></CarsByCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path:'/',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/userDashboard',
                element:<UserDashborad></UserDashborad>
            },
            {
                path:'/sellerDashboard',
                element:<SellerDashborad></SellerDashborad>
            },
            {
                path:'/adminDashboard',
                element:<AdminDashboard></AdminDashboard>
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            }
        ]
    },
])