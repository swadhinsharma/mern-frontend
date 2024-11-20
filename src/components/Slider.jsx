import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import "./slider.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  const [slider, setSlider] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Make a GET request to the /api endpoint
    axios.get('https://mernapp-tt2l.onrender.com/slider') // Assuming your Express server is running on port 3001
      .then(response => {
        // Set the fetched data in the state
        setSlider(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePrev = () => {
    sliderRef.current.slickPrev(); 
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); 
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className="carousel-slider">
        <div className="carousel-inner ">
          <Slider ref={sliderRef} {...settings}>
            {slider.map(item => (
              <div key={item._id} className="carousel-item active">
                 <div class="row ">
                    <div className="col-md-`12 col-12">
                        <img style={{width:"100%", maxHeight: "500px"}} src={item.image_url} alt="" />
                    </div>
                    {/* <div className="col-md-6 secand_box" col-12>
                        <div className="data_here">
                            <h1 className='description1'>{item.description}</h1>
                        </div>
                    </div> */}
              </div>
              </div>
            ))}
          </Slider>
          <div className="nav_next">
            <i class="fa-solid fa-chevron-left fa-2xl button_prev" onClick={handlePrev}></i>
            <i onClick={handleNext} className="fa-solid fa-angle-right fa-2xl  button_next" ></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySlider;
