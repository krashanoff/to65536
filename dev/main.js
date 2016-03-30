/*
A cozier main.min.js (before it gets mangled)
@krashanoff
*/

$(document).ready(function(){
  var base65536 = require('base65536');
});

//Each time the plaintext field changes, log the output
$('#plaintext').bind('input', function() {
    var current = document.getElementById('plaintext').value;

    var buf = new Buffer(current);

    var conv = base65536.encode(buf);

    console.log(conv);
});
