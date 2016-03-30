/*
A cozier main.min.js (before it gets mangled)
@krashanoff
*/

var base65536 = require('base65536');

//Each time the plaintext field changes, log the output
$('#plaintext').bind('input', function() {
    var current = $(this).val();

    var buf = new Buffer(current);

    var conv = base65536.encode(buf);

    console.log(conv);
});
