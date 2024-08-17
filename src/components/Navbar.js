import React, {useState} from 'react';
// import Link from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navBar">
        <div className="navbar-container">
            {/* <Link to='/' className='navbar-logo'> */}
                <a href="/"><i class="fa-solid fa-car">C-Wash</i></a>
            {/* </Link> */}
        </div>
    </nav>
    </>
  )
}

export default Navbar
