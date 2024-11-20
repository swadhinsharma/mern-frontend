import React from 'react'
import Navbar from '../../components/Navbar'
import MySlider from '../../components/Slider'
import Phoneslider from '../../components/Phoneslider'
import Footer from '../../components/Footer'
import UnderNav from '../../components/UnderNav/UnderNav'
import Compony from '../../components/compony/Compony'
import WatchFirst from '../../components/OtherProduct/WatchFirst'



const First = ({data, cart}) => {
  return (
    <div>
      <Navbar cart={cart} />
      <UnderNav/>
      <MySlider/> 
      <br />
      <Phoneslider data = {data}/>
      <br />  
      <Compony/>
      <br />
      <WatchFirst/>
      <Footer/>
    </div>
  )
}

export default First
