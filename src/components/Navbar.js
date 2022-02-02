import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo3 from "../logo3.png"
import './Navbar.css';
import Dropdown from './Dropdown'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
        <div className='top-line'>
          
        </div>
        <div className='top-header'>
          
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
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Company <i className='fas fa-caret-down' />
              </Link>
              {/* {dropdown && <Dropdown/>} */}
            </li>
            <li className='nav-item' 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products & Services <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown/>}
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                F.A.Q
              </Link>
            </li>

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