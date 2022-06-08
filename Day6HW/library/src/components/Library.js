import React from "react";
import BookInput from "./BookInput";

export default function Library(props) {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th> Title </th>
            <th> Author </th>
            <th> ISBN </th>
          </tr>
          {props.books.map((book) => (
            <tr key={book.id}>
              <td> {book.title} </td>
              <td> {book.author} </td>
              <td> {book.ISBN} </td>
              <td style={{"width": "0%"}}>
                <button className="btn" onClick={(e) => props.deleteBook(book.id)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
