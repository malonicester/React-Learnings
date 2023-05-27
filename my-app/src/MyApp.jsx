import { useEffect, useState } from "react";
import Loading from "./Loading";

const getData = async (page) => {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
  data = await data.json();
  return data;
};

function MyApp() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetchAndUpdate(page);
  }, [page]);

  const handlePageChange = (val) => {
     setPage(page + val);
  }
  async function fetchAndUpdate(page) {
    setLoad(true);
    try {
      let data = await getData(page);
      console.log(data);
      setPosts(data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }
  if (load) {
    return <Loading />;
  }

  return (
    <>
      <button>Get Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        <button
          disabled={page === 1}
          onClick={()=>handlePageChange(-1)}
        >
          Previous
        </button>
        <button disabled>{page}</button>
        <button onClick={()=>handlePageChange(1)}>Next</button>
      </div>
    </>
  );
}
export default MyApp;
