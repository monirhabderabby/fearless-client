import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://monirhabderabby.github.io/shoe-api/Shoe-API.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='row'>
            {
                products.map(product=> <ProductCard product={product} key={product.id}></ProductCard>)
            }
        </div>
    );
};

export default Products;