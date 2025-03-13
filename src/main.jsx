import { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Categoryprovider } from './Components/Context/Category.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Cart from './Components/Cart.jsx';
import Login from './Components/Login.jsx';
import Navbar from './Components/Navbar.jsx';
import Profile from './Components/Profile.jsx';
import BookDetail from './Components/BookDetail'; // Import the BookDetail component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <>
            <Navbar />
            <Hero />
            <Menu />
          </>
        ),
      },
      {
        path: 'cart',
        element: (
          <>
            <Navbar />
            <Cart />
          </>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'profile',
        element: (
          <>
            <Navbar />
            <Profile />
          </>
        ),
      },
      {
        path: 'book/:id',
        element: 
        <>
        <Navbar />
        <BookDetail />,
      </>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Categoryprovider>
      <RouterProvider router={router} />
    </Categoryprovider>
  </StrictMode>
);