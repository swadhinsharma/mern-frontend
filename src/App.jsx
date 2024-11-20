import React, { useState, useEffect } from 'react';
import Darklight from './components/Darklight';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Api from './Pages/Phonepages/Api';
import axios from 'axios';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Productdetail from './components/Productdetail';
import Searchitem from './components/Searchitem';
import Cart from './Pages/Cartpage/Cart'; // Ensure correct path to Cart.jsx
import First from './Pages/FirstPage/First';
import Phoneslider from './components/Phoneslider';
import Iphone from './Pages/Phonepages/Iphone';
import AuthForm from './Pages/RegisterPage/Authform';
import Footer from './components/Footer';
import SmartWatch from './components/OtherProduct/SmartWatch';
import DisplayData from './components/display/DisplayData';


function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]); // Initialize cart state

  useEffect(() => {
    // Make a GET request to the /api endpoint
    axios
      .get('https://mernapp-tt2l.onrender.com/api_mobile') // Assuming your Express server is running on port 3001
      .then((response) => {
        // Set the fetched data in the state
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <First data = {data} cart={cart}/>, // Pass cart prop to Navbar component
    },
    {path: '/data',
     element: <DisplayData/>,
  },
    {
      path: '/register',
      element: <AuthForm/>
    },
    {
       path : "/pslide",
        element: <Phoneslider data={data} /> 

    },{
      path: '/iphone',
      element: <Iphone cart={cart} setCart={setCart} data={data}/>
    },{
      path: '/footer',
      element: <Footer/>
    },
    {
      path: '/todo',
      element: <Darklight />,
    },
    {
      path: '/api',
      element: <Api cart={cart} setCart={setCart} data={data} />, // Pass cart and setCart props to Api component
    },
    {
      path: '/slider',
      element: <Slider />,
    },
    {
      path: '/product/:id',
      element: <Productdetail data={data} />,
    },
    {
      path: '/search/:term',
      element: <Searchitem data={data} />,
    },
    {
      path: '/Cart',
      element: <Cart cart={cart} setCart={setCart} />, // Pass cart and setCart props to Cart component
    },{
      path: '/navbar',
      element: <Navbar cart={cart} />,
    },{
      path : '/watch',
      element : <SmartWatch/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
