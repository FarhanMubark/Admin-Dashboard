
import Login from './Pages/Login'
import { Box } from '@chakra-ui/react';
import { Button } from 'antd';


import React from 'react'
import MainProject from './MainProject';
import { Routes, Route, RouterProvider, Outlet } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';
import Orders from './Pages/Orders';
import { createBrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

const handleLoginSuccess = (token: string) =>{
  // setToken(token)
  // setIsLoggedIn(true)
};


const loggedInRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Login onSuccess={handleLoginSuccess}/>
      },
      {
        path: '/dashboard',
        element: <Sidebar > <Dashboard/> </Sidebar>
      },
      {
        path: '/inventory',
        element: <Sidebar > <Inventory/> </Sidebar>
      },
      {
        path: '/orders',
        element: <Sidebar > <Orders/> </Sidebar>
      }
    ]
  }
])


export  function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [token ,setToken] = React.useState<string | null>(null);

  return (
    <RouterProvider router={loggedInRouter} />
  )
}


export default App
