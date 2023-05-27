import { useEffect, useState } from "react";
import "./App.css";
import ProductForm from "./Components/ProductForm";
import Product from "./Components/Product";
import Pagination from "./Components/Pagination";

const getData = async (page) => {
  try {
    let data = await fetch(
      `http://localhost:3000/products?_page=${page}&_limit=2`
    );
    let res = data.headers.get("X-Total-Count");
    data = await data.json();
    console.log(data);
    return { totalPage: Number(res), content: data };
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const handleFormSubmit = (formState) => {
    setLoading(true);
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then(() => {
        fetchAndUpdateData(page);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  const fetchAndUpdateData = async (page) => {
    setLoading(true);
    try {
      let res = await getData(page);
      setProducts(res.content);
      setTotalCount(Number(res.totalPage));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
        <ProductForm handleFormSubmit={handleFormSubmit} />
      )}
      <h1>Products</h1>
      <div className="product-list-container">
        {products.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
      <div>
        <Pagination totalCount={totalCount} page={page} setPage={setPage} />
      </div>
    </>
  );
}

export default App;
