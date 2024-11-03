const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req,res,next){
// POST endpoint for handling login
app.post('/login', (req, res) => {
    const {username, password} = req.body;

    // Simulated user authentication (replace with actual logic)
    if(username === 'user' && password === 'password'){
        req.session.user = username;
        res.send('login successfully');
    }else{
        res.send('Invalid Credentials');
    }
});

// GET endpoint for accessing dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user){
        req.send(`welcome ${req.session.user}`);
    }else{
        req.send('please login first');
    }
});
});
 
const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT,()=>console.log("Server is running"));
