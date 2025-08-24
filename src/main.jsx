import { StrictMode } from 'react';
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
import BookDetail from './Components/BookDetail';
import { Toaster } from "react-hot-toast";
import { AuthProvider } from './Components/Context/AuthContext.jsx';
import ProtectedRoute from "./Components/ProtectedRoute";


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
          <ProtectedRoute>
          <>
            <Navbar />
            <Profile />
          </>
          </ProtectedRoute>
        ),
      },
      {
        path: 'book/:id',
        element: (
          <>
            <Navbar />
            <BookDetail />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Categoryprovider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </AuthProvider>
    </Categoryprovider>
  </StrictMode>
);
