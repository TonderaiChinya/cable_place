import React from 'react';
import '../../App.css';
import Pages from './PagesContent';


function MotorService () {
  return (
      <>
        <Pages
        src="images/big-background.jpg"
        title="Motor Vehicle Repairing & Servicing"
        text="At Cable Place, we also repair and service motor vehicles, from mechanical problems to 
        auto electrical problems"
        info={
          <ul>
            <li>
            We warranty our work against any defect 
            or workmanship and offer 100% satisfaction for our work.
              <p>
              Whether you’ve already bought a brand-new TV that needs 
              a professional installation or want recommendations on 
              how to create a state-of-the-art home theatre, Viewsat 
              has the expertise to assist. We can install any brand 
              and any size TV with ease.
              </p>
              <br/>
              <p>
              In addition to TV wall mounting, we also provide sound 
              bar installation to complete your home entertainment 
              set-up. From tuning your new TV and optimising your 
              sound system to ensuring your home theatre is laid out 
              in a comfortable way. 
              </p>
            </li>
          </ul>
        }
        />
      </>
  )
}

export default MotorService;