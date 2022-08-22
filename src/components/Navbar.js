import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo3 from "../logo3.png"
import './Navbar.css';
// import Dropdown from './Dropdown'

function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if(window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if(window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  const showButton = () => {
    if (window.innerWidth < 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className='top-header'>
        <div className='maxContain'>
          <div className='quick-contact'>
            <p>021 285 0471 <span>info@cableplace.co.za</span></p>
          </div>
          <div className='header-social-icons'>
            <p>Follow Us</p>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/Cable-Place-106114795084582/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/cable_place/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
          </div>
        </div>
      </div>
      <nav className='navbar'>
        
        <div className='logo-container'>
          <Link to='/' className='logo' onClick={closeMobileMenu}>
            <img src={logo3} className="navbar-logo" alt="logo" />
          </Link>
        </div>
        <div className='navbar-container'>
          {/* <Link to='/' className='logo' onClick={closeMobileMenu}>
            <img src={logo3} className="navbar-logo" alt="logo" />
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item' 
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
            >
              <Link
                to='/automotive_cable_services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cables 
              </Link>
              {/* {dropdown && <Dropdown/>} */}
            </li>

            <li className='nav-item' >
              <Link
                to='/balustrade_wire_rope_services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Balustrades
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/window_mechanism_repair'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Window Mechanisms
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products & Services
              </Link>
            </li> */}

            <li>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* {button && <Button path='/contact' buttonStyle='btn--outline'>CONTACT</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;