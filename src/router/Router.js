import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';

const Router = () => {
    const router=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Router;