import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import UnderNav from '../UnderNav/UnderNav';


const SmartWatch = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Make a GET request to the /api endpoint
      axios.get('https://mernapp-tt2l.onrender.com/watch') // Assuming your Express server is running on port 3001
        .then(response => {
          // Set the fetched data in the state
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
    <>
    <Navbar/>
    <UnderNav/>
    <br />  
      <div id='samsung' className="container-fluide" >
      <div className="row g-2 ">
        {data.map(item => (
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
    </>
  )
}

export default SmartWatch
