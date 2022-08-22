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
              For all your major and minor motor vehicles service, tire rotation, braking system maintenance, engine overhaul,
              clutch replacement, oil change and any other mechanical work, bring your car to us and we will do justice for your car. 
              </p>
              <br/>
              <p>
              When you book your car for major service with us, you also get free brake pad and hand brake checks. Our professional mechanical team will 
              advice you on the items that need attention and also recommend you where to get the best parts for your vehicle. Book your car for service today!
              </p>
            </li>
          </ul>
        }
        />
      </>
  )
}

export default MotorService;