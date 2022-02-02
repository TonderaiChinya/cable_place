import React from 'react';
import '../../App.css';

function Contact () {
  return (
    <>
      <div className='contact'>
        {/* <figure>
          <img className='contact_img' src='./images/contact-bg.jpg' />
        </figure> */}
        <div className='contact_container'>
          <div className='contact_details left'>
            <h3 className='contact_heading'>GET IN TOUCH WITH US</h3>
            <p className='contact_info'>Get in touch with our team and see how we can work together. 
            Our team is ready for you.</p>
          </div>
          <div className="contact_details right">
           <ul>
              <li>
              +27 21 285 0471<i class="fas fa-mobile"></i>
              </li>
              <li>
              +27 61 487 5367<i class="fas fa-mobile"></i>
              </li>
              
              <li>
              info@cableplace.co.za<i class="far fa-envelope"></i>
              </li>
              <li>
              11c Fisher Avenue, Epping 1, Cape Town, South Africa<i class="fas fa-map-marked-alt"></i>
              </li>
           </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact;