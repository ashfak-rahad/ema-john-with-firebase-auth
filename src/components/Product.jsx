import React from "react";

const Product = (props) => {
  const { img, name, seller, price,stock,shipping,ratings } = props.product;
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
      
      <div className="card w-96 bg-base-100 ">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price:${price}</p>
          <p>Manufacturer:{seller}</p>
          <p>Rating:{ratings}</p>
          <p>Shipping:{shipping}</p>
          <p>Stock:{stock}</p>

          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
