import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NewsLetter from "./Components/NewLetter";
import Contact from "./Components/Contact";
import Book from "./Components/Book";
import BookList from "./Components/BookList";

export default () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <Link to="/booklist">BookList</Link>
          </li>
          <li>
            <Link to="/newsletter">NewsLetter</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />

        <Route path="/book" element={<Book />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<NewsLetter />} />
      </Routes>
    </>
  );
};
