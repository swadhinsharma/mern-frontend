import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Phonenav from '../../components/Phonenav';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/Navbar';
import Cart from '../Cartpage/Cart';
import UnderNav from '../../components/UnderNav/UnderNav';

function Api({data, cart ,setCart}) {

  const addToCart = (id, price, discription, name,img) => {
    const obj = {
      id, price, discription, name,img
    }
    setCart([...cart, obj]);
    if(localStorage.getItem('auth-token')){
      fetch('https://mernapp-tt2l.onrender.com/cartData',{
        method:"POST",
      headers:{
        Accept: 'application/form-data',
        "auth-token": `${localStorage.getItem('auth-token')}`,
         "content-Type": 'application/json'
      },
      body:JSON.stringify({'itemId':id})
      
    })
    .then((response)=>response.json())
    .then((data)=> console.log(data));
    }
    toast.success('🦄 Added to cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
  }
 

  return (
    <div>
<ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
<Navbar cart = {cart}/>
<UnderNav/>
<Phonenav/>
{/* <Cart cart={cart} setCart={setCart} /> */}
      <h1>Samsung</h1>
    <div id='samsung' className="container-fluide" >
      <div className="row g-2 ">
        {data.filter (item => item.discount == 10)
        .map(item => (
          <div key={item._id} className="col-6 d-flex justify-content-center align-items-center col-md-6 col-lg-3">
            <div className="card" style={{ width: '18rem' }}>
            <Link to={`/product/${item.id}`}>
              <img src={item.img} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#footer" className="btn btn-primary mx-2">{item.price}</a>
                <button onClick={()=>addToCart(item.id, item.price, item.discription, item.name,item.img)} className='btn btn-warning'>Add to cart</button>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
     

     <h1>Mi</h1>
    <div className="container" id='Mi'>
      <div className="row g-2">
        {data.filter (item => item.discount == 11)
        .map(item => (
          <div key={item._id} className="col-12 col-md-4">
            <div className="card" style={{ width: '18rem' }}>
              <Link to={`/product/${item.id}`}>
              <img src={item.img} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary">{item.price}</a>
                <Link className='btn btn-warning' to = "">Add to cart</Link>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
    </div>
  );
};

export default Api;
