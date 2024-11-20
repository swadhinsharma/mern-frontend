import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./phoneslide.css";

const Phoneslider = ({ data }) => {
  const [iphonePhones, setIphonePhones] = useState([]);
  const [androidPhones, setAndroidPhones] = useState([]);
  const [currentPhone, setCurrentPhone] = useState(null);
  const [showMoreIphone, setShowMoreIphone] = useState(false);
  const [showMoreAndroid, setShowMoreAndroid] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (data && data.length > 0) {
      // Filter and categorize the data into two arrays based on type
      const iphoneData = data.filter(phone => phone.type === 'iPhone');
      const androidData = data.filter(phone => phone.type === 'Android');
      
      // Set the data for iPhone and Android
      setIphonePhones(iphoneData);
      setAndroidPhones(androidData);

      // Set the first phone from iPhone category as the current phone by default
      setCurrentPhone(iphoneData.length > 0 ? iphoneData[0] : null);
    }
  }, [data]);

  const handlePhoneChange = (newPhone, type) => {
    setCurrentPhone(newPhone);
  };

  const handleShowMore = (type) => {
    if (type === 'iphone') {
      setShowMoreIphone(true);
      navigate('/iphone'); // Navigate to /iphone route when clicking "Show More" in iPhone category
    } else if (type === 'android') {
      setShowMoreAndroid(true);
      navigate('/api'); // Navigate to /android route when clicking "Show More" in Android category
    }
  };

  return (
    <div className="phone-slider">
      <div className="d-flex justify-content-center mb-3">
        <button className={`btn mx-3 ${currentPhone && currentPhone.type === 'iPhone' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handlePhoneChange(iphonePhones.length > 0 ? iphonePhones[0] : null, 'iphone')}><i className="fa-brands fa-apple"></i> &nbsp;iPhone</button>
        <button className={`btn ${currentPhone && currentPhone.type === 'Android' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handlePhoneChange(androidPhones.length > 0 ? androidPhones[0] : null, 'android')}><i className="fa-brands fa-android"></i> &nbsp;Android</button>
      </div>
      <div className="phone-content">
        {currentPhone && (
          <div className="row ">
            {currentPhone.type === 'iPhone' ? ( // If current phone is iPhone
              iphonePhones.slice(0, showMoreIphone ? iphonePhones.length : 4).map((phone, index) => (
                <div key={index} className=" col-6 col-md-6 mb-3 d-flex justify-content-center ">
                  <div className="card" style={{ width: '80%' }}>
                    <div className="row  g-0">
                      <div className="col-md-4 ">
                        <img src={phone.img} className="card-img-top" alt={phone.name} style={{ maxHeight: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{phone.name}</h5>
                          <p className="card-text">{phone.description}</p>
                          <p className="card-text"><small className="text-muted">{phone.price}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              androidPhones.slice(0, showMoreAndroid ? androidPhones.length : 4).map((phone, index) => ( // If current phone is Android
                <div key={index} className="col-6 col-md-6 mb-3 d-flex justify-content-center">
                  <div className="card" style={{ width: '80%' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={phone.img} className="card-img-top" alt={phone.name} style={{ maxHeight: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{phone.name}</h5>
                          <p className="card-text">{phone.description}</p>
                          <p className="card-text"><small className="text-muted">{phone.price}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        <div className="d-flex justify-content-center mt-3">
          {currentPhone && currentPhone.type === 'iPhone' && !showMoreIphone && (
            <button className="btn btn-primary" onClick={() => handleShowMore('iphone')}>Show More</button>
          )}
          {currentPhone && currentPhone.type === 'Android' && !showMoreAndroid && (
            <button className="btn btn-primary" onClick={() => handleShowMore('android')}>Show More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phoneslider;
