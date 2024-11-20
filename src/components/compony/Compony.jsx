import React from 'react'

const Compony = () => {
  return (
    <>
     <div className="container-fluide">
        <hr />
        <marquee behavior="alternate" direction="left" >
           <div className="componies d-flex " style={{gap : "50px"}}>
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo-768x432.png" alt="vivo" />
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2-500x281.png" alt="samsung" />
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png" alt="iphone" />
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/768px-Xiaomi_logo_%282021-%29.svg.png" alt="mi" />
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://logowik.com/content/uploads/images/oneplus-new8781.jpg" alt="OnePlus" />
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://logowik.com/content/uploads/images/oppo.jpg" alt="oppo" />
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Realme_logo.png/1200px-Realme_logo.png" alt="realme" />
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://1000logos.net/wp-content/uploads/2017/04/Motorola-Logo-768x432.png" alt="motrola" />
           <img style={{maxHeight:"100px", maxWidth:"300px",  }} src="https://logowik.com/content/uploads/images/nokia-2023-new4380.logowik.com.webp" alt="Nokia" />


           </div>
        </marquee>
        <hr />
     </div>
    </>
  )
}

export default Compony
