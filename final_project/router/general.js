const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const users = [];
  
    const { username, password } = req.body;

    const newUser = { username: 'kfredd', password: '1234' }; 
    users.push(newUser); // Add the new user to the users array

    // Send success response
    res.status(201).send({ message: "User registered successfully." });


    // Validate input
    if (!username || !password) {
        return res.status(400).send({ message: "Username and password are required." });
    }

    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send({ message: "Username already exists." });
    }

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

    const title = req.params.title;

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

   
    // Find books that match the specified title (case-insensitive)
    const matchedBooks = books.filter(b => b.title.toLowerCase() === title.toLowerCase());

    // Check if any books were found
    if (matchedBooks.length > 0) {
        // Send the matched books as a JSON response
        res.json(matchedBooks);
    } else {
        // If no books were found, send a 404 response
        res.status(404).send({ message: 'No books found with this title' });
    }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  // Retrieve the ISBN from the request parameters
  const isbn = req.params.isbn;

  // Sample array of book reviews (this would typically come from a database)
  const reviews = [
     
      { isbn: '1234567890', title: "Things Fall Apart", author: "Chinua Achebe", review: "A cemented masterpiece in 2000's.", rating: 5 },
      { isbn: '1234567892', title: "Fairy tales", author: "Hans Christian Andersen", reviews: "A poignant and gripping story.", rating: 4 },
      { isbn: '1234567893', title: "The Divine Comedy", author: "Dante Alighieri", reviews: "Thought-provoking and chilling.", rating: 5 },
      { isbn: '1234567894', title: "The Epic Of Gilgamesh", author: "Unknown", reviews: "A coming-of-age story that resonates.", rating: 4 },
      { isbn: '1234567895', title: "The Book Of Job", author: "Unknown", reviews: "A coming-of-age story that flourish.", rating: 4 },
      { isbn: '1234567896', title: "One Thousand and One Nights", author: "Unknown", reviews: "A great craftmanship resonates.", rating: 4 },
      { isbn: '1234567897', title: "Nj\u00e1l's Saga", author: "Unknown", reviews: "An engineered master craft.", rating: 7 },
      { isbn: '1234567898', title: "Pride and Prejudice", author: "Jane Austen", reviews: "A story that resonates.", rating: 6 },
      { isbn: '1234567899', title: "Le P\u00e8re Goriot", author: "Honor\u00e9 de Balzac", reviews: "A reconaissance art work.", rating: 9 },
      { isbn: '12345678910', title: "Molloy, Malone Dies", author: "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", reviews: "A design of age.", rating: 5 },
  ];

  // Find reviews that match the specified ISBN
  const bookReviews = reviews.filter(r => r.isbn === isbn);

  // Check if any reviews were found
  if (bookReviews.length > 0) {
      // Send the reviews as a JSON response
      res.json(bookReviews);
  } else {
      // If no reviews were found, send a 404 response
      res.status(404).send({ message: 'No reviews found for this ISBN' });
  }
});

module.exports.general = public_users;
