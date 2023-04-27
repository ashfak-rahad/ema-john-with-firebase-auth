import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
    const[products,setProducts] =useState([]);
    const [cart,setCart]=useState([]);
    useEffect (()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[]);


    const handleAddToCart =(product)=>{
        // setCart(product)
        const newCart =[...cart,product];
        setCart(newCart);
    }

    return (
        <div className=' grid lg:grid-cols-4   gap-9 '>
            <div className='col-span-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5'>
            {
              products.map(product => <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}></Product>)
            }
            </div>
            <div className='col-span-1 sticky'>
                <h3>Order Summary</h3>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;