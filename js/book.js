// global get id's
const searchField = document.getElementById("input-box");
const searchResult = document.getElementById("search-result");
const setMessage = document.getElementById("message");
const numbersOfBook = document.getElementById("numbers-of-found-books");
const searchBook = () => {
  // get value from the input box
  const searchText = searchField.value;
  // clear all fields
  searchField.value = "";
  searchResult.innerHTML = "";
  setMessage.innerHTML = "";
  numbersOfBook.innerHTML = "";
  // error handling
  if (searchText === "") {
    const h1 = document.createElement("h1");
    h1.innerHTML = `
        <h1 class="mt-5 border rounded mx-auto p-5 w-75 mb-5 text-center text-uppercase">Please input your book name.</h1>
            `;
    setMessage.appendChild(h1);
  }
  // fetch API
  else {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayBook(data.docs, data.numFound));
  }
};

// get API DATA
const displayBook = (books, numbersOfBooks) => {
  books.forEach((book) => {
    // create a new div for showing book data and add a classlist named col
    const div = document.createElement("div");
    div.classList.add("col");
    // set API data's
    div.innerHTML = `<div class="card h-100">
    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" style="height: 200px;" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Title: ${book.title}</h5>
      <h5 class="card-title">Author: ${book.author_name}</h5>
      <h6 class="card-text">
        First Published: ${book.first_publish_year}
      </h6>
      <h6 class="card-text">
      Publisher: ${book.publisher}
    </h6>
    </div>
  </div>`;
    // append div into parent div
    searchResult.appendChild(div);
  });
  // show found result section creating div and adding found result
  const numbersOfBookDiv = document.createElement("div");
  numbersOfBookDiv.innerHTML = `
    <h1 class="mt-5 border rounded mx-auto p-5 w-75 mb-5 text-center text-uppercase">${numbersOfBooks} results are found</h1>`;
  numbersOfBook.appendChild(numbersOfBookDiv);
};