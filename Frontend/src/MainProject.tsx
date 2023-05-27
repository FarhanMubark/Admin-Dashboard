import React from 'react'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Inventory from './Pages/Inventory'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import SidebarWithHeader from './Components/UiSidBar'
import Sidebar from './Components/Sidebar'
import Orders from './Pages/Orders'
import Login from './Pages/Login'



export default function MainProject() {
  return (
    <>
    <Sidebar>    
     <Routes>
         <Route path='/dashboard' index element={<Dashboard/>} />
         <Route path='/inventory' element={<Inventory/>} />
         <Route path='/orders' element={<Orders/>} />
      </Routes>
    </Sidebar>
    </>
  )
}
