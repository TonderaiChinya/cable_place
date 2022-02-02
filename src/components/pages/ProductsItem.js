import React from 'react'
import { Link } from 'react-router-dom';


function ProductsItem(props) {
    return (
        <>
            <li className='products__item'>
                <Link className='products__item__link'>
                    <figure className='products__item__pic-wrap' >
                        <img src={props.src} 
                        className="products__item__img"/>
                    </figure> 
                </Link>
            </li>
        </>
    )
}

export default ProductsItem;
