import React, { useContext, useEffect, useState } from "react";
import { LoaderContext, SearchQueryContext } from "../../App";
import "./Books.css";
import star from '.././pic/star.svg';

function Books(props) {
  const [books, setBooks] = useState([]);

  const { data } = props;
  const { loader } = useContext(LoaderContext);
  const { searchQuery } = useContext(SearchQueryContext);

  useEffect(() => {
    if (data && data.books) {
      setBooks(data.books);
    } else if (data && data.books && data.books.error) {
      setBooks([]);
    }
  }, [data]);

  return (
    <div className="container">
      {loader && (
        <div class="ring">Loading...
        <span id="highlight"></span>
        </div>
      )}

      {!loader && searchQuery != "" && (
        <>
          <div className="results">
            <h1>
              Search Results for&nbsp;
              <span className="query">{searchQuery}</span>
            </h1>
            <p className="status">
              {books.length ? books.length : "0"} search results were found
            </p>
          </div>
        </>
      )}

      <div className="books">
        {!loader && books.length > 0 && (
          <>
            {books.map((book) => (
              <div className="book" key={book.id}>
                <div className="book-img-container">
                  <img
                    className="book-img"
                    src={book.imageLinks?.thumbnail}
                    alt={
                      book.imageLinks?.thumbnail
                        ? undefined
                        : "Image not available"
                    }
                  />
                </div>
                <br />
                <hr className="book-split" />
                
                <div className="book-details">
                  
                  <p className="book-title">{book.title}</p>

                  <div className="book-details-row">
                    {book.averageRating ? (
                      <div className="book-rating">
                        <img src={star} alt="" />
                        <p>{book.averageRating} / 5</p>
                      </div>
                    ) : (
                      <div className="book-rating">
                        <img src="./icons/star.svg" alt="" />
                        <p>N A</p>
                      </div>
                    )}
                    <p className="book-cost">Free</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Books;
