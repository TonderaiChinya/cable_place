import React from 'react'
import './PagesContent.css'

function Pages(props) {
    return (
        <>
            <div className='page_wrapper maxContain'>
                <figure className='content_image_wrapper'>
                    <img width='100%' src={props.src} alt='Clutch Cable, 
                    Hand Brake Cable, Gear Selector Cable, Accelerator Cable, 
                    Balustrade Wire Rope, Window Mechanisms '
                        className="content__item__img"/>
                </figure>
                
                <div className='page__content'>
                        <h2 className='content__title'>{props.title}</h2>
                        <br></br>
                        <p className="content__item__text" >{props.info}</p> 
                        <br></br>
                        <p className="content__item__text" >{props.text}</p>          
                </div>  
            </div>
            <div className="page__devider"></div>
        </>
    )
}

export default Pages;
