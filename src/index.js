import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import RootLayOut from './pages/RootLayOut/RootLayOut';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home';
import ErrorPage from './pages/Error/ErrorPage';
import LoginPage from './pages/authntcation/LoginPage/LoginPage';
import RegisterPage from './pages/authntcation/Register/RegisterPage';
import Orders from './pages/OrderHistory/Orders';
import Card from './pages/Card/Card';
import RestPassword from './pages/authntcation/RestPassword/RestPassword';



const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayOut></RootLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {index:true,element:<Home></Home>}
      ,
      {
        path:"contact",element:<Contact></Contact>
      }
      ,
      {
        path:"login",element:<LoginPage></LoginPage>
      }
      ,
      {
        path:"register",element:<RegisterPage></RegisterPage>
      }
      ,
      {
        path:"restPassword",element:<RestPassword></RestPassword>
      }
      ,
      {
        path:"orders",element:<Orders></Orders>
      }
      ,
      {
        path:"cart",element:<Card></Card>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router}></RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

