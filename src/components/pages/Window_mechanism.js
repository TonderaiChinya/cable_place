import React from 'react';
import '../../App.css';
import Pages from './PagesContent';
import "../pages/Products"
import ProductsItem from '../pages/ProductsItem';
import { Button } from '../Button';


function WindowMechanism () {
  return (
      <>
        <Pages
          src="images/window_mechanism.png"
          title="Window Mechanism Repair"
          text="Are you having problems with your window 
          mechanism? Bring your Window mechanism to us and we will fix it while you
          wait."
          info={
            <ul>
                <li>
                Same Day Service | Electric Window Repairs | Quality Products  
                  <p>Window mechanism repair specialists. 
                  We are able to repair and replace all types of 
                  electric and manual window winder mechanisms for all 
                  makes of vehicles. Bring the window mechanism with the
                   motor, and we will repair and replace it in no time.
                  <br></br>At Cable Place, we stock a wide range of 
                   components for window winder mechanisms for all makes 
                   of vehicle. We also repair your existing unit at a 
                   very low cost compared to purchasing a complete 
                   replacement mechanism from the agents.
                   <br></br>Window winder mechanisms are re-cabled and 
                   tensioned in our factory to manufacturers 
                   specifications. Not only do we replace the cables, 
                   but also all damaged plastic components including 
                   nylon wheels and slides.</p>             
                </li>
            </ul>
          }
      />     
      <div className='products'>
                <h1>
                    Recent Window Mechanism Repairs
                </h1>
                {/* <p>Our products ranges from clutch cables, speedo cables, 
                accelerator cables, gear cables hand brake cables, tacho, 
                push/pull cables, window mechanisms cables, balustrade 
                cables & components.</p> */}
                <div className="page__devider"></div>
                <div className="products__container">
                    
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/window_mechanism/1.png"
                    label='Window Mechanism Repairs'
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/2.png"
                    label="Window Mechanism Repairs"
                    
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/3.png"
                    label="Window Mechanism Repairs"
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/4.png"
                    label="Window Mechanism Repairs"
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/5.png"
                    label="Window Mechanism Repairs"
                    />                   
                </ul>
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/window_mechanism/6.png"
                    label='Window Mechanism Repairs'
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/7.png"
                    label="Window Mechanism Repairs"
                    
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/8.png"
                    label="Window Mechanism Repairs"
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/9.png"
                    label="Window Mechanism Repairs"
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/10.png"
                    label="Window Mechanism Repairs"
                    />                   
                </ul>
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/window_mechanism/11.png"
                    label='Window Mechanism Repairs'
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/12.png"
                    label="Window Mechanism Repairs"
                    
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/window_mechanism_2.png"
                    label="Window Mechanism Repairs"
                    />
                    <ProductsItem 
                    src="images/products/window_mechanism/window_mechanism.png"
                    label="Window Mechanism Repairs"
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

export default WindowMechanism;