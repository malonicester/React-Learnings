import './Loading.css'
import {Circles} from 'react-loader-spinner'
export default function Loading() {
    return (
        <>
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </>
    )
}