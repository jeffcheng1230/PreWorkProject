import React, { useState, useEffect } from "react";
import BookInput from "./components/BookInput";
import Library from "./components/Library";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  class Book {
    constructor(id, title, author, ISBN) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
    }
  }

  let loadBooks = JSON.parse(localStorage.getItem("books"));
  if (loadBooks == null)
    loadBooks = [];
  else
    loadBooks = loadBooks.map((book) =>
      createBook(book.id, book.title, book.author, book.ISBN));
  const [books, setBooks] = useState(loadBooks);
  useEffect(() => {storeBooks()}, [books]);

  function createBook(id, title, author, ISBN) {
    return new Book(id, title, author, ISBN);
  }

  function addBook(book) {
    setBooks([...books, book]);
  }

  function deleteBook(id) {
    setBooks(books.filter((book) => book.id != id));
  }

  function storeBooks() {
    localStorage.setItem("books", JSON.stringify(books));
  }

  return (
    <div className="container">
      <div className="card m-2 p-2">
        <h1 className="my-3"> Add Book: </h1>
        <BookInput createBook={createBook} addBook={addBook}></BookInput>
        <Library books={books} deleteBook={deleteBook}></Library>
      </div>
    </div>
  );
}
