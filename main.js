var base65536 = require('base65536');

var buffer = new Buffer("hello world");

var convert = base65536.encode(buffer);

console.log(convert);
