import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch('');
  };

  return (
    <div>
      <header>
        <div className="nav-bar">
          <div className="brand-container">
            <Link to="/" className="brand text-white decoration-none">
              E-cart
            </Link>
          </div>
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-bar">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search Products"
              />
              <button type="submit" className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="user-cart-container">
            {localStorage.getItem('auth-token') ? (
              <button onClick={() => {localStorage.removeItem('auth-token'); localStorage.removeItem('user-email'); window.location.replace('/')}}>
                Logout
              </button>
            ) : (
              <Link to="/register" className="btn btn-danger">
                Login
              </Link>
            )}
            <Link to={'/cart'} className="cart">
              <button type="button" className="btn btn-primary position-relative">
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart && cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        </div>

       
      </header>
    </div>
  );
};

export default Navbar;
