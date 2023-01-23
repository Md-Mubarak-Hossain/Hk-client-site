import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Edit from '../pages/shared/Edit';
import View from '../pages/shared/View';

const Router = () => {
    const router=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/view',
                    element:<View></View>
                },
                {
                    path:'/edit/:id',
                    element:<Edit></Edit>,
                    loader:({params})=>fetch(`https://hk-server.vercel.app/user/${params.id}`)

                },
            ]
        }
    ])
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Router;