import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Login from './components/Login';
import Shop from './components/Shop';
import SignUp from './components/SignUp';
import OrderReview from './components/OrderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/shop',
        element:<Shop></Shop>
      },
      {
        path:'/sign',
        element:<SignUp></SignUp>
      },
      {
        path:'/review',
        element:<OrderReview></OrderReview>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
