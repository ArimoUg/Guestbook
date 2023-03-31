var express = require('express');
var fs = require('fs');
var app = express();
const port = process.env.PORT || 8080; //listens to port provided by webhost or 8080
const path = require("path"); //relative windows or MacOS


//Static
//
//General Styles
app.get("/StyleP1", (req, res) => {
    res.sendFile(path.join(__dirname + 'StyleP1.css'));
});

//JSON Data for Guestbook table
app.get("", function (req, res) {
    res.sendFile(path.join(__dirname + 'guestbook.json'));
});


//Listing all available static pages
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

app.get('/guestbook', function (req, res) {
    res.sendFile(path.join(__dirname + 'guestbook.html'));
});

app.get('/newmessage', function (req, res) {
    res.sendFile(path.join(__dirname + 'newmessage.html'));
});

app.get('/ajaxmessage', function (req, res) {
    res.sendFile(path.join(__dirname + 'ajaxmessage.html'));
});


//Functions
//
//
//
//Guestbook functions
app.get("/TableFunctions", (req, res) => {
    res.sendFile(path.join(__dirname + 'taulukko.js'));
});



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/newmessage', function (req, res) {
    var data = "";

    data += req.body.username + "\n";
    data += req.body.country + "\n";
    data += req.body.message + "\n";
console.log(data);
res.send(data);
})

//General Error message
app.get('*', function (req, res) {
    res.send('Cant find the requested page', 404);
});

//General console.log
app.listen(port, function() {
    console.log('Service has started and is listening on port ' + port + '. ');
});// JavaScript Document