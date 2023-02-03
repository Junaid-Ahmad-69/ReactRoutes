import {Routes, Route, Link, Navigate, NavLink, Outlet} from "react-router-dom";
// import Home from "./Components/Home";
import NewsLetter from "./Components/NewLetter";
import Book from "./Components/Book";
import BookList from "./Components/BookList";
import ErrorPage from "./Components/ErrorPage.jsx";
import BookLayout from "./BookLayout/BookLayout.jsx";
import {lazy, Suspense} from "react";


const Home = lazy(() => import("./Components/Home"));


export default () => {
    return (
        <>
            <nav>
                <NavLink style={({isActive}) => {
                    return isActive ? {color: "red"} : {}
                }} to="/">Home</NavLink>

                <NavLink to="/books">Books</NavLink>

            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>

                {/*Nested routes With same Path*/}
                <Route path="/books"  element={<BookLayout/>}>
                    {/*<Route index element={<BookList/>}/>*/}
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
