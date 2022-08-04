import React from 'react';
import './Footer.css';
// import banner from 'images/banner.png'
import logo3 from "../logo3.png"
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> 
      <figure>
        <img src='images/banner.png' className="banner"/>
      </figure>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Quik Links</h2>
            <Link to='/automotive_cable_services'>Automotive Cable Services</Link>
            <Link to='/balustrade_wire_rope_services'>Balustrade Services</Link>
            <Link to='/window_mechanism_repair'>Window Mechanism</Link>
            <Link to='/motor_vehicle_repair_and_servicing'>Motor Vehicle Servicing</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Remote Assist</Link>
            <Link to='/'>Projects</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Products</h2>
            <Link to='/'>DStv Accessories</Link>
            <Link to='/'>CCTVs</Link>
            <Link to='/'>Wall Mounts</Link>
            <Link to='/'>Alarm Systems</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a target='_blank' href='https://www.instagram.com/viewsat4/'>Instagram</a>
            <a target='_blank' href='https://www.facebook.com/Viewsat-106814204753607/'>Facebook</a>
            <a target='_blank' href='https://wa.me/c/27747601637'>Whatsapp</a>
            <a target='_blank' href='https://twitter.com/Viewsat4/'>Twitter</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          {/* <div class='footer-logo'>
            <Link to='/' >
              <img src={logo3} className="social-logo" alt="logo" />
            </Link>
          </div> */}
          <small className='website-rights'>CABLE PLACE © 2021 | All Rights Reserved | Developed by : <a href='https://www.comptecheng.co.za'className='author' target='_blank'>Comptech Engineering</a></small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/Cable-Place-106114795084582/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/cable_place/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link whatsapp'
              href='https://wa.me/c/27212850471 '
              target='_blank'
              aria-label='Whatsapp'
            >
              <i className="fab fa-whatsapp" />
            </a>
            
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;