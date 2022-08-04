import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

function Home (props) {
    return (
        <>
            <HeroSection />
            <section className='maxContain home-content'>
                <div>
                    <figure className='home-content-pic-wrap' data-category={props.label}>
                        <img src="" alt=''
                        className="home__content__img"/>
                    </figure>
                </div>
            </section>
            <Cards />
            <section className='maxContain why-choose-us'>
                <h2>Why We Are Trusted By Many</h2>
                <div className='why-us-container'>
                    <div className='why-us-item'>
                    <i className="fa-solid fa-handshake"></i>
                        <p>something to say</p>
                    </div>
                    <div className='why-us-item'>
                        <i></i>
                        <p>something to say</p>
                    </div>
                    <div className='why-us-item'>
                        <i></i>
                        <p>something to say</p>
                    </div>
                </div>

            </section>
            <section className='maxContain reviews'>
                <h2>Here Is What Some Of Our Clients Have To Say</h2>
                
            </section>
        </>
    )
}

export default Home;