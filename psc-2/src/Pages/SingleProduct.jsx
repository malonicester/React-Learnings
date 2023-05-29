import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getData = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return await res.json();
};

const SingleProduct = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();
  const fetchAndUpdate = async () => {
    setLoading(true);
    try {
      let data = await getData(Number(params.product_id));
      setData(data);
      console.log(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAndUpdate();
  }, []);
  console.log(params.product_id);
  return <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
      {data.images?.map((img) => <img width="300px" height="300px" key={img} src={img} alt="" />)}
    </div>
    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
      <p>Category:- {data.category}</p>
      <h1>{data.title}</h1>
      <h2>Brand:- {data.brand}</h2>
      <div>
        <h3>Price:- Rs.{data.price}</h3>
        <h4>Discount:- {data.discountPercentage}%</h4>
        {data.stock < 5 ? <p style={{color:"red"}}>Only few Stocks Left Hurry!!</p> : ""}
      </div>
      <p style={{ fontWeight: '600' }}>{data.description}</p>
    </div>
  </div>;
};

export default SingleProduct;
