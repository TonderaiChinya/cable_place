import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"


function Cards() {
    return (
        <div className='cards maxContain'>
            <h2>
            Cable Place is one of the fastest growing Automotive 
            Cable Manufacturing, Reconditioning & Repairing 
            Company in Cape Town.
            </h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/clutch_and_brake_cables.png"
                        text="Repairing & manufacturing of Clutch Cables, Hand Brake Cables, 
                        Gear Selector Cables, Accelerator Cables...And many more."
                        label="Automotive Cable Services"
                        path="/automotive_cable_services"
                        />
                        <CardItem 
                        src="images/balustrade_cables_or_wire_ropes.png"
                        text="We design, manufacture and install stainless steel wire rope 
                        ballustrades."
                        label="Balustrade Services"
                        path="/balustrade_wire_rope_services"
                        />
                                              
                    </ul>
                    <ul className="cards__items">
                        
                        <CardItem 
                        src="images/window_mechanism.png"
                        text="Do you have a broken window mechanism? Bring it 
                        to us for a quick fix."
                        label="Window Mechanism Repairs"
                        path="/window_mechanism_repair"
                        />  
                        <CardItem 
                        src="images/car.jpg"
                        text="At Cable Place, we also provide motor vehicle mechanical 
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
