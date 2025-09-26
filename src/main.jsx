import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Cart from './Components/Cart.jsx';
import Login from './Components/Login.jsx';
import Navbar from './Components/Navbar.jsx';
import Profile from './Components/Profile.jsx';
import BookDetail from './Components/BookDetail';
import Chatbot from './Components/Chatbot.jsx'; // Import chatbot
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
import { store } from './store/store.js';


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
            <Chatbot /> 
          </>
        ),
      },
      {
        path: 'cart',
        element: (
          <>
            <Navbar />
            <Cart />
            <Chatbot />
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
              <Chatbot /> 
            </>
        ),
      },
      {
        path: 'book/:id',
        element: (
          <>
            <Navbar />
            <BookDetail />
            <Chatbot />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
    </Provider>
  </StrictMode>
);