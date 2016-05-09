/*
A cozier main.min.js (before it gets mangled)
@krashanoff
*/

//Require
var base65536 = require('base65536');

//Main code
function twosix(){
  var plaintextValue = document.querySelector("#plaintext").value;

  var outputDiv = document.querySelector("#output");

  var buf = new Buffer(plaintextValue);

  var conv = base65536.encode(buf);

  outputDiv.textContent = conv;
};
