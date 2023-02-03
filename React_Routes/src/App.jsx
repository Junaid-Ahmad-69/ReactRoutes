import {Routes, Route, Link, Navigate, NavLink} from "react-router-dom";
import Home from "./Components/Home";
import NewsLetter from "./Components/NewLetter";
import Book from "./Components/Book";
import BookList from "./Components/BookList";
import ErrorPage from "./Components/ErrorPage.jsx";
import BookLayout from "./BookLayout/BookLayout.jsx";

export default () => {
    return (
        <>
            {/*<Routes location="/books">*/}
            {/*    <Route path="/books" element={<h1>Nested Routes</h1>}/>*/}
            {/*</Routes>*/}


            <nav>
                <ul>
                    <li>
                        <NavLink style={({isActive})=>{
                           return isActive ? {color:"red"} :  {}
                        }} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/books">Books</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>

                {/*Nested routes With same Path*/}
                <Route path="/books" element={<BookLayout/>}>
                    <Route index element={<BookList/>}/>
                    <Route path=":id" element={<Book/>}/>
                    <Route path="new" element={<NewsLetter/>}/>
                </Route>


                {/*Single Page Routes with same Path*/}
                {/*<Route path="/books" element={<BookList/>}/>*/}
                {/*<Route path="/books/:id" element={<Book/>}/>*/}
                {/*<Route path="/books/newsLetter" element={<NewsLetter />} />*/}

                <Route path="*" element={<ErrorPage/>}/>

                {/*<Route path="/contact" element={<Contact/>}/>*/}
                {/*<Route path="/about" element={<About/>}/>*/}
            </Routes>
        </>
    );
};
