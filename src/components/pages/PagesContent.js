import React from 'react'
import './PagesContent.css'

function Pages(props) {
    return (
        <>
        
            <div className='page_wrapper'>
                <div className='content__title'>
                    <h1>{props.title}</h1>
                    <div className="page__devider"></div>
                        <h5 className="content__item__text" >{props.text}</h5>
                    </div>
                <div className='page__content'>
                    <figure className='content_image_wrapper'>
                        <img width='100%' src={props.src} alt='Clutch Cable, 
                        Hand Brake Cable, Gear Selector Cable, Accelerator Cable, 
                        Balustrade Wire Rope, Window Mechanisms '
                            className="content__item__img"/>
                    </figure>
                    <div className="content__item__info">             
                        <p className="content__item__info__text" >{props.info}</p>
                    </div>
                </div>
                {/* <div className="page__devider"></div> */}
            </div>
    
        </>
    )
}

export default Pages;
