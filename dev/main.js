/*
A cozier main.min.js (before it gets mangled)
@krashanoff
*/

var base65536 = require('base65536');

var plaintext = document.getElementById('plaintext').value;

//Each time the plaintext field changes, log the output
$('#plaintext').change(function(){

  var buffer = new Buffer(plaintext);

  var convert = base65536.encode(buffer);

  console.log(convert);
});
