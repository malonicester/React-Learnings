import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

function reducerCallback(state, action) {
    switch (action.type) {
        case "GET_PRDOUCT_REQUEST": {
            return { ...state, loading: true, error: false }
        }
        case "GET_PRODUCT_SUCCESSFUL": {
            return { ...state, loading: false, error: false, data: action.payload };
        }
        case "GET_PRODUCT_FAILURE": {
            return { ...state, loading: false, error: true };
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    loading: true,
    error: true,
    data: null
}


const getProducts = () => {
    return axios.get(`http://localhost:3001/countries`);
}



const Products = () => {
    const [state, dispatch] = useReducer(reducerCallback, initialState);

    useEffect(() => {

        dispatch({ type: "GET_PRDOUCT_REQUEST" });

        getProducts().then((res) => {
            console.log(res);
            dispatch({ type: "GET_PRODUCT_SUCCESSFUL", payload: res.data });

        }).catch((err) => dispatch({ type: "GET_PRODUCT_FAILURE" }));
        console.log(state);

    }, []);

    if (state.loading) return <h1>Loading...</h1>
    if (state.error) return <h1>Error...</h1>
    return (
        <>

            {state.data?.map((item) => <h3 key={item.id}>{item.country}</h3>)}
        </>
    )
}

export default Products;