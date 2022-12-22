import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import CarsByCategory from "../Pages/CarsByCategory/CarsByCategory";
import Contact from "../Pages/Contact";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AllBuyer from "../Pages/Dashboard/AdminDashboard/AllBuyer";
import AllSeller from "../Pages/Dashboard/AdminDashboard/AllSeller";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import SellerDashborad from "../Pages/Dashboard/SellerDashborad/SellerDashborad";
import MyOrder from "../Pages/Dashboard/UserDashborad/MyOrder";
import MyWishList from "../Pages/Dashboard/UserDashborad/MyWishList";
import UserDashborad from "../Pages/Dashboard/UserDashborad/UserDashborad";
import Blogs from "../Pages/Home/Blogs";
import Categories from "../Pages/Home/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
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
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
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
                path:'/category',
                element: <Categories></Categories>
            },
            {
                path:'/category/:name',
                element: <PrivateRoute><CarsByCategory></CarsByCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fi-car-server.vercel.app/category/${params.name}`)
            },
            {
                path:'*',
                element:<NotFound></NotFound>
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
            },
            {
                path:'/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/buyers',
                element:<AllBuyer></AllBuyer>
            },
            {
                path:'/sellers',
                element:<AllSeller></AllSeller>
            },
            {
                path:'/myorder',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/wishList',
                element:<MyWishList></MyWishList>
            },
            {
                path:'*',
                element:<NotFound></NotFound>
            }
        ]
    },
])