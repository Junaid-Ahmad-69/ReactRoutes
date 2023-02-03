import {useOutletContext, useParams} from "react-router-dom";
import Book1Page from "../Pages/Book1Page.jsx";
import Book2Page from "../Pages/Book2Page.jsx";

function Book() {
    const {id} = useParams();
    const {hello} =  useOutletContext();

    return (
        <>
            <h1>Book {id} {hello} </h1>
            {
                id == 1 ? <Book1Page/> : <Book2Page/>
            }
        </>
    );
}

export default Book;
