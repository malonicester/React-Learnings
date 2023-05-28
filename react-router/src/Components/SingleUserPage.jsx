import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
const getData = async (id) => {
  let data = await fetch(`https://reqres.in/api/users/${id}`);
  data = await data.json();
  return data;
};

let data = {
  data: {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

const SingleUserPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let params = useParams();
//   console.log(params);
  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let fetchedData = await getData(params.user_id);
      setData(fetchedData); 
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
        <div style={{ margin: "30px", border: "1px solid black" }}>
          <img src={data?.data?.avatar} alt="" />
          <h1>{data.data?.id}</h1>
          <h1>{data.data?.email}</h1>
          <h1>{data.data?.first_name+" "+data.data?.last_name}</h1>
          <div>
            <p>{data.support?.url}</p>
            <p>{data.support?.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleUserPage;
