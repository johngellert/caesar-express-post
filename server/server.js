const express = require('express'); // if put a dot infront it will look in current folder
// by default will look for express in node_modules
const bodyParser = require('body-parser');

// bring in quotes in array in quotes-array.js
const quotesArray = require('./quotes-array.js');

// app.listen(5000) // start here to see if the server is working

const app = express();

app.use(express.static('server/public'));

//
//
//
// this line needs to be added above all routes. Add as high as possible
// this line creates req.body
// if not here or after post, or if it is after your post, you will suffer
app.use(bodyParser.urlencoded({extended: true}));
//
// allows requests to come in that come in a urlencoded and turn into req.body
//
//
//





// arrow funciton verses regular function
//let listener = () => {console.log('hello')};
// funtion listener() {};

const port = 5000; 

app.listen(port, () => {
    console.log(`listening on port ${port}`);
} );



// let quotes_data = [
//     { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
//     { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
//     { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
// ];

app.get('/quotes', (req, res) => {
    res.send(quotesArray);
});


// post means we are creating somthing or adding something
// browsers only do get requests 
app.post('/new', (req, res) => {
    // res.send(200); //generic thumbs up


    // need to bring in a package body-parser
    quotesArray.push(req.body);
    res.sendStatus(201); // means I created something
});

