import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const getData = async (page) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
  );
  return await res.json();
};

const Products = () => {
  const [data, setData] = useState([]);
  const [count, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")));


  const fetchAndUpdate = async () => {
    setLoading(true);
    try {
      let data = await getData(page);
      setTotalCount(data.total);
      setData(data.products);
      console.log(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAndUpdate();
    setSearchParams({ page: page })
  }, [page]);
  console.log("Page Param ", searchParams.get("page"));
  return (
    <>
      {loading ? <h1>Loading...</h1> : error ? <h1>Something Went Wrong...</h1> : <div
        style={{
          width: "80%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr",
          gap: "20px",
        }}
      >
        {data?.map((item) => (
          <div key={item.id}>
            <img width="100%" src={item.thumbnail} alt={item.id} />
            <h2>{item.title}</h2>
            <h3>Brand:- {item.brand}</h3>
            <h3>Price:- {item.price}</h3>
            <h3>DiscountPercentage:- {item.discountPercentage}</h3>
            <Link to={`/products/${item.id}`}>More Info</Link>
          </div>
        ))
        }
      </div>
      }
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <button
          disabled={page === 1}
          onClick={() => setPage((page) => page - 1)}
        >
          Previous
        </button>
        <button disabled>{page}</button>
        <button disabled={page == Math.ceil(count / 10)} onClick={() => setPage((page) => page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Products;
