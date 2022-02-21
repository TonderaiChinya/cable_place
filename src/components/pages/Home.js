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
                    <figure>
                    <figure className='home-content-pic-wrap' data-category={props.label}>
                        <img src="" alt=''
                        className="home__content__img"/>
                    </figure>
                    </figure>
                </div>
            </section>
            {/* <Cards /> */}
        </>
    )
}

export default Home;