/*
A cozier main.min.js (before it gets mangled)
@krashanoff
*/

var base65536 = require('base65536');

var buf = new Buffer("MOTD");

var conv = base65536.encode(buf);

document.write(conv);
