import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Pages from './PagesContent';
import { Button } from '../Button'

function Services () {
    return (
        <>
            {/* <Cards /> */}
            <Pages
          src="images/clutch_and_brake_cables.png"
          title="Automotive Cable Repair & Manufacturing"
          text="Cable Place specializes in manufacturing and 
          repairing a wide range of Automotive Control Cables. 
          We specialize in clutch cables repair, hand brake 
          cables, bonnet cables, gear selector cables, 
          accelerator cables, speedo cables, and any other 
          automotive cables. Bring your old damage cable  to us and we will
          manufacture a new one or repair the old one for you.
              "
          info={
            <ul>
              <li>Clutch Cables</li>
              <li>Hand Brake Cables</li>
              <li>Accelerator / Throttle Cables</li>
              <li>Bonnet Cables</li>
              <li>Speedo Cables</li>
              <li>...and many more</li>
            </ul>
          }
        />
        <Pages
            src="images/balustrade_cables_or_wire_ropes.png"
            title="Balustrade Wire Rope Designing, Manufacturing & installation Services"
            text="At Cable Place, we are professionals when it comes to balustrade wire rope 
            designing, manufacturing and installations. We also supply fitting 
            components that suit your design needs.
                "
            info={
              <ul>
                <li>
                Balustrade Components & Fittings
                  <p>
                    copper and aluminium ferrules, thimbles, d/shackles, 
                    wire rope slings, turn buckles, clevis-pin, clevis-fork, 
                    wire rope clamp, carabiner hook, and many more...
                  </p>
                </li>
              </ul>
            }
          />
          <Pages
            src="images/window_mechanism.png"
            title="Window Mechanism Repair"
            text="Are you having problems with your window 
            mechanism? Bring your Window mechanism to us and we will fix it while you
            wait."
            info={
              <ul>
                  <li>
                    Electric Window Repairs                
                  </li>
                  <li>
                    Same Day Service
                  </li>
                  <li>
                  Quality Products
                  </li>
              </ul>
            }
          />

          <div className='action_button'>
            <div className='action_title'>
                <h4>Get Assistance From Our Professional Team Here</h4>
            </div>
            <Button 
                className='btns' 
                buttonStyle='btn--pages' 
                buttonSize='btn--large'
                path='/contact' 
            >
                CONTACT
            </Button>
                    
          </div>
        </>
    )
}

export default Services;