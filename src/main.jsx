import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Categoryprovider } from './Components/Context/Category.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
import Cart from './Components/Cart.jsx'
import Login from './Components/Login.jsx'
import Navbar from './Components/Navbar.jsx'


const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children:[
    {
      path:"",
      element:(
      <>
        <Navbar/>
        <Hero/>
        <Menu/>
      </>
      )
    },
    {
      path:'cart',
      element:(
      <>
      <Navbar/>
      <Cart/>
      </>)
    },
    {
      path:'login',
      element:<Login/>
    },
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Categoryprovider>
    <RouterProvider router={router}/>
    </Categoryprovider>
  </StrictMode>
)
