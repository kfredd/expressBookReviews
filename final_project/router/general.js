const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    const books = [
        { id: 1, title: "Things Fall Apart", author: "Chinua Achebe", reviews: {} },
        { id: 2, title: "Fairy tales", author: "Hans Christian Andersen", reviews: {} },
        { id: 3, title: "The Divine Comedy", author: "Dante Alighieri", reviews: {} },
        { id: 4, title: "The Epic Of Gilgamesh", author: "Unknown", reviews: {} },
        { id: 5, title: "The Book Of Job", author: "Unknown", reviews: {} },
        { id: 6, title: "One Thousand and One Nights", author: "Unknown", reviews: {} },
        { id: 7, title: "Nj\u00e1l's Saga", author: "Unknown", reviews: {} },
        { id: 8, title: "Pride and Prejudice", author: "Jane Austen", reviews: {} },
        { id: 9, title: "Le P\u00e8re Goriot", author: "Honor\u00e9 de Balzac", reviews: {} },
        { id: 10, title: "Molloy, Malone Dies", author: "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", reviews: {} },


    ];
    res.send(JSON.stringify(books, null, 2));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  // Retrieve the ISBN from the request parameters
  const isbn = req.params.isbn;

  // Sample array of books (this would typically come from a database)
  const books = [
      
      { isbn: '1234567890', title: "Things Fall Apart", author: "Chinua Achebe", reviews: {} },
      { isbn: '1234567892', title: "Fairy tales", author: "Hans Christian Andersen", reviews: {} },
      { isbn: '1234567893', title: "The Divine Comedy", author: "Dante Alighieri", reviews: {} },
      { isbn: '1234567894', title: "The Epic Of Gilgamesh", author: "Unknown", reviews: {} },
      { isbn: '1234567895', title: "The Book Of Job", author: "Unknown", reviews: {} },
      { isbn: '1234567896', title: "One Thousand and One Nights", author: "Unknown", reviews: {} },
      { isbn: '1234567897', title: "Nj\u00e1l's Saga", author: "Unknown", reviews: {} },
      { isbn: '1234567898', title: "Pride and Prejudice", author: "Jane Austen", reviews: {} },
      { isbn: '1234567899', title: "Le P\u00e8re Goriot", author: "Honor\u00e9 de Balzac", reviews: {} },
      { isbn: '12345678910', title: "Molloy, Malone Dies", author: "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", reviews: {} },
  ];

  // Find the book with the matching ISBN
  const book = books.find(b => b.isbn === isbn);

  // Check if the book exists
  if (book) {
      // Send the book details as a JSON response
      res.json(book);
  } else {
      // If not found, send a 404 response
      res.status(404).send({ message: 'Book not found' });
  }
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;

    const books = [

      { isbn: '1234567890', title: "Things Fall Apart", author: "Chinua Achebe", reviews: {} },
      { isbn: '1234567892', title: "Fairy tales", author: "Hans Christian Andersen", reviews: {} },
      { isbn: '1234567893', title: "The Divine Comedy", author: "Dante Alighieri", reviews: {} },
      { isbn: '1234567894', title: "The Epic Of Gilgamesh", author: "Unknown", reviews: {} },
      { isbn: '1234567895', title: "The Book Of Job", author: "Unknown", reviews: {} },
      { isbn: '1234567896', title: "One Thousand and One Nights", author: "Unknown", reviews: {} },
      { isbn: '1234567897', title: "Nj\u00e1l's Saga", author: "Unknown", reviews: {} },
      { isbn: '1234567898', title: "Pride and Prejudice", author: "Jane Austen", reviews: {} },
      { isbn: '1234567899', title: "Le P\u00e8re Goriot", author: "Honor\u00e9 de Balzac", reviews: {} },
      { isbn: '12345678910', title: "Molloy, Malone Dies", author: "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", reviews: {} },
    ];

    // Initialize an array to hold books by the specified author
    const booksByAuthor = books.filter(b => b.author.toLowerCase() === author.toLowerCase());

    // Check if any books were found
    if (booksByAuthor.length > 0) {
        // Send the books by the author as a JSON response
        res.json(booksByAuthor);
    } else {
        // If no books were found, send a 404 response
        res.status(404).send({ message: 'No books found for this author' });
    }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
