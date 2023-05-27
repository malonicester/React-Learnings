import React, { useEffect, useState } from "react";

const productsData = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      const data = await productsData();
      setProducts(data);
      setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(true);
    }
  };
  useEffect(()=>{
    fetchAndUpdateData()    
},[]);

  return <>
       {loading ? <h1>Loading....</h1> : error? <h1>Something Went Wrong</h1> : 
        products.map((product)=>{
            return <p key={product.id}>{product.title}</p>
        })
       }
  </>;
}

export default Products;
