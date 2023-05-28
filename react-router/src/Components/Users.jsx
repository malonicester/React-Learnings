import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import "./styles.css";

const getData = async (page) => {
  let data = await fetch(`https://reqres.in/api/users?page=${page}`);
  data = await data.json();
  return data;
};

function Users() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    Number(searchParams.get("page")) === 0 || searchParams.get("page") ===NaN
      ? 1
      : Number(searchParams.get("page"))
  );
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();

  console.log(searchParams.get("page"));
  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let data = await getData(page);
      setTotalCount(data.total_pages);
      console.log(data.total_pages);
      setData(data.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndUpdateData();
    setSearchParams({ page: page });
  }, [page]);



  console.log(searchParams.get("page"));
  return (
    <>
      <button onClick={() => navigate(`/`)}>
        Go To Home Page By Use Navigate
      </button>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error.....</h1>
        ) : (
          <div className="users-list-container">
            {data?.map((user) => {
              return (
                <div key={user.id}>
                  <img src={user.avatar} alt={user.first_name} />
                  <h1>{user.first_name + " " + user.last_name}</h1>
                  <h2>{user.email}</h2>
                  <Link to={`/users/${user.id}`}>More Info</Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((page) => page - 1)}
        >
          Previous
        </button>
        <button disabled>{page}</button>
        <button
          disabled={page === totalCount}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Users;
