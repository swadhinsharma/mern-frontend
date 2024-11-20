import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from 'mdb-react-ui-kit';

const Cart = ({ cart, setCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        if (!token) {
          // Handle unauthenticated user
          return;
        }
        const response = await fetch('https://mernapp-tt2l.onrender.com/getcart', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': token,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          // Handle error response
          console.error('Failed to fetch cart data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
        // Handle error
      }
    };

    fetchCartData();
  }, []);

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem('auth-token');
      if (!token) {
        // Handle unauthenticated user
        return;
      }

      const userEmail = localStorage.getItem('user-email'); // Get user email from local storage

      // Prepare data to send to backend
      const dataToSend = {
        userEmail: userEmail,
        cartItems: cartItems
      };

      // Send data to backend
      const response = await fetch('https://mernapp-tt2l.onrender.com/checkout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        // Clear the cart locally after successful checkout
        setCartItems([]);

        // Redirect to checkout page or handle response as needed

        // Clear cart data in the backend
        await fetch('https://mernapp-tt2l.onrender.com/clearcart', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': token,
            'Content-Type': 'application/json',
          }
        });

      } else {
        // Handle error response
        console.error('Failed to checkout:', response.statusText);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      // Handle error
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      const token = localStorage.getItem('auth-token');
      if (!token) {
        // Handle unauthenticated user
        return;
      }

      // Send request to remove item from cart
      const response = await axios.post('https://mernapp-tt2l.onrender.com/removefromcart', { itemId }, {
        headers: {
          'auth-token': token,
        },
      });
      console.log('done')

      if (response.status === 200) {
        // Reload cart data after successful removal
        setCartItems(cartItems.filter(item => item.id !== itemId));
      } else {
        // Handle error response
        console.error('Failed to remove item from cart:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
      // Handle error
    }
  };

  // Calculate total price of items in cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <div>
      <Navbar />
      <section className="h-100 gradient-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0">
                    Cart - {cartItems.length} items
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  {cartItems.length === 0 ? (
                    <>
                      <h3>Your cart is empty</h3>
                      <Link to="/api" className="btn btn-warning">
                        Go to Products
                      </Link>
                    </>
                  ) : (
                    cartItems.map((product, index) => (
                      <div key={index} className="mb-4">
                        <MDBRow>
                          <MDBCol lg="3" className="mb-4 mb-lg-0">
                            <MDBCardImage
                              src={product.img}
                              alt="Product Image"
                              fluid
                            />
                          </MDBCol>
                          <MDBCol lg="5" className="mb-4 mb-lg-0">
                            <p>
                              <strong>{product.name}</strong>
                            </p>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p> {/* Display price */}
                          </MDBCol>
                          <MDBCol lg="4" className="mb-4 mb-lg-0">
                            <div className="d-flex mb-4">
                              <MDBTooltip
                                wrapperProps={{ size: 'sm' }}
                                wrapperClass="me-1 mb-2"
                                title="Remove item"
                              >
                                <div onClick={() => {
                                  handleRemoveFromCart(product.id);
                                }}>
                                  <MDBIcon
                                    fas
                                    icon="trash"
                                    color="white"
                                  />
                                </div>
                              </MDBTooltip>


                              <MDBTooltip
                                wrapperProps={{ size: 'sm', color: 'danger' }}
                                wrapperClass="me-1 mb-2"
                                title="Move to the wish list"
                              >
                                <MDBIcon
                                  fas
                                  icon="heart"
                                  color="white"
                                />
                              </MDBTooltip>
                            </div>
                            <MDBInput
                              defaultValue={1}
                              min={0}
                              type="number"
                              label="Quantity"
                              className="w-50"
                            />
                          </MDBCol>
                        </MDBRow>
                      </div>
                    ))
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard className="mb-4">
                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Summary
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBTypography tag="p">
                    Total Items: {cartItems.length}
                  </MDBTypography>
                  <MDBTypography tag="p">
                    Total Price: ${totalPrice.toFixed(2)}
                  </MDBTypography>
                  <div className="d-grid">
                    <button className="btn btn-primary" onClick={handleCheckout}>
                      Go to Checkout
                    </button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Cart;
