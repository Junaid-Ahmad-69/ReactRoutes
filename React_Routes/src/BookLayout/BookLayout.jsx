import {Link, Outlet, useSearchParams,} from "react-router-dom";
import {Suspense, useTransition} from "react"

const BookLayout = () => {


    // const [isPending, startTransition] = useTransition();
    const [searchParams, setSearchParams] = useSearchParams({n: 3})
    const number = searchParams.get("n");


    return (
        <>
            <Link to="/books/1">Book 1 </Link>
            <br/>
            <Link to="/books/2">Book 2 </Link>
            <br/>
            <Link to="/books/2">Book {number} </Link>
            <br/>
            <Link to="new">NewsLetter </Link>
            <input type="number" value={number} onChange={e => setSearchParams({n: e.target.value})}/>
            <Outlet/>

        </>
    )
}

export default BookLayout
