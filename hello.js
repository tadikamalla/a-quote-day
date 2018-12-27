// var http = require("http");

// function handleRequest(request, response) {
//   response.writeHead(200, { "content-type": "text/plain" });
//   response.end("Hello World");
// }

// var server = http.createServer(handleRequest);
// var port = 3000;

// server.listen(port);

// console.log("catch action");

// var fname = "Krishna";
// console.log(fname);

// var util = require("./util.js");

// console.log("code for India: ", util.getCountryCode("India"));

var express = require("express");

var app = express();

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT || 8080;

var server = app.listen(port, function(request, response) {
  console.log("TEST");
});
