/*
A cozier main.min.js (before it gets mangled)
@krashanoff
*/

var base65536 = require('base65536');

var buf = new Buffer(current);

var conv = base65536.encode(buf);

function convertit(){

  var current = document.getElementById('textIn').value;

  console.log(conv);
}
