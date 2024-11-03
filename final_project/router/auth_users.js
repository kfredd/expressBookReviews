const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

const secretKey = 'IluvYouuuuuuu';
let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
    const { username, password } = req.body; 

    // Validate input
    if (!username || !password) {
        return res.status(400).send({ message: "Username and password are required." });
    }

    // Check if user exists and password matches
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(401).send({ message: "Invalid username or password." });
    }

    // Create JWT
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

    // Send success response with token
    res.status(200).send({ message: "Login successful.", token });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
