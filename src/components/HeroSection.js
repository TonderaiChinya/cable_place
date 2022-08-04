import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/viewsat_video.mp4" autoPlay loop muted /> */}
            <div className='maxContain'>
            <h1>Automotive Cable Manufacturing & Repairing Company In Cape Town, South Africa. </h1>
            
            <p>
            Your Leading Automotive Cable Manufacture & Repair Company. 
            We take pride in offering the latest technology and resources available 
            in our trade (Automotive Cable Manufacture & Repairs) to ensure your 
            experience with us is professional, personal, efficient and of the highest 
            quality at all times.
            </p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                path='/services'
                >
                    OUR SERVICES
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                path='/contact'
                >
                    CALL +27 21 285 0471
                </Button>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
