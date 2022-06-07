import logo from "./logo.svg";
import "./App.css";

function App() {
  class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
    }
    static objToBook(obj) {
      let b = new Book(obj.title, obj.author, obj.ISBN);
      return b;
    }
  }
  function equals(book1, book2) {
    if (
      book1.title == book2.title &&
      book1.author == book2.author &&
      book1.ISBN == book2.ISBN
    )
      return true;
    return false;
  }

  function render() {
    //localStorage.setItem("books", JSON.stringify(books));
    //localStorage.setItem("booksHTML", bookList.innerHTML);
  }

  // set up webpage
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const ISBN = document.getElementById("ISBN");
  const bookList = document.getElementById("bookList");
  const sampleRow = document.getElementById("sampleRow");
  const submitBtn = document.getElementById("submit");
  const clearBtn = document.getElementById("clear");
  //sampleRow.remove();

  let books = {};
  /*if (localStorage.getItem("booksHTML") != null) {
    books = JSON.parse(localStorage.getItem("books"));
    books = books.map((obj) => Book.objToBook(obj));
    bookList.innerHTML = localStorage.getItem("booksHTML");
  }*/

  // add book entry
  function addBookEntry(action) {
    action.preventDefault();

    console.log(title.value);

    let titleStr = title.value;
    let authorStr = author.value;
    let ISBNStr = ISBN.value;
    let curBook = new Book(titleStr, authorStr, ISBNStr);

    let booksArr = Object.entries(books);
    for (let i = 0; i < booksArr.length; i++)
      if (equals(booksArr[i][1], curBook)) return;

    let newRow = sampleRow.cloneNode(true);
    newRow.children[0].textContent = titleStr;
    newRow.children[1].textContent = authorStr;
    newRow.children[2].textContent = ISBNStr;

    let deleteButton = newRow.children[3].children[0].children[0];
    let idStr = titleStr + "_" + authorStr + "_" + ISBNStr;
    newRow.setAttribute("id", idStr);
    deleteButton.addEventListener("click", (action) => {
      document.getElementById(idStr).remove();
      delete books[idStr];
      render();
    });

    bookList.appendChild(newRow);
    books[idStr] = curBook;
    render();
  }

  // clear book entry
  function clearBookEntries(action) {
    books = {};
    //localStorage.clear();
    bookList.innerHTML = "";
  }

  return (
    <div className="App">
      <div className="container">
        <div className="card p-3">
          <h1 className="my-4">Add Book:</h1>
          <b> Title </b>
          <input type="text" id="title" className="form-control" /> <br />
          <b> Author </b>
          <input type="text" id="author" className="form-control" /> <br />
          <b> ISBN# </b>
          <input type="text" id="ISBN" className="form-control" /> <br />
          <button className="btn" id="submit" onClick={addBookEntry}>
            Submit
          </button>
          <button className="btn btn-danger mt-3" id="clear" onClick={clearBookEntries}>
            Clear Library
          </button>
          <br />
          <br />
          <div className="container" id="chart">
            <div id="heading">
              <div className="row p-1">
                <div className="col-4">
                  <b> Title </b>
                </div>
                <div className="col-3">
                  <b> Author </b>
                </div>
                <div className="col-4">
                  <b> ISBN </b>
                </div>
              </div>
            </div>

            <div id="bookList">
              <div className="row p-1" id="sampleRow">
                <div className="col-4 mt-1"></div>
                <div className="col-3 mt-1"></div>
                <div className="col-4 mt-1"></div>
                <div className="col-1">
                  <div className="input-group-append">
                    <button className="btn btn-delete" id="deleteBook">
                      <u> x </u>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
