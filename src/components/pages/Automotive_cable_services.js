import React from 'react';
import '../../App.css';
import Pages from './PagesContent';
import "../pages/Products"
import ProductsItem from '../pages/ProductsItem';
import { Button } from '../Button';


function Automotive_cable_services () {
  return (
      <>
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
            <div className='products'>
                <h1>
                    Check out our Automotive Cable Products
                </h1>
                {/* <p>Our products ranges from clutch cables, speedo cables, 
                accelerator cables, gear cables hand brake cables, tacho, 
                push/pull cables, window mechanisms cables, balustrade 
                cables & components.</p> */}
                <div className="page__devider"></div>
                <div className="products__container">
                    
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/cables/1-100.jpg"
                    label='Automotive Cables'
                    />
                    <ProductsItem 
                    src="images/products/cables/12-100.jpg"
                    label="Automotive Cables"
                    
                    />
                    <ProductsItem 
                    src="images/products/cables/14-100.jpg"
                    label="Automotive Cables"
                    />
                    <ProductsItem 
                    src="images/products/cables/balustrade_cables_or_wire_ropes.png"
                    label="Automotive Cables"
                    />
                    <ProductsItem 
                    src="images/products/cables/cable_1.png"
                    label="Automotive Cables"
                    />                   
                </ul>
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/cables/cable_2.png"
                    label='Automotive Cables'
                    />
                    <ProductsItem 
                    src="images/products/cables/cable_3.png"
                    label="Automotive Cables"
                    
                    />
                    <ProductsItem 
                    src="images/products/cables/cable_4.png"
                    label="Automotive Cables"
                    />
                    <ProductsItem 
                    src="images/products/cables/clutch_and_brake_cables.png"
                    label="Automotive Cables"
                    />
                    <ProductsItem 
                    src="images/products/cables/tautliner_locking_cables.png"
                    label="Automotive Cables"
                    />                   
                </ul>
                
                
                </div>
                <div className="page__devider"></div>

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
        </div>
      </>
  )
}

export default Automotive_cable_services;