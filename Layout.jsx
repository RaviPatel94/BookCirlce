import React from 'react'
import Navbar from './src/Components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default Layout