import React from "react";
import "./Product.css";
function Product({ id, title, price,imageUrl }) {
  // console.log(id+" "+title+" "+price+" "+imageUrl);
  return (
    <>
      <div key={id}>
        <h4>{title}</h4>
        <p>{price}</p>
        <img width="300px" height="300px" src={imageUrl} alt="" />
      </div>
    </>
  );
}

export default Product;
