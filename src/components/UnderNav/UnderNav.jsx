import React, { useState } from 'react'
import './underNav.css'

const UnderNav = () => {
    const [dropdown, setDropdown] = useState(false);

    const clickHandle = () => {
        setDropdown(!dropdown);
    };


    return (
        <>
            <div className="containe-fluide p-2" style={{ backgroundColor: "#dcdcdc" }}>
                <div className="container" style={{paddingTop:"10px"}} >
                    <div className="row d-flex justify-content-center" >
                        <div className="col-4 d-flex justify-content-center">
                            <div className="button-main">
                                <button className='dropdown-toggle' onClick={clickHandle}>All Departments</button>
                                {dropdown && (
                                    <ul className="drop bg-light " >
                                        <li><a class="dropdown-item m-2" href="/">All Mobile</a></li>
                                        <li><a class="dropdown-item m-2" href="/iphone">Iphone</a></li>
                                        <li><a class="dropdown-item m-2" href="/iphone">Phone Cover</a></li>
                                        <li><a class="dropdown-item m-2" href="/iphone">Smart Watch</a></li>
                                        <li><a class="dropdown-item m-2" href="/iphone">HeadPhone</a></li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="col-4">
                            <ul className='d-flex justify-content-center gap-4 second-part' style={{ listStyleType: 'none' }}>
                                <li><a href="/" style={{textDecoration:"none", color:'black'}}>Home</a></li>
                                <li><a href="/api" style={{textDecoration:"none", color:'black'}}>Shop</a></li>
                                <li className='d-flex'><img src=" https://cdn-icons-png.flaticon.com/512/545/545245.png " width="25" height="25" alt title class="img-small"/><a href="/iphone" style={{textDecoration:"none", color:'black'}}>CellPhone</a></li>
                                <li className='d-flex'><img src=" https://cdn-icons-png.flaticon.com/512/4836/4836809.png " width="25" height="25" alt title class="img-small"/><a href="/watch" style={{textDecoration:"none", color:'black'}}>SmartWatch</a></li>
                                <li><a href="/" style={{textDecoration:"none", color:'black'}}>Blog</a></li>
                                <li><a href="/" style={{textDecoration:"none", color:'black'}}>Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <h5>super discount</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnderNav
