import { useEffect, useReducer } from 'react'

const userReducer = (state, action) => {
    switch (action.type) {
        case "GET_USER_REQUEST": {
            return { ...state, loading: true, error: false, data: null };
        }
        case "GET_USER_SUCCESS": {
            return { ...state, loading: false, data: action.payload };
        }
        case "GET_USER_FAILURE": {
            return { ...state, loading: false, error: true };
        }
        default: {
            return state;
        }
    }
}
const intitalState = {
    loading: true,
    error: true,
    data: null
}
const Users = () => {
    const [state, dispatch] = useReducer(userReducer, intitalState);
    const getUsers = async () => {
        dispatch({ type: "GET_USER_REQUEST" });
        try {
            let data = await fetch("https://reqres.in/api/users");
            let res = await data.json();
            console.log(res);
            dispatch({ type: "GET_USER_SUCCESS", payload: res.data });
        }
        catch (error) {
            console.log(error);
            dispatch({ type: "GET_USER_FAILURE" });
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    if (state.loading) {
        return <h1>Loading...</h1>
    }
    if (state.error) {
        return <h1>Error...</h1>
    }
    console.log(state);
    return (
        <>
            {state.data?.map((item) => <h1 key={item.id}>{item.first_name}</h1>)}
            <button onClick={() => getUsers(dispatch)}>Fetch</button>
        </>
    )
}

export default Users;