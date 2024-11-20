import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom';


const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axios.post('https://mernapp-tt2l.onrender.com/login', { email, password })
      .then(result => {
        const { user, auth } = result.data; 
        if (user && auth) {
          localStorage.setItem('auth-token', auth);
          localStorage.setItem('user-email', email);
          navigate("/")
        } else {
          alert(result.data || 'Login failed'); 
        }
      })
      .catch(err => {
        console.error(err);
        alert('Incorrect Email or Password');
      });
  };

  const submitRegister = (e) => {
    e.preventDefault();
    axios.post('https://mernapp-tt2l.onrender.com/register', { name, email, password })
      .then(result => {
        console.log(result);
        setIsLogin(true)
      })
      .catch(err => {
        console.error(err);
        alert('Registration failed');
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src="https://sugermint.com/wp-content/uploads/2022/12/Electronics-Business.jpg" alt="Registration" className="auth-image" />
        <h3>{isLogin ? 'Log In' : 'Register'}</h3>
        <form onSubmit={!isLogin ? submitRegister : submitLogin} action=''>
          {!isLogin && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='auth-input'
              type='text'
              placeholder='Name'
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='auth-input'
            type='email'
            placeholder='Email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='auth-input'
            type='password'
            placeholder='Password'
          />
          <button className='auth-button'>{isLogin ? 'Log In' : 'Register'}</button>
        </form>
        <span className='auth-toggle' onClick={loginHandler}>{isLogin ? 'Sign Up' : 'Log In'}</span>
      </div>
    </div>
  );
};

export default AuthForm;
