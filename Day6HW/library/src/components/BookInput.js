import React, { useState } from "react";

export default function BookInput(props) {
  const [book, setBook] = useState(props.createBook(0, "", "", ""));

  function updateTitle(e) {
    setBook(
      props.createBook(
        new Date().getTime(),
        e.target.value,
        book.author,
        book.ISBN
      )
    );
  }

  function updateAuthor(e) {
    setBook(
      props.createBook(
        new Date().getTime(),
        book.title,
        e.target.value,
        book.ISBN
      )
    );
  }

  function updateISBN(e) {
    setBook(
      props.createBook(
        new Date().getTime(),
        book.title,
        book.author,
        e.target.value
      )
    );
  }

  return (
    <div className="container">
      <h3 className="my-2"> Title </h3>
      <input type="text" className="form-control" onChange={updateTitle} />
      <h3 className="my-2"> Author </h3>
      <input type="text" className="form-control" onChange={updateAuthor} />
      <h3 className="my-2"> ISBN# </h3>
      <input type="text" className="form-control" onChange={updateISBN} />
      <button
        className="btn w-100 mt-4 border border-dark text-center"
        onClick={(e) => {
          props.addBook(book);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
