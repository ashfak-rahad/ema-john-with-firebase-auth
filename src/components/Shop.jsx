import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
    const[products,setProducts] =useState([]);
    useEffect (()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className=' grid grid-cols-4 gap-9 '>
            <div className='col-span-3 grid grid-cols-3 gap-5'>
            {
              products.map(product => <Product
              key={product.id}
              product={product}></Product>)
            }
            </div>
            <div className='col-span-1'>Order Summary</div>
        </div>
    );
};

export default Shop;