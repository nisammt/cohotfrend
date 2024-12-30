import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Cart from "../pages/user/Cart";
import Login from "../pages/shared/Login";
import Order from "../pages/user/Order";
import ProductsCard from "../pages/user/ProductsCard";
import Signup from "../pages/shared/Signup";
import Errorpage from "../pages/shared/Errorpage";


const router = createBrowserRouter([

  {
    path:"/",
    element : <UserLayout/>,
    errorElement:<Errorpage/>,
    children :[
      {
        path: "home",
        element:<Home/>

        },
        {
          path: "about",
          element: <Home/>
        },

        {path: "cart",
          element: <Cart/>

        },
        {
          path: "login",
          element: <Login/>

        },
        {
          path:"order",
          element:<Order/>
        },
        {
          path:"products",
          element:<ProductsCard/>
        },
        { 
          path: "signup",
          element:<Signup/>

        }



    ]
   
  },
  
]
   
)
export default router




