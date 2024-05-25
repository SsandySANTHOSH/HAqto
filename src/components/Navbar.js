import React from 'react'
import logo from "../assets/logo.png"
import "bootstrap/dist/css/bootstrap.css"
function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt='' className='logo' />

        <div className='search-box'>
            <input  className='input-lg' type='text' placeholder='search for Event,Movies'/>
            <img src='' alt='' />
        </div>

        <div className='content'>
       <a href='#'>chennai</a>
       <select >
       </select>
       </div>
        <div className=' btn btn-primary'>
        <button>Sign in</button>
        <i class="bi bi-justify"></i>
        </div>
    </div>
  )
}

export default Navbar