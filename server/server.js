const express = require('express'); // if put a dot infront it will look in current folder
// by default will look for express in node_modules

// app.listen(5000) // start here to see if the server is working

const app = express();

// arrow funciton verses regular function
//let listener = () => {console.log('hello')};
// funtion listener() {};

const port = 5000; 

app.listen(port, () => {
    console.log(`listening on port ${port}`);
} );

let quotes_data = [
    { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

app.get('/quotes', (req, res) => {
    res.send(quotes_data);
});

