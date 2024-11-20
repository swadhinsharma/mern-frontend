import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Productdetail = ({ data }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Check if data is available before trying to find the product
    // console.log(data)
    if (data) {
      const foundProduct = data.find(item => item.id === id);
    //   console.log(foundProduct)
      setProduct(foundProduct);
    }
  }, [data, id]);


  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="row d-flex justify-content-center text-center ">
        <div className="col-12 col-md-6 col-l-6">
        <img src={product.img} alt={product.name} />
        </div>
        <div className="col-12 col-md-6  col-md-6 d-flex justify-content-center align-items-center ">
            <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div>       
            <Link to="" className='btn btn-primary mx-3'>{product.price}</Link>
            <Link className='btn btn-warning'>Add to cart</Link>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
