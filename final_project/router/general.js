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
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
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
