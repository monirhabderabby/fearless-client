import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ProductCard.css'

const ProductCard = ({product}) => {
    return (
        <div className='col-lg-3'>
            <div className='product'>
            <img src={product.image} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{product.name}</p>
                <p>Price: ${product.price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
        </div>
    );
};

export default ProductCard;