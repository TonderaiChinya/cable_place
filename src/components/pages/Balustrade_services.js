import React from 'react';
import '../../App.css';
import Pages from './PagesContent';
import "../pages/Products"
import ProductsItem from '../pages/ProductsItem';
import { Button } from '../Button';

function BalustradeServices () {
  return (
      <>
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
              <div className='products'>
                <h1>
                    Here Are Some Of Our Recent Balustrade Projects And Products We Supply
                </h1>
                {/* <p>Our products ranges from clutch cables, speedo cables, 
                accelerator cables, gear cables hand brake cables, tacho, 
                push/pull cables, window mechanisms cables, balustrade 
                cables & components.</p> */}
                <div className="page__devider"></div>
                <div className="products__container">
                    
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/balustrade/2-100.jpg"
                    label='Balustrade wire rope '
                    />
                    <ProductsItem 
                    src="images/products/balustrade/3-100.jpg"
                    label="Balustrade wire rope"
                    
                    />
                    <ProductsItem 
                    src="images/products/balustrade/4-100.jpg"
                    label="Balustrade wire rope"
                    />
                    <ProductsItem 
                    src="images/products/balustrade/6-100.jpg"
                    label="Balustrade wire rope"
                    />
                    <ProductsItem 
                    src="images/products/balustrade/5-100.jpg"
                    label="Balustrade wire rope"
                    />                   
                </ul>
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/balustrade/15-100.jpg"
                    label='Balustrade wire rope'
                    />
                    <ProductsItem 
                    src="images/products/balustrade/16-100.jpg"
                    label="Balustrade wire rope"
                    
                    />
                    <ProductsItem 
                    src="images/products/balustrade/18-100.jpg"
                    label="Balustrade wire rope"
                    />
                    <ProductsItem 
                    src="images/products/balustrade/19-100.jpg"
                    label="Balustrade wire rope"
                    />                   
                </ul>
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/fittings_and_components/7-100.jpg"
                    label='Balustrade wire rope '
                    />
                    <ProductsItem 
                    src="images/products/fittings_and_components/8-100.jpg"
                    label="Balustrade wire rope"
                    
                    />
                    <ProductsItem 
                    src="images/products/fittings_and_components/9-100.jpg"
                    label="Balustrade wire rope"
                    />
                    <ProductsItem 
                    src="images/products/fittings_and_components/10-100.jpg"
                    label="Balustrade wire rope"
                    />
                    <ProductsItem 
                    src="images/products/fittings_and_components/11-100.jpg"
                    label="Balustrade wire rope"
                    />                   
                </ul>
                <ul className="products__items">
                    <ProductsItem 
                    src="images/products/fittings_and_components/13-100.jpg"
                    label='Balustrade wire rope '
                    />
                    <ProductsItem 
                    src="images/products/fittings_and_components/17-100.jpg"
                    label="Balustrade wire rope"
                    
                    />
                    <ProductsItem 
                    src="images/products/fittings_and_components/aluminium_ferrule.png"
                    label="Balustrade wire rope"
                    />
                    <ProductsItem 
                    src="images/products/fittings_and_components/carbon_steel_hooks.png"
                    label="Balustrade wire rope"
                    />
                    <ProductsItem 
                    src="images/products/fittings_and_components/copper_ferrules.png"
                    label="Balustrade wire rope"
                    /> 
                    <ProductsItem 
                    src="images/products/fittings_and_components/Fittings_and_components.png"
                    label="Balustrade wire rope"
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

export default BalustradeServices;
