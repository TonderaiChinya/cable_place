import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"


function Cards() {
    return (
        <div className='cards maxContain'>
            <h2>
                The fastest growing Automotive 
                Cable Manufacturing, Reconditioning & Repairing 
                Company in Cape Town.
            </h2>
            <br></br>
            <p>
                We specialize in repairing & manufacturing of Clutch Cables, Hand Brake / Stop Cables, Gear Selector Cables, 
                Accelerator Cables, supply of Balustrade Wire Rope & fitting components, 
                Window Mechanisms repairs.
            </p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/cables.jpeg"
                        text="Repairing & manufacturing of Clutch Cables, Hand Brake Cables, 
                        Gear Selector Cables, Accelerator Cables...And many more."
                        label="Automotive Cable Services"
                        path="/automotive_cable_services"
                        />
                        <CardItem 
                        src="images/balustrade2.jpeg"
                        text="We design, manufacture and install stainless steel wire rope 
                        ballustrades."
                        label="Balustrade Services"
                        path="/balustrade_wire_rope_services"
                        />
                                              
                    </ul>
                    <ul className="cards__items">
                        
                        <CardItem 
                        src="images/window_mechanism.jpeg"
                        text="Do you have a broken window mechanism? Bring it 
                        to us for a quick fix."
                        label="Window Mechanism Repairs"
                        path="/window_mechanism_repair"
                        />  
                        <CardItem 
                        src="images/car.jpg"
                        text="At Cable Place, we also provide general motor vehicle mechanical 
                        repairs & servicing."
                        label="Motor Vehicle Repair & Servicing"
                        path="/motor_vehicle_repair_and_servicing"
                        />  
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
