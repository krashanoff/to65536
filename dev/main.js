/*
A cozier main.min.js (before it gets mangled)
@krashanoff
*/

//Require
var base65536 = require('base65536');

//Main code
var motd = "Hello.  This will eventually become a thing where you can convert from base65536 to plaintext and vice versa";

var buf = new Buffer(motd);

var conv = base65536.encode(buf);

//Write to document
document.write(conv + "<br />" + "<br />" + motd);
