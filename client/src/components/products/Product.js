import React from 'react';

export const Product = ({product}) =>{

    return(
        <div className="product">
            <h2>{product.name}</h2>
            <p>£{product.price}</p>
        </div>
    )
}